import * as fs from 'fs';

// Description: Deep merge two objects or arrays with configuration options
// Built as a solution to updating a JSON theme file with a new theme with only the values that have changed, even in descendent children
// The class handles the merge as well as formatting and optionally outputting to a file in a specified directory.
type ThemeObject = {
    [key:string]: any;
}

type OutputFormat = "jsonString" | "jsObject"; // TODO: add support for more outputFormats AND/OR let a formatter be passed in as a ThemeMergeOption
type CreateFile = boolean;
interface InitialOptions {
    createFile?: CreateFile;
    outputPath?: InitialOptions["createFile"] extends true
        ? string
        : never;
    outputFileName?: InitialOptions["createFile"] extends true
        ? string
        : never;
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
    constructor(initialOptions: InitialOptions) {
        const defaultOptions: InitialOptions = {
            target: {},
            source: [{}],
            createFile: false,
            outputFormat: "jsonString"
        };

        const options: InitialOptions = { ...defaultOptions, ...initialOptions };
        if (!this.optionsAreValid(options)) {
            throw new Error("Input Options are not Valid.");
        }
        // format target and source as necessary
        const target: ThemeObject= this.isObject(options.target) ? options.target as ThemeObject: this.jsonToThemeObj(options.target as string);
        const source: ThemeObject = this.isObject(options.source) ? options.source as ThemeObject: this.jsonToThemeObj(options.source as string);

        this.options = {
            ...options,
            target,
            source
        };

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

    private writeJSONStringToFile(
        jsonString: string | any,
        path = "./",
        fileName: string
    ) {
        const filePath = `${path}/${fileName}.json`;
        fs.writeFile(filePath, jsonString, (err) => {
            // Error Type = NodeJS.ErrnoException
            if (err) throw err;
            console.log(`JSON string written to file: ${filePath}`);
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
    private outputNewTheme(themeObject: object): object | string {
        const {
            createFile,
            outputFormat,
            outputPath,
            outputFileName = ""
        } = this.options;
        const jsonTheme = JSON.stringify(themeObject, null, 4);
        const formattedTheme =
            outputFormat === "jsonString" ? jsonTheme : themeObject;
        if (createFile) {
            this.writeJSONStringToFile(jsonTheme, outputPath, outputFileName);
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
            description:
                "Used for hover states. Reflects the primary.dark variable from the theme object"
        },
        light: {
            value: "{blue.50}",
            type: "color",
            description: "Reflects the primary.light variable from the theme object"
        },
        contrast: {
            value: "rgba(0,0,0,0.87)",
            type: "color",
            description:
                "Reflects the primary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        states: {
            hover: {
                value: "rgba({primary.main}, {action.hoverOpacity})",
                type: "color",
                description:
                    "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            selected: {
                value: "rgba({primary.main}, {action.selectedOpacity})",
                type: "color",
                description:
                    "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            focus: {
                value: "rgba({primary.main}, {action.focusOpacity})",
                type: "color",
                description:
                    "Used for focus states. The token represents the value of action.focusOpacity (0.12 by default) of the main token."
            },
            focusVisible: {
                value: "rgba({primary.main}, 0.3)",
                type: "color",
                description:
                    "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            outlinedBorder: {
                value: "rgba({primary.main}, 0.5)",
                type: "color",
                description:
                    "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
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
            description:
                "Used for hover states. Reflects the secondary.dark variable from the theme object"
        },
        light: {
            value: "{purple.50}",
            type: "color",
            description: "Reflects the secondary.light variable from the theme object"
        },
        contrast: {
            value: "rgba(0,0,0,0.87)",
            type: "color",
            description:
                "Reflects the secondary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        states: {
            hover: {
                value: "rgba({secondary.main}, {action.hoverOpacity})",
                type: "color",
                description:
                    "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            selected: {
                value: "rgba({secondary.main}, {action.selectedOpacity})",
                type: "color",
                description:
                    "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            focus: {
                value: "rgba({secondary.main}, {action.focusOpacity})",
                type: "color",
                description:
                    "Used for focus visible states. The token represents 12% of the Secondary/Main token"
            },
            focusVisible: {
                value: "rgba({secondary.main}, 0.3)",
                type: "color",
                description:
                    "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            outlinedBorder: {
                value: "rgba({secondary.main}, 0.5)",
                type: "color",
                description:
                    "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
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
            description:
                "Used for hover states. Reflects the primary.dark variable from the theme object"
        },
        light: {
            value: "{blue.50}",
            type: "color",
            description: "Reflects the primary.light variable from the theme object"
        },
        contrast: {
            value: "rgba(0,0,0,0.87)",
            type: "color",
            description:
                "Reflects the primary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        states: {
            hover: {
                value: "rgba({primary.main}, {action.hoverOpacity})",
                type: "color",
                description:
                    "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            selected: {
                value: "rgba({primary.main}, {action.selectedOpacity})",
                type: "color",
                description:
                    "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            focus: {
                value: "rgba({primary.main}, {action.focusOpacity})",
                type: "color",
                description:
                    "Used for focus states. The token represents the value of action.focusOpacity (0.12 by default) of the main token."
            },
            focusVisible: {
                value: "rgba({primary.main}, 0.3)",
                type: "color",
                description:
                    "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            outlinedBorder: {
                value: "rgba({primary.main}, 0.5)",
                type: "color",
                description:
                    "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
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
            description:
                "Used for hover states. Reflects the secondary.dark variable from the theme object"
        },
        light: {
            value: "{purple.50}",
            type: "color",
            description: "Reflects the secondary.light variable from the theme object"
        },
        contrast: {
            value: "rgba(0,0,0,0.87)",
            type: "color",
            description:
                "Reflects the secondary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        states: {
            hover: {
                value: "rgba({secondary.main}, {action.hoverOpacity})",
                type: "color",
                description:
                    "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            selected: {
                value: "rgba({secondary.main}, {action.selectedOpacity})",
                type: "color",
                description:
                    "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            focus: {
                value: "rgba({secondary.main}, {action.focusOpacity})",
                type: "color",
                description:
                    "Used for focus visible states. The token represents 12% of the Secondary/Main token"
            },
            focusVisible: {
                value: "rgba({secondary.main}, 0.3)",
                type: "color",
                description:
                    "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            outlinedBorder: {
                value: "rgba({secondary.main}, 0.5)",
                type: "color",
                description:
                    "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
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
