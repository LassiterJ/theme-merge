import * as fs from 'fs';
import { NewTheme as theme2, OldTheme as theme1 } from './sampleThemes.js';
class ThemeMerger {
    options;
    static readJSONFile(filePath) {
        try {
            const file = fs.readFileSync(filePath, "utf8");
            return JSON.parse(file);
        }
        catch (error) {
            console.error("readJSONFile ERROR: ", error);
            throw error;
        }
    }
    constructor(initialOptions) {
        const defaultOptions = {
            target: {},
            source: [{}],
            createFile: false,
            outputFormat: "jsonString",
            newThemeName: "newTheme",
        };
        if (!initialOptions) {
            throw new Error("Initial Options are required");
        }
        this.options = this.buildOptions(defaultOptions, initialOptions);
    }
    composeNewTheme() {
        try {
            const { target, source, newThemeName } = this.options;
            const newTheme = { ...ThemeMerger.mergeThemes(target, source), name: newThemeName };
            return this.outputNewTheme(newTheme);
        }
        catch (error) {
            console.error("composeNewTheme ERROR: ", error);
            throw error;
        }
    }
    static mergeThemes(target, ...sources) {
        // Recursively traverse the sources Array and merge each source into the target
        // Only merge items that have changed or is not present in target
        // if no sources, return target
        if (!sources.length || !this.isObject(target)) {
            return target;
        }
        const source = sources.shift();
        if (!this.isObject(source) && !Array.isArray(source))
            return this.mergeThemes(target, ...sources);
        // if source is an Array, map over it and merge each item into the target
        if (Array.isArray(source)) {
            if (source.length < 1)
                return this.mergeThemes(target, ...sources);
            return source.map((item, index) => {
                if (this.isObject(item)) {
                    return this.mergeThemes(target[index] || {}, item);
                }
                return item;
            });
        }
        // apply overwrites to target object
        for (const key in source) {
            if (this.isObject(source[key])) {
                target[key] = this.mergeThemes(target[key] || {}, source[key]);
            }
            else {
                target[key] = source[key];
            }
        }
        return this.mergeThemes(target, ...sources);
    }
    // private Methods TODO: we may want some of these to be publicly available or moved to Utils file/folder
    static isObject(item) {
        return item && typeof item === "object"; // && !Array.isArray(item) supporting arrays for extended colors in theme;
    }
    optionsAreValid(options) {
        //  TODO: add other conditions for options and refine current ones:
        // fileType
        // outputFormat
        // createFile,
        return !(!options?.target || !options?.source);
    }
    async writeJSONStringToFile(jsonString, path = ".", fileName) {
        const filePath = `${path}/${fileName}.json`;
        console.log("filePath: ", filePath);
        fs.writeFile(filePath, jsonString, (err) => {
            if (err)
                throw err;
            // console.log(`JSON string written to file: ${filePath}`);
            console.log("writeFile Callback");
        });
    }
    jsonToThemeObj(theme) {
        if (!theme) {
            throw new Error("The input theme is falsy");
        }
        try {
            return JSON.parse(theme);
        }
        catch (error) {
            throw new Error(`Failed to parse the JSON string: ${error.message}`, error);
        }
    }
    buildOptions(defaultOptions, initialOptions) {
        const options = { ...defaultOptions, ...initialOptions };
        if (!this.optionsAreValid(options)) {
            throw new Error("Input Options are not Valid.");
        }
        const { target, source, createFile, outputFormat, outputPath, outputFileName, ...restOptions } = options;
        // format target and source as necessary
        const formattedTarget = ThemeMerger.isObject(options.target) ? options.target : this.jsonToThemeObj(options.target);
        const formattedSource = ThemeMerger.isObject(options.source) ? options.source : this.jsonToThemeObj(options.source);
        if (createFile) { // TODO: I don't like assigning to the restOptions object rather than composing a new object.
            Object.assign(restOptions, { createFile, outputPath, outputFileName });
        }
        return { target: formattedTarget, source: formattedSource, ...restOptions };
    }
    ;
    outputNewTheme(themeObject) {
        try {
            const { createFile, outputFormat, outputPath, outputFileName = "" } = this.options;
            const jsonTheme = JSON.stringify(themeObject, null, 4);
            const formattedTheme = outputFormat === "jsonString" ? jsonTheme : themeObject;
            if (createFile) {
                this.writeJSONStringToFile(jsonTheme, outputPath, outputFileName);
            }
            return formattedTheme;
        }
        catch (error) {
            console.error("outputNewTheme ERROR: ", error);
            throw error;
        }
    }
}
//
//
//
/* ========== Usage Demo ========== */
const useDemoData = false;
const OldTheme = useDemoData ? theme1 : ThemeMerger.readJSONFile("../themes/theme1.json");
const NewTheme = useDemoData ? theme2 : ThemeMerger.readJSONFile("../themes/theme2.json");
// Instantiate the ThemeMerger class with the options
const themeMergeInstance = new ThemeMerger({
    target: OldTheme,
    source: NewTheme,
    createFile: true,
    outputPath: "../themes",
    outputFileName: "mergedTheme",
});
// Call the createNewTheme method to merge the themes and optionally output to a file
const newTheme = themeMergeInstance.composeNewTheme();
const mergedTheme = ThemeMerger.mergeThemes(OldTheme, NewTheme); // Or use the static method directly to return a new theme object
// Notes:
// Only updates the theme deeply with the values that have changed. Like what a Virtual DOM does.
// Allows for updating the theme with new values that are not present in the original theme.
