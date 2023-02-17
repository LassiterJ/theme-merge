"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = __importStar(require("fs"));
// Built as a solution to updating a JSON theme file with a new theme with only the values that have changed, even in descendent children
// The class handles the merge as well as formatting and optionally outputting to a file in a specified directory.
class ThemeMerger {
    options;
    constructor(initialOptions) {
        const defaultOptions = {
            target: {},
            source: [{}],
            createFile: false,
            outputFormat: "jsonString"
        };
        const options = { ...defaultOptions, ...initialOptions };
        if (!this.optionsAreValid(options)) {
            throw new Error("Input Options are not Valid.");
        }
        // format target and source as necessary
        const targetIsJSON = this.isValidJSON(options.target);
        const sourceIsJSON = this.isValidJSON(options.source);
        this.options = {
            ...options,
            target: targetIsJSON
                ? this.jsonToThemeObj(options.target)
                : options.target,
            source: sourceIsJSON
                ? this.jsonToThemeObj(options.source)
                : options.source
        };
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
    isValidJSON(jsonString) {
        if (typeof jsonString !== "string")
            return false; // don't even try to parse;
        try {
            JSON.parse(jsonString);
            return true;
        }
        catch (error) {
            return false;
        }
    }
    writeJSONStringToFile(jsonString, path = "./", fileName) {
        const filePath = `${path}/${fileName}.json`;
        fs.writeFile(filePath, jsonString, (err) => {
            // Error Type = NodeJS.ErrnoException
            if (err)
                throw err;
            console.log(`JSON string written to file: ${filePath}`);
        });
    }
    jsonToThemeObj(theme) {
        if (!theme) {
            throw new Error("The input theme is falsy");
        }
        if (this.isObject(theme))
            return theme;
        // if (!this.isValidJSON(theme)) {
        //     throw new Error("The given JSON string is not valid.");
        // }
        const result = {};
        try {
            return JSON.parse(theme); // I swear I tried this before and it didn't work. Lets see
            // for (const key of Object.keys(parsedJSON)) {
            //     if (this.isObject(parsedJSON)[key] && !(parsedJSON[key] instanceof Array)) {
            //         result[key] = {...this.jsonToThemeObj(parsedJSON[key])};
            //     } else {
            //         result[key] = parsedJSON[key];
            //     }
            // }
            //return result;
        }
        catch (error) {
            throw new Error(`Failed to parse the JSON string: ${error.message}`);
        }
    }
    outputNewTheme(themeObject) {
        const { createFile, outputFormat, outputDirectory, outputFileName } = this.options;
        const jsonTheme = JSON.stringify(themeObject, null, 4);
        const formattedTheme = outputFormat === "jsonString" ? jsonTheme : themeObject;
        if (createFile) {
            this.writeJSONStringToFile(jsonTheme, outputDirectory, outputFileName);
        }
        return formattedTheme;
    }
}
const DesignSystemTheme = {
    divider: {
        value: "rgba(255,255,255,0.12)",
        type: "color",
        description: "Reflects the divider variable from the theme object"
    },
    text: {
        primary: {
            value: "rgba(255,255,255, 1)",
            type: "color",
            description: "Reflects the text.primary variable from the theme object"
        },
        secondary: {
            value: "rgba(255,255,255, 0.7)",
            type: "color",
            description: "Reflects the text.secondary variable from the theme object"
        },
        disabled: {
            value: "rgba({text.primary}, {action.disabledOpacity})",
            type: "color",
            description: "Reflects the text.disabled variable from the theme object"
        }
    },
    primary: {
        main: {
            value: "{blue.200}",
            type: "color",
            description: "Reflects the primary.main variable from the theme object"
        },
        dark: {
            value: "{blue.400}",
            type: "color",
            description: "Used for hover states. Reflects the primary.dark variable from the theme object"
        },
        light: {
            value: "{blue.50}",
            type: "color",
            description: "Reflects the primary.light variable from the theme object"
        },
        contrast: {
            value: "rgba(0,0,0,0.87)",
            type: "color",
            description: "Reflects the primary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        states: {
            hover: {
                value: "rgba({primary.main}, {action.hoverOpacity})",
                type: "color",
                description: "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            selected: {
                value: "rgba({primary.main}, {action.selectedOpacity})",
                type: "color",
                description: "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            focus: {
                value: "rgba({primary.main}, {action.focusOpacity})",
                type: "color",
                description: "Used for focus states. The token represents the value of action.focusOpacity (0.12 by default) of the main token."
            },
            focusVisible: {
                value: "rgba({primary.main}, 0.3)",
                type: "color",
                description: "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            outlinedBorder: {
                value: "rgba({primary.main}, 0.5)",
                type: "color",
                description: "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    secondary: {
        main: {
            value: "{purple.200}",
            type: "color",
            description: "Reflects the secondary.main variable from the theme object"
        },
        dark: {
            value: "{purple.400}",
            type: "color",
            description: "Used for hover states. Reflects the secondary.dark variable from the theme object"
        },
        light: {
            value: "{purple.50}",
            type: "color",
            description: "Reflects the secondary.light variable from the theme object"
        },
        contrast: {
            value: "rgba(0,0,0,0.87)",
            type: "color",
            description: "Reflects the secondary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        states: {
            hover: {
                value: "rgba({secondary.main}, {action.hoverOpacity})",
                type: "color",
                description: "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            selected: {
                value: "rgba({secondary.main}, {action.selectedOpacity})",
                type: "color",
                description: "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            focus: {
                value: "rgba({secondary.main}, {action.focusOpacity})",
                type: "color",
                description: "Used for focus visible states. The token represents 12% of the Secondary/Main token"
            },
            focusVisible: {
                value: "rgba({secondary.main}, 0.3)",
                type: "color",
                description: "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            outlinedBorder: {
                value: "rgba({secondary.main}, 0.5)",
                type: "color",
                description: "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    }
};
const WebsiteTheme = {
    divider: {
        value: "rgba(255,255,255,0.12)",
        type: "color",
        description: "Reflects the divider variable from the theme object"
    },
    text: {
        primary: {
            value: "rgba(255,255,255, 1)",
            type: "color",
            description: "Reflects the text.primary variable from the theme object"
        },
        secondary: {
            value: "rgba(255,255,255, 0.7)",
            type: "color",
            description: "Reflects the text.secondary variable from the theme object"
        },
        disabled: {
            value: "rgba({text.primary}, {action.disabledOpacity})",
            type: "color",
            description: "Reflects the text.disabled variable from the theme object"
        }
    },
    primary: {
        main: {
            value: "{blue.200}",
            type: "color",
            description: "Reflects the primary.main variable from the theme object"
        },
        dark: {
            value: "{blue.400}",
            type: "color",
            description: "Used for hover states. Reflects the primary.dark variable from the theme object"
        },
        light: {
            value: "{blue.50}",
            type: "color",
            description: "Reflects the primary.light variable from the theme object"
        },
        contrast: {
            value: "rgba(0,0,0,0.87)",
            type: "color",
            description: "Reflects the primary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        states: {
            hover: {
                value: "rgba({primary.main}, {action.hoverOpacity})",
                type: "color",
                description: "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            selected: {
                value: "rgba({primary.main}, {action.selectedOpacity})",
                type: "color",
                description: "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            focus: {
                value: "rgba({primary.main}, {action.focusOpacity})",
                type: "color",
                description: "Used for focus states. The token represents the value of action.focusOpacity (0.12 by default) of the main token."
            },
            focusVisible: {
                value: "rgba({primary.main}, 0.3)",
                type: "color",
                description: "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            outlinedBorder: {
                value: "rgba({primary.main}, 0.5)",
                type: "color",
                description: "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    secondary: {
        main: {
            value: "{purple.200}",
            type: "color",
            description: "Reflects the secondary.main variable from the theme object"
        },
        dark: {
            value: "{purple.400}",
            type: "color",
            description: "Used for hover states. Reflects the secondary.dark variable from the theme object"
        },
        light: {
            value: "{purple.50}",
            type: "color",
            description: "Reflects the secondary.light variable from the theme object"
        },
        contrast: {
            value: "rgba(0,0,0,0.87)",
            type: "color",
            description: "Reflects the secondary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        states: {
            hover: {
                value: "rgba({secondary.main}, {action.hoverOpacity})",
                type: "color",
                description: "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            selected: {
                value: "rgba({secondary.main}, {action.selectedOpacity})",
                type: "color",
                description: "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            focus: {
                value: "rgba({secondary.main}, {action.focusOpacity})",
                type: "color",
                description: "Used for focus visible states. The token represents 12% of the Secondary/Main token"
            },
            focusVisible: {
                value: "rgba({secondary.main}, 0.3)",
                type: "color",
                description: "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            outlinedBorder: {
                value: "rgba({secondary.main}, 0.5)",
                type: "color",
                description: "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    }
};
const themeMergeInstance = new ThemeMerger({
    target: WebsiteTheme,
    source: DesignSystemTheme
});
const newTheme = themeMergeInstance.createNewTheme();
console.log("newTheme: ", newTheme);
