import * as fs from 'fs';
import {DesignSystemTheme, WebsiteTheme} from './sampleThemes.js';

// Description: Deep merge two objects or arrays with configuration options
// Built as a solution to updating a JSON theme file with a new theme with only the values that have changed, even in descendent children
// The class handles the merge as well as formatting and optionally outputting to a file in a specified directory.
export type ThemeObject = {
    [key:string]: any;
}

type OutputFormat = "jsonString" | "jsObject"; // TODO: add support for more outputFormats AND/OR let a formatter be passed in as a ThemeMergeOption
interface InitialOptions {
    createFile?: true | false;
    outputPath?: string;
    outputFileName?: string;
    outputFormat?: OutputFormat;
    source: ThemeObject | ThemeObject[] | string
    target: ThemeObject | string;
}

interface Options extends InitialOptions {
    source: ThemeObject | ThemeObject[];
    target: ThemeObject;
}

class ThemeMerger {
    public readonly options: Options;

    constructor(initialOptions: InitialOptions | undefined) {
        const defaultOptions: InitialOptions = {
            target: {},
            source: [{}],
            createFile: false,
            outputFormat: "jsonString"
        };
        if(!initialOptions){
            throw new Error("Initial Options are required");
        }
        this.options = this.buildOptions(defaultOptions, initialOptions);

    }

    public createNewTheme() {
        try {
            const { target, source } = this.options;
            const newTheme = this.mergeThemes(target, source);
            return this.outputNewTheme(newTheme);
        } catch (error) {
            console.error("createNewTheme ERROR: ", error);
            throw error;
        }
    }
    public mergeThemes(target: ThemeObject, ...sources: ThemeObject[]): object {
        // Recursively traverse the sources object
        // Only merge items that have changed or is not present in target
        // if no sources, return target
        if (!sources.length || !this.isObject(target)) {
            return target;
        }

        const source = sources.shift();
        if (!this.isObject(source)) return this.mergeThemes(target, ...sources);

        for (const key in source) {
            if (this.isObject(source[key])) {
                target[key] = this.mergeThemes(target[key] || {}, source[key]);
            } else {
                target[key] = source[key];
            }
        }

        return this.mergeThemes(target, ...sources);
    }
    // private methods TODO: we may want some of these to be publicly available or moved to Utils file/folder
    private isObject(item: any): true | false{
        return item && typeof item === "object" && !Array.isArray(item);
    }
    private optionsAreValid(options: InitialOptions): true | false {
        //  TODO: add other conditions for options and refine current ones:
        // fileType
        // outputFormat
        // createFile,

        return !(!options?.target || !options?.source);

    }

    private async writeJSONStringToFile(
        jsonString: string,
        path = ".",
        fileName: string
    ) {
        const filePath = `${path}/${fileName}.json`;
        console.log("filePath: ", filePath);
        fs.writeFile(filePath, jsonString, (err) => {
            if (err) throw err;
           // console.log(`JSON string written to file: ${filePath}`);
            console.log("writeFile Callback");
        });
    }
    private jsonToThemeObj(theme: string): ThemeObject {
        if(!theme){
            throw new Error("The input theme is falsy");
        }

        //const result = {};

    try {
        return JSON.parse(theme) // I swear I tried this before, and it didn't work deeply. Let's see...

        }catch(error: any){
            throw new Error(`Failed to parse the JSON string: ${error.message}`, error);
        }
    }
    private buildOptions(defaultOptions: InitialOptions, initialOptions: InitialOptions){
        const options: InitialOptions = { ...defaultOptions, ...initialOptions };
        if (!this.optionsAreValid(options)) {
            throw new Error("Input Options are not Valid.");
        }
        const {target, source, createFile, outputFormat, outputPath, outputFileName, ...restOptions} = options;

        // format target and source as necessary
        const formattedTarget: ThemeObject = this.isObject(options.target) ? options.target as ThemeObject: this.jsonToThemeObj(options.target as string);
        const formattedSource: ThemeObject = this.isObject(options.source) ? options.source as ThemeObject: this.jsonToThemeObj(options.source as string);

        if(createFile){ // TODO: Not sure I like assigning to the restOptions object rather than making a new object.
            Object.assign(restOptions,{createFile, outputPath, outputFileName })
        }
        return { target: formattedTarget, source: formattedSource, ...restOptions};
    };

    private outputNewTheme(themeObject: object): object | string {
        const {
            createFile,
            outputFormat,
            outputPath,
            outputFileName = ""
        } = this.options;
        const jsonTheme = JSON.stringify(themeObject, null, 4);
        const formattedTheme = outputFormat === "jsonString" ? jsonTheme : themeObject;
        if (createFile) {
            this.writeJSONStringToFile(jsonTheme, outputPath, outputFileName);
        }
        return formattedTheme;
    }
}

const themeMergeInstance = new ThemeMerger({
    target: WebsiteTheme,
    source: DesignSystemTheme,
    createFile: true,
    // outputPath: "../jsonThemes",
    outputFileName: "newTheme",
});
const newTheme = themeMergeInstance.createNewTheme();

console.log("newTheme: ", newTheme);
