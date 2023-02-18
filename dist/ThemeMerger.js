import * as fs from 'fs';
import { DesignSystemTheme, WebsiteTheme } from './sampleThemes.js';
class ThemeMerger {
    options;
    constructor(initialOptions) {
        const defaultOptions = {
            target: {},
            source: [{}],
            createFile: false,
            outputFormat: "jsonString"
        };
        if (!initialOptions) {
            throw new Error("Initial Options are required");
        }
        this.options = this.buildOptions(defaultOptions, initialOptions);
    }
    createNewTheme() {
        try {
            const { target, source } = this.options;
            const newTheme = this.mergeThemes(target, source);
            return this.outputNewTheme(newTheme);
        }
        catch (error) {
            console.error("createNewTheme ERROR: ", error);
            throw error;
        }
    }
    mergeThemes(target, ...sources) {
        // Recursively traverse the sources object
        // Only merge items that have changed or is not present in target
        // if no sources, return target
        if (!sources.length || !this.isObject(target)) {
            return target;
        }
        const source = sources.shift();
        if (!this.isObject(source))
            return this.mergeThemes(target, ...sources);
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
    // private methods TODO: we may want some of these to be publicly available or moved to Utils file/folder
    isObject(item) {
        return item && typeof item === "object" && !Array.isArray(item);
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
        //const result = {};
        try {
            return JSON.parse(theme); // I swear I tried this before, and it didn't work deeply. Let's see...
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
        const formattedTarget = this.isObject(options.target) ? options.target : this.jsonToThemeObj(options.target);
        const formattedSource = this.isObject(options.source) ? options.source : this.jsonToThemeObj(options.source);
        if (createFile) { // TODO: Not sure I like assigning to the restOptions object rather than making a new object.
            Object.assign(restOptions, { createFile, outputPath, outputFileName });
        }
        return { target: formattedTarget, source: formattedSource, ...restOptions };
    }
    ;
    outputNewTheme(themeObject) {
        const { createFile, outputFormat, outputPath, outputFileName = "" } = this.options;
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
