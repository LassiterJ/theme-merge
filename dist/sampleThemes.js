export const NewTheme = {
    "divider": {
        "value": "rgba(255,255,255,0.12)",
        "type": "color",
        "description": "Reflects the divider variable from the theme object",
        "testField": "TEST PASSED",
        "testField2": {
            "nested": "TEST PASSED",
            "newNested": "TEST PASSED"
        },
        "newTestField": "TEST PASSED"
    },
    "text": {
        "primary": {
            "value": "rgba(255,255,255, 1)",
            "type": "color",
            "description": "Reflects the text.primary variable from the theme object"
        },
        "secondary": {
            "value": "rgba(255,255,255, 0.7)",
            "type": "color",
            "description": "Reflects the text.secondary variable from the theme object"
        },
        "disabled": {
            "value": "rgba({text.primary}, {action.disabledOpacity})",
            "type": "color",
            "description": "Reflects the text.disabled variable from the theme object"
        }
    },
    "primary": {
        "main": {
            "value": "{blue.200}",
            "type": "color",
            "description": "Reflects the primary.main variable from the theme object"
        },
        "dark": {
            "value": "{blue.400}",
            "type": "color",
            "description": "Used for hover states. Reflects the primary.dark variable from the theme object"
        },
        "light": {
            "value": "{blue.50}",
            "type": "color",
            "description": "Reflects the primary.light variable from the theme object"
        },
        "contrast": {
            "value": "rgba(0,0,0,0.87)",
            "type": "color",
            "description": "Reflects the primary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({primary.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({primary.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focus": {
                "value": "rgba({primary.main}, {action.focusOpacity})",
                "type": "color",
                "description": "Used for focus states. The token represents the value of action.focusOpacity (0.12 by default) of the main token."
            },
            "focusVisible": {
                "value": "rgba({primary.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({primary.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "secondary": {
        "main": {
            "value": "{purple.200}",
            "type": "color",
            "description": "Reflects the secondary.main variable from the theme object"
        },
        "dark": {
            "value": "{purple.400}",
            "type": "color",
            "description": "Used for hover states. Reflects the secondary.dark variable from the theme object"
        },
        "light": {
            "value": "{purple.50}",
            "type": "color",
            "description": "Reflects the secondary.light variable from the theme object"
        },
        "contrast": {
            "value": "rgba(0,0,0,0.87)",
            "type": "color",
            "description": "Reflects the secondary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({secondary.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({secondary.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focus": {
                "value": "rgba({secondary.main}, {action.focusOpacity})",
                "type": "color",
                "description": "Used for focus visible states. The token represents 12% of the Secondary/Main token"
            },
            "focusVisible": {
                "value": "rgba({secondary.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({secondary.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "action": {
        "hover": {
            "value": "rgba({action.activeChannel}, {action.hoverOpacity})",
            "type": "color",
            "description": "Reflects the action.hover variable from the theme object"
        },
        "selected": {
            "value": "rgba({action.selectedChannel}, {action.selectedOpacity})",
            "type": "color",
            "description": "Reflects the action.selected variable from the theme object"
        },
        "disabledBackground": {
            "value": "rgba({action.activeChannel}, 0.12)",
            "type": "color",
            "description": "Reflects the action.disabledBackground variable from the theme object"
        },
        "focus": {
            "value": "rgba({action.activeChannel}, {action.focusOpacity})",
            "type": "color",
            "description": "Reflects the action.focus variable from the theme object"
        },
        "disabled": {
            "value": "rgba({action.activeChannel}, {action.disabledOpacity})",
            "type": "color",
            "description": "Reflects the action.disabled variable from the theme object"
        },
        "active": {
            "value": "rgba({action.activeChannel}, 0.56)",
            "type": "color",
            "description": "Reflects the action.active variable from the theme object"
        },
        "hoverOpacity": {
            "value": "0.08",
            "type": "opacity"
        },
        "selectedOpacity": {
            "value": "0.16",
            "type": "opacity"
        },
        "disabledOpacity": {
            "value": "0.38",
            "type": "opacity"
        },
        "focusOpacity": {
            "value": "0.12",
            "type": "opacity"
        },
        "activeChannel": {
            "value": "rgb(255,255,255)",
            "type": "color"
        },
        "selectedChannel": {
            "value": "rgb(255,255,255)",
            "type": "color"
        }
    },
    "error": {
        "main": {
            "value": "{red.500}",
            "type": "color",
            "description": "Reflects the error.main variable from the theme object"
        },
        "dark": {
            "value": "{red.700}",
            "type": "color",
            "description": "Used for hover states. Reflects the error.dark variable from the theme object"
        },
        "light": {
            "value": "{red.300}",
            "type": "color",
            "description": "Reflects the error.light variable from the theme object"
        },
        "contrast": {
            "value": "#ffffff",
            "type": "color",
            "description": "Reflects the error.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({error.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({error.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focusVisible": {
                "value": "rgba({error.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({error.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "warning": {
        "main": {
            "value": "{orange.400}",
            "type": "color",
            "description": "Reflects the warning.main variable from the theme object"
        },
        "dark": {
            "value": "{orange.700}",
            "type": "color",
            "description": "Used for hover states. Reflects the warning.dark variable from the theme object"
        },
        "light": {
            "value": "{orange.300}",
            "type": "color",
            "description": "Reflects the warning.light variable from the theme object"
        },
        "contrast": {
            "value": "rgba(0,0,0,0.87)",
            "type": "color",
            "description": "Reflects the warning.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({warning.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({warning.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focusVisible": {
                "value": "rgba({warning.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({warning.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "info": {
        "main": {
            "value": "{lightBlue.400}",
            "type": "color",
            "description": "Reflects the info.main variable from the theme object"
        },
        "dark": {
            "value": "{lightBlue.700}",
            "type": "color",
            "description": "Used for hover states. Reflects the info.dark variable from the theme object"
        },
        "light": {
            "value": "{lightBlue.300}",
            "type": "color",
            "description": "Reflects the info.light variable from the theme object"
        },
        "contrast": {
            "value": "rgba(0,0,0,0.87)",
            "type": "color",
            "description": "Reflects the info.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({info.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({info.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focusVisible": {
                "value": "rgba({info.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({info.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "success": {
        "main": {
            "value": "{green.400}",
            "type": "color",
            "description": "Reflects the success.main variable from the theme object"
        },
        "dark": {
            "value": "{green.700}",
            "type": "color",
            "description": "Used for hover states. Reflects the success.dark variable from the theme object"
        },
        "light": {
            "value": "{green.300}",
            "type": "color",
            "description": "Reflects the success.light variable from the theme object"
        },
        "contrast": {
            "value": "rgba(0,0,0,0.87)",
            "type": "color",
            "description": "Reflects the success.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({success.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({success.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focusVisible": {
                "value": "rgba({success.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({success.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "_inherit": {
        "white": {
            "hover": {
                "value": "rgba({_inherit.white.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({_inherit.white.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focus": {
                "value": "rgba({_inherit.white.main}, {action.focusOpacity})",
                "type": "color",
                "description": "Used for focus states. The token represents the value of action.focusOpacity (0.12 by default) of the main token."
            },
            "main": {
                "value": "{text.primary}",
                "type": "color"
            },
            "focusVisible": {
                "value": "rgba({_inherit.white.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            }
        },
        "textPrimary": {
            "hover": {
                "value": "rgba({_inherit.textPrimary.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({_inherit.textPrimary.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focus": {
                "value": "rgba({_inherit.textPrimary.main}, {action.focusOpacity})",
                "type": "color",
                "description": "Used for focus states. The token represents the value of action.focusOpacity (0.12 by default) of the main token."
            },
            "main": {
                "value": "{text.primary}",
                "type": "color"
            },
            "focusVisible": {
                "value": "rgba({_inherit.textPrimary.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            }
        }
    },
    "elevation": {
        "1": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "1",
                    "blur": "3",
                    "spread": "0"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "1",
                    "blur": "1",
                    "spread": "0"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "2",
                    "blur": "1",
                    "spread": "-1"
                }
            ],
            "type": "boxShadow"
        },
        "2": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "1",
                    "blur": "5",
                    "spread": "0"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "2",
                    "blur": "2",
                    "spread": "0"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "3",
                    "blur": "1",
                    "spread": "-2"
                }
            ],
            "type": "boxShadow"
        },
        "3": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "1",
                    "blur": "8",
                    "spread": "0"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "3",
                    "blur": "4",
                    "spread": "0"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "3",
                    "blur": "3",
                    "spread": "-2"
                }
            ],
            "type": "boxShadow"
        },
        "4": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "1",
                    "blur": "10",
                    "spread": "0"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "4",
                    "blur": "5",
                    "spread": "0"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "2",
                    "blur": "4",
                    "spread": "-1"
                }
            ],
            "type": "boxShadow"
        },
        "5": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "1",
                    "blur": "14",
                    "spread": "0"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "5",
                    "blur": "8",
                    "spread": "0"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "3",
                    "blur": "5",
                    "spread": "-1"
                }
            ],
            "type": "boxShadow"
        },
        "6": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "1",
                    "blur": "18",
                    "spread": "0"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "6",
                    "blur": "10",
                    "spread": "0"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "3",
                    "blur": "5",
                    "spread": "-1"
                }
            ],
            "type": "boxShadow"
        },
        "7": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "2",
                    "blur": "16",
                    "spread": "1"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "7",
                    "blur": "10",
                    "spread": "1"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "4",
                    "blur": "5",
                    "spread": "-2"
                }
            ],
            "type": "boxShadow"
        },
        "8": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "3",
                    "blur": "14",
                    "spread": "2"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "8",
                    "blur": "10",
                    "spread": "1"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "5",
                    "blur": "5",
                    "spread": "-3"
                }
            ],
            "type": "boxShadow"
        },
        "9": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "3",
                    "blur": "16",
                    "spread": "2"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "9",
                    "blur": "12",
                    "spread": "1"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "5",
                    "blur": "6",
                    "spread": "-3"
                }
            ],
            "type": "boxShadow"
        },
        "10": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "4",
                    "blur": "18",
                    "spread": "3"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "10",
                    "blur": "14",
                    "spread": "1"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "6",
                    "blur": "6",
                    "spread": "-3"
                }
            ],
            "type": "boxShadow"
        },
        "11": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "4",
                    "blur": "20",
                    "spread": "3"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "11",
                    "blur": "15",
                    "spread": "1"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "6",
                    "blur": "7",
                    "spread": "-4"
                }
            ],
            "type": "boxShadow"
        },
        "12": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "5",
                    "blur": "22",
                    "spread": "4"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "12",
                    "blur": "17",
                    "spread": "2"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "7",
                    "blur": "8",
                    "spread": "-4"
                }
            ],
            "type": "boxShadow"
        },
        "13": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "5",
                    "blur": "24",
                    "spread": "4"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "13",
                    "blur": "19",
                    "spread": "2"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "7",
                    "blur": "8",
                    "spread": "-4"
                }
            ],
            "type": "boxShadow"
        },
        "14": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "5",
                    "blur": "26",
                    "spread": "4"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "14",
                    "blur": "21",
                    "spread": "2"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "7",
                    "blur": "9",
                    "spread": "-4"
                }
            ],
            "type": "boxShadow"
        },
        "15": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "6",
                    "blur": "28",
                    "spread": "5"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "15",
                    "blur": "22",
                    "spread": "2"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "8",
                    "blur": "9",
                    "spread": "-5"
                }
            ],
            "type": "boxShadow"
        },
        "16": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "6",
                    "blur": "30",
                    "spread": "5"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "16",
                    "blur": "24",
                    "spread": "2"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "8",
                    "blur": "10",
                    "spread": "-5"
                }
            ],
            "type": "boxShadow"
        },
        "17": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "6",
                    "blur": "32",
                    "spread": "5"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "17",
                    "blur": "26",
                    "spread": "2"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "8",
                    "blur": "11",
                    "spread": "-5"
                }
            ],
            "type": "boxShadow"
        },
        "18": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "7",
                    "blur": "34",
                    "spread": "6"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "18",
                    "blur": "28",
                    "spread": "2"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "9",
                    "blur": "11",
                    "spread": "-5"
                }
            ],
            "type": "boxShadow"
        },
        "19": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "7",
                    "blur": "36",
                    "spread": "6"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "19",
                    "blur": "29",
                    "spread": "2"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "9",
                    "blur": "12",
                    "spread": "-6"
                }
            ],
            "type": "boxShadow"
        },
        "20": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "8",
                    "blur": "38",
                    "spread": "7"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "20",
                    "blur": "31",
                    "spread": "3"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "10",
                    "blur": "13",
                    "spread": "-6"
                }
            ],
            "type": "boxShadow"
        },
        "21": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "8",
                    "blur": "40",
                    "spread": "7"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "21",
                    "blur": "33",
                    "spread": "3"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "10",
                    "blur": "13",
                    "spread": "-6"
                }
            ],
            "type": "boxShadow"
        },
        "22": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "8",
                    "blur": "42",
                    "spread": "7"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "22",
                    "blur": "35",
                    "spread": "3"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "10",
                    "blur": "14",
                    "spread": "-6"
                }
            ],
            "type": "boxShadow"
        },
        "23": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "9",
                    "blur": "44",
                    "spread": "8"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "23",
                    "blur": "36",
                    "spread": "3"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "11",
                    "blur": "14",
                    "spread": "-7"
                }
            ],
            "type": "boxShadow"
        },
        "24": {
            "value": [
                {
                    "color": "#0000001f",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "9",
                    "blur": "46",
                    "spread": "8"
                },
                {
                    "color": "#00000024",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "24",
                    "blur": "38",
                    "spread": "3"
                },
                {
                    "color": "#00000033",
                    "type": "dropShadow",
                    "x": "0",
                    "y": "11",
                    "blur": "15",
                    "spread": "-7"
                }
            ],
            "type": "boxShadow"
        },
        "outlined": {
            "value": {
                "x": "0",
                "y": "0",
                "blur": "0",
                "spread": "1",
                "color": "$divider",
                "type": "dropShadow"
            },
            "type": "boxShadow"
        }
    },
    "fontFamilies": {
        "roboto": {
            "value": "Roboto",
            "type": "fontFamilies"
        }
    },
    "lineHeights": {
        "0": {
            "value": "116.7%",
            "type": "lineHeights"
        },
        "1": {
            "value": "120%",
            "type": "lineHeights"
        },
        "2": {
            "value": "123.5%",
            "type": "lineHeights"
        },
        "3": {
            "value": "133.4%",
            "type": "lineHeights"
        },
        "4": {
            "value": "160%",
            "type": "lineHeights"
        },
        "5": {
            "value": "150%",
            "type": "lineHeights"
        },
        "6": {
            "value": "143%",
            "type": "lineHeights"
        },
        "7": {
            "value": "175%",
            "type": "lineHeights"
        },
        "8": {
            "value": "157%",
            "type": "lineHeights"
        },
        "9": {
            "value": "266%",
            "type": "lineHeights"
        },
        "10": {
            "value": "166%",
            "type": "lineHeights"
        },
        "11": {
            "value": "20",
            "type": "lineHeights"
        },
        "12": {
            "value": "26",
            "type": "lineHeights"
        },
        "13": {
            "value": "24",
            "type": "lineHeights"
        },
        "14": {
            "value": "22",
            "type": "lineHeights"
        },
        "15": {
            "value": "12",
            "type": "lineHeights"
        },
        "16": {
            "value": "18",
            "type": "lineHeights"
        },
        "17": {
            "value": "14",
            "type": "lineHeights"
        },
        "18": {
            "value": "48",
            "type": "lineHeights"
        }
    },
    "fontWeights": {
        "light": {
            "value": "Light",
            "type": "fontWeights"
        },
        "regular": {
            "value": "Regular",
            "type": "fontWeights"
        },
        "medium": {
            "value": "Medium",
            "type": "fontWeights"
        }
    },
    "fontSize": {
        "0": {
            "value": "10",
            "type": "fontSizes"
        },
        "1": {
            "value": "12",
            "type": "fontSizes"
        },
        "2": {
            "value": "13",
            "type": "fontSizes"
        },
        "3": {
            "value": "14",
            "type": "fontSizes"
        },
        "4": {
            "value": "15",
            "type": "fontSizes"
        },
        "5": {
            "value": "16",
            "type": "fontSizes"
        },
        "6": {
            "value": "20",
            "type": "fontSizes"
        },
        "7": {
            "value": "24",
            "type": "fontSizes"
        },
        "8": {
            "value": "34",
            "type": "fontSizes"
        },
        "9": {
            "value": "48",
            "type": "fontSizes"
        },
        "10": {
            "value": "60",
            "type": "fontSizes"
        },
        "11": {
            "value": "96",
            "type": "fontSizes"
        }
    },
    "letterSpacing": {
        "0": {
            "value": "-1.5",
            "type": "letterSpacing"
        },
        "1": {
            "value": "-0.5",
            "type": "letterSpacing"
        },
        "2": {
            "value": "0",
            "type": "letterSpacing"
        },
        "3": {
            "value": "0.25",
            "type": "letterSpacing"
        },
        "4": {
            "value": "0.15",
            "type": "letterSpacing"
        },
        "5": {
            "value": "0.17",
            "type": "letterSpacing"
        },
        "6": {
            "value": "0.1",
            "type": "letterSpacing"
        },
        "7": {
            "value": "1",
            "type": "letterSpacing"
        },
        "8": {
            "value": "0.4",
            "type": "letterSpacing"
        },
        "9": {
            "value": "0.14",
            "type": "letterSpacing"
        },
        "10": {
            "value": "0.46",
            "type": "letterSpacing"
        },
        "11": {
            "value": "0.16",
            "type": "letterSpacing"
        }
    },
    "paragraphSpacing": {
        "none": {
            "value": "0",
            "type": "paragraphSpacing"
        }
    },
    "Typography": {
        "h1": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.light}",
                "lineHeight": "{lineHeights.0}",
                "fontSize": "{fontSize.11}",
                "letterSpacing": "{letterSpacing.0}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.none}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        },
        "h2": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.light}",
                "lineHeight": "{lineHeights.1}",
                "fontSize": "{fontSize.10}",
                "letterSpacing": "{letterSpacing.1}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.none}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        },
        "h3": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.regular}",
                "lineHeight": "{lineHeights.0}",
                "fontSize": "{fontSize.9}",
                "letterSpacing": "{letterSpacing.2}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.none}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        },
        "h4": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.regular}",
                "lineHeight": "{lineHeights.2}",
                "fontSize": "{fontSize.8}",
                "letterSpacing": "{letterSpacing.3}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.none}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        },
        "h5": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.regular}",
                "lineHeight": "{lineHeights.3}",
                "fontSize": "{fontSize.7}",
                "letterSpacing": "{letterSpacing.2}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.none}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        },
        "h6": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.medium}",
                "lineHeight": "{lineHeights.4}",
                "fontSize": "{fontSize.6}",
                "letterSpacing": "{letterSpacing.4}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.none}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        },
        "body1": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.regular}",
                "lineHeight": "{lineHeights.5}",
                "fontSize": "{fontSize.5}",
                "letterSpacing": "{letterSpacing.4}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.none}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        },
        "body2": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.regular}",
                "lineHeight": "{lineHeights.6}",
                "fontSize": "{fontSize.3}",
                "letterSpacing": "{letterSpacing.5}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.none}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        },
        "subtitle1": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.regular}",
                "lineHeight": "{lineHeights.7}",
                "fontSize": "{fontSize.5}",
                "letterSpacing": "{letterSpacing.4}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.none}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        },
        "subtitle2": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.medium}",
                "lineHeight": "{lineHeights.8}",
                "fontSize": "{fontSize.3}",
                "letterSpacing": "{letterSpacing.6}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.none}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        },
        "overline": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.regular}",
                "lineHeight": "{lineHeights.9}",
                "fontSize": "{fontSize.1}",
                "letterSpacing": "{letterSpacing.7}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.uppercase}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        },
        "caption": {
            "value": {
                "fontFamily": "{fontFamilies.roboto}",
                "fontWeight": "{fontWeights.regular}",
                "lineHeight": "{lineHeights.10}",
                "fontSize": "{fontSize.1}",
                "letterSpacing": "{letterSpacing.8}",
                "paragraphSpacing": "{paragraphSpacing.none}",
                "paragraphIndent": "{paragraphIndent.none}",
                "textCase": "{textCase.none}",
                "textDecoration": "{textDecoration.none}"
            },
            "type": "typography"
        }
    },
    "textCase": {
        "none": {
            "value": "none",
            "type": "textCase"
        },
        "uppercase": {
            "value": "uppercase",
            "type": "textCase"
        }
    },
    "textDecoration": {
        "none": {
            "value": "none",
            "type": "textDecoration"
        }
    },
    "shape": {
        "borderRadius": {
            "value": "4",
            "type": "borderRadius"
        }
    },
    "paragraphIndent": {
        "none": {
            "value": "0",
            "type": "paragraphSpacing"
        }
    },
    "spacing": {
        "1": {
            "value": "{spacing.base} * 1",
            "type": "spacing"
        },
        "2": {
            "value": "{spacing.base} * 2",
            "type": "spacing"
        },
        "3": {
            "value": "{spacing.base} * 3",
            "type": "spacing"
        },
        "4": {
            "value": "{spacing.base} * 4",
            "type": "spacing"
        },
        "5": {
            "value": "{spacing.base} * 5",
            "type": "spacing"
        },
        "6": {
            "value": "{spacing.base} * 6",
            "type": "spacing"
        },
        "7": {
            "value": "{spacing.base} * 7",
            "type": "spacing"
        },
        "8": {
            "value": "{spacing.base} * 8",
            "type": "spacing"
        },
        "9": {
            "value": "{spacing.base} * 9",
            "type": "spacing"
        },
        "10": {
            "value": "{spacing.base} * 10",
            "type": "spacing"
        },
        "11": {
            "value": "{spacing.base} * 11",
            "type": "spacing"
        },
        "12": {
            "value": "{spacing.base} * 12",
            "type": "spacing"
        },
        "base": {
            "value": "8",
            "type": "spacing"
        }
    },
    "sizing": {
        "1": {
            "value": "{spacing.base} * 1",
            "type": "sizing"
        },
        "2": {
            "value": "{spacing.base} * 2",
            "type": "sizing"
        },
        "3": {
            "value": "{spacing.base} * 3",
            "type": "sizing"
        },
        "4": {
            "value": "{spacing.base} * 4",
            "type": "sizing"
        },
        "5": {
            "value": "{spacing.base} * 5",
            "type": "sizing"
        },
        "6": {
            "value": "{spacing.base} * 6",
            "type": "sizing"
        },
        "7": {
            "value": "{spacing.base} * 7",
            "type": "sizing"
        },
        "8": {
            "value": "{spacing.base} * 8",
            "type": "sizing"
        },
        "9": {
            "value": "{spacing.base} * 9",
            "type": "sizing"
        },
        "10": {
            "value": "{spacing.base} * 10",
            "type": "sizing"
        },
        "11": {
            "value": "{spacing.base} * 11",
            "type": "sizing"
        },
        "12": {
            "value": "{spacing.base} * 12",
            "type": "sizing"
        },
        "base": {
            "value": "{spacing.base}",
            "type": "sizing"
        }
    },
    "background": {
        "default": {
            "value": "#121212",
            "type": "color",
            "description": "Reflects the background.default variable from the theme object"
        },
        "paper-elevation-0": {
            "value": "#121212",
            "type": "color",
            "description": "Reflects the background.paper variable from the theme object"
        },
        "paper-elevation-1": {
            "value": "#1E1E1E",
            "type": "color"
        },
        "paper-elevation-2": {
            "value": "#232323",
            "type": "color"
        },
        "paper-elevation-3": {
            "value": "#252525",
            "type": "color"
        },
        "paper-elevation-4": {
            "value": "#272727",
            "type": "color"
        },
        "paper-elevation-5": {
            "value": "#2A2A2A",
            "type": "color"
        },
        "paper-elevation-6": {
            "value": "#2C2C2C",
            "type": "color"
        },
        "paper-elevation-7": {
            "value": "#2C2C2C",
            "type": "color"
        },
        "paper-elevation-8": {
            "value": "#2E2E2E",
            "type": "color"
        },
        "paper-elevation-9": {
            "value": "#2E2E2E",
            "type": "color"
        },
        "paper-elevation-10": {
            "value": "#313131",
            "type": "color"
        },
        "paper-elevation-11": {
            "value": "#313131",
            "type": "color"
        },
        "paper-elevation-12": {
            "value": "#333333",
            "type": "color"
        },
        "paper-elevation-13": {
            "value": "#333333",
            "type": "color"
        },
        "paper-elevation-14": {
            "value": "#333333",
            "type": "color"
        },
        "paper-elevation-15": {
            "value": "#333333",
            "type": "color"
        },
        "paper-elevation-16": {
            "value": "#363636",
            "type": "color"
        },
        "paper-elevation-17": {
            "value": "#363636",
            "type": "color"
        },
        "paper-elevation-18": {
            "value": "#363636",
            "type": "color"
        },
        "paper-elevation-19": {
            "value": "#363636",
            "type": "color"
        },
        "paper-elevation-20": {
            "value": "#383838",
            "type": "color"
        },
        "paper-elevation-21": {
            "value": "#383838",
            "type": "color"
        },
        "paper-elevation-22": {
            "value": "#383838",
            "type": "color"
        },
        "paper-elevation-23": {
            "value": "#383838",
            "type": "color"
        },
        "paper-elevation-24": {
            "value": "#383838",
            "type": "color"
        }
    }
};
export const OldTheme = {
    "divider": {
        "value": "rgba(255,255,255,0.12)",
        "type": "color",
        "description": "Reflects the divider variable from the theme object",
        "testField": "TEST FAILED",
        "testField2": {
            "nested": "TEST FAILED"
        }
    },
    "text": {
        "primary": {
            "value": "rgba(255,255,255, 1)",
            "type": "color",
            "description": "Reflects the text.primary variable from the theme object"
        },
        "secondary": {
            "value": "rgba(255,255,255, 0.7)",
            "type": "color",
            "description": "Reflects the text.secondary variable from the theme object"
        },
        "disabled": {
            "value": "rgba({text.primary}, {action.disabledOpacity})",
            "type": "color",
            "description": "Reflects the text.disabled variable from the theme object"
        }
    },
    "primary": {
        "main": {
            "value": "{blue.200}",
            "type": "color",
            "description": "Reflects the primary.main variable from the theme object"
        },
        "dark": {
            "value": "{blue.400}",
            "type": "color",
            "description": "Used for hover states. Reflects the primary.dark variable from the theme object"
        },
        "light": {
            "value": "{blue.50}",
            "type": "color",
            "description": "Reflects the primary.light variable from the theme object"
        },
        "contrast": {
            "value": "rgba(0,0,0,0.87)",
            "type": "color",
            "description": "Reflects the primary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({primary.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({primary.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focus": {
                "value": "rgba({primary.main}, {action.focusOpacity})",
                "type": "color",
                "description": "Used for focus states. The token represents the value of action.focusOpacity (0.12 by default) of the main token."
            },
            "focusVisible": {
                "value": "rgba({primary.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({primary.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "secondary": {
        "main": {
            "value": "{purple.200}",
            "type": "color",
            "description": "Reflects the secondary.main variable from the theme object"
        },
        "dark": {
            "value": "{purple.400}",
            "type": "color",
            "description": "Used for hover states. Reflects the secondary.dark variable from the theme object"
        },
        "light": {
            "value": "{purple.50}",
            "type": "color",
            "description": "Reflects the secondary.light variable from the theme object"
        },
        "contrast": {
            "value": "rgba(0,0,0,0.87)",
            "type": "color",
            "description": "Reflects the secondary.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({secondary.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({secondary.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focus": {
                "value": "rgba({secondary.main}, {action.focusOpacity})",
                "type": "color",
                "description": "Used for focus visible states. The token represents 12% of the Secondary/Main token"
            },
            "focusVisible": {
                "value": "rgba({secondary.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({secondary.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "action": {
        "hover": {
            "value": "rgba({action.activeChannel}, {action.hoverOpacity})",
            "type": "color",
            "description": "Reflects the action.hover variable from the theme object"
        },
        "selected": {
            "value": "rgba({action.selectedChannel}, {action.selectedOpacity})",
            "type": "color",
            "description": "Reflects the action.selected variable from the theme object"
        },
        "disabledBackground": {
            "value": "rgba({action.activeChannel}, 0.12)",
            "type": "color",
            "description": "Reflects the action.disabledBackground variable from the theme object"
        },
        "focus": {
            "value": "rgba({action.activeChannel}, {action.focusOpacity})",
            "type": "color",
            "description": "Reflects the action.focus variable from the theme object"
        },
        "disabled": {
            "value": "rgba({action.activeChannel}, {action.disabledOpacity})",
            "type": "color",
            "description": "Reflects the action.disabled variable from the theme object"
        },
        "active": {
            "value": "rgba({action.activeChannel}, 0.56)",
            "type": "color",
            "description": "Reflects the action.active variable from the theme object"
        },
        "hoverOpacity": {
            "value": "0.08",
            "type": "opacity"
        },
        "selectedOpacity": {
            "value": "0.16",
            "type": "opacity"
        },
        "disabledOpacity": {
            "value": "0.38",
            "type": "opacity"
        },
        "focusOpacity": {
            "value": "0.12",
            "type": "opacity"
        },
        "activeChannel": {
            "value": "rgb(255,255,255)",
            "type": "color"
        },
        "selectedChannel": {
            "value": "rgb(255,255,255)",
            "type": "color"
        }
    },
    "error": {
        "main": {
            "value": "{red.500}",
            "type": "color",
            "description": "Reflects the error.main variable from the theme object"
        },
        "dark": {
            "value": "{red.700}",
            "type": "color",
            "description": "Used for hover states. Reflects the error.dark variable from the theme object"
        },
        "light": {
            "value": "{red.300}",
            "type": "color",
            "description": "Reflects the error.light variable from the theme object"
        },
        "contrast": {
            "value": "#ffffff",
            "type": "color",
            "description": "Reflects the error.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({error.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({error.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focusVisible": {
                "value": "rgba({error.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({error.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "warning": {
        "main": {
            "value": "{orange.400}",
            "type": "color",
            "description": "Reflects the warning.main variable from the theme object"
        },
        "dark": {
            "value": "{orange.700}",
            "type": "color",
            "description": "Used for hover states. Reflects the warning.dark variable from the theme object"
        },
        "light": {
            "value": "{orange.300}",
            "type": "color",
            "description": "Reflects the warning.light variable from the theme object"
        },
        "contrast": {
            "value": "rgba(0,0,0,0.87)",
            "type": "color",
            "description": "Reflects the warning.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({warning.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({warning.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focusVisible": {
                "value": "rgba({warning.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({warning.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "info": {
        "main": {
            "value": "{lightBlue.400}",
            "type": "color",
            "description": "Reflects the info.main variable from the theme object"
        },
        "dark": {
            "value": "{lightBlue.700}",
            "type": "color",
            "description": "Used for hover states. Reflects the info.dark variable from the theme object"
        },
        "light": {
            "value": "{lightBlue.300}",
            "type": "color",
            "description": "Reflects the info.light variable from the theme object"
        },
        "contrast": {
            "value": "rgba(0,0,0,0.87)",
            "type": "color",
            "description": "Reflects the info.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({info.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({info.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focusVisible": {
                "value": "rgba({info.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({info.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "success": {
        "main": {
            "value": "{green.400}",
            "type": "color",
            "description": "Reflects the success.main variable from the theme object"
        },
        "dark": {
            "value": "{green.700}",
            "type": "color",
            "description": "Used for hover states. Reflects the success.dark variable from the theme object"
        },
        "light": {
            "value": "{green.300}",
            "type": "color",
            "description": "Reflects the success.light variable from the theme object"
        },
        "contrast": {
            "value": "rgba(0,0,0,0.87)",
            "type": "color",
            "description": "Reflects the success.contrast variable from the theme object. Color that keeps a contrast ratio above AA when XX.main is used as a bg. color"
        },
        "states": {
            "hover": {
                "value": "rgba({success.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({success.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focusVisible": {
                "value": "rgba({success.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            },
            "outlinedBorder": {
                "value": "rgba({success.main}, 0.5)",
                "type": "color",
                "description": "Used for enabled states (e.g Button outlined variant). The token represents the value of outlinedBorderOpacity (0.5 by default) of the main token."
            }
        }
    },
    "_inherit": {
        "white": {
            "hover": {
                "value": "rgba({_inherit.white.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({_inherit.white.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focus": {
                "value": "rgba({_inherit.white.main}, {action.focusOpacity})",
                "type": "color",
                "description": "Used for focus states. The token represents the value of action.focusOpacity (0.12 by default) of the main token."
            },
            "main": {
                "value": "{text.primary}",
                "type": "color"
            },
            "focusVisible": {
                "value": "rgba({_inherit.white.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            }
        },
        "textPrimary": {
            "hover": {
                "value": "rgba({_inherit.textPrimary.main}, {action.hoverOpacity})",
                "type": "color",
                "description": "Used for hover states. The token represents the value of action.hoverOpacity (0.04 by default) of the main token."
            },
            "selected": {
                "value": "rgba({_inherit.textPrimary.main}, {action.selectedOpacity})",
                "type": "color",
                "description": "Used for selected states. The token represents the value of action.selectedOpacity (0.08 by default) of the main token."
            },
            "focus": {
                "value": "rgba({_inherit.textPrimary.main}, {action.focusOpacity})",
                "type": "color",
                "description": "Used for focus states. The token represents the value of action.focusOpacity (0.12 by default) of the main token."
            },
            "main": {
                "value": "{text.primary}",
                "type": "color"
            },
            "focusVisible": {
                "value": "rgba({_inherit.textPrimary.main}, 0.3)",
                "type": "color",
                "description": "Used for focus visible states. The token represents the value of focusVisibleOpacity (0.3 by default) of the main token."
            }
        }
    },
    "elevation": {
        "1": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "1",
                    "type": "y"
                },
                "blur": {
                    "value": "3",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "1",
                    "type": "y"
                },
                "blur": {
                    "value": "1",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "2",
                    "type": "y"
                },
                "blur": {
                    "value": "1",
                    "type": "blur"
                },
                "spread": {
                    "value": "-1",
                    "type": "spread"
                }
            }
        },
        "2": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "1",
                    "type": "y"
                },
                "blur": {
                    "value": "5",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "2",
                    "type": "y"
                },
                "blur": {
                    "value": "2",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "3",
                    "type": "y"
                },
                "blur": {
                    "value": "1",
                    "type": "blur"
                },
                "spread": {
                    "value": "-2",
                    "type": "spread"
                }
            }
        },
        "3": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "1",
                    "type": "y"
                },
                "blur": {
                    "value": "8",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "3",
                    "type": "y"
                },
                "blur": {
                    "value": "4",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "3",
                    "type": "y"
                },
                "blur": {
                    "value": "3",
                    "type": "blur"
                },
                "spread": {
                    "value": "-2",
                    "type": "spread"
                }
            }
        },
        "4": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "1",
                    "type": "y"
                },
                "blur": {
                    "value": "10",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "4",
                    "type": "y"
                },
                "blur": {
                    "value": "5",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "2",
                    "type": "y"
                },
                "blur": {
                    "value": "4",
                    "type": "blur"
                },
                "spread": {
                    "value": "-1",
                    "type": "spread"
                }
            }
        },
        "5": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "1",
                    "type": "y"
                },
                "blur": {
                    "value": "14",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "5",
                    "type": "y"
                },
                "blur": {
                    "value": "8",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "3",
                    "type": "y"
                },
                "blur": {
                    "value": "5",
                    "type": "blur"
                },
                "spread": {
                    "value": "-1",
                    "type": "spread"
                }
            }
        },
        "6": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "1",
                    "type": "y"
                },
                "blur": {
                    "value": "18",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "6",
                    "type": "y"
                },
                "blur": {
                    "value": "10",
                    "type": "blur"
                },
                "spread": {
                    "value": "0",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "3",
                    "type": "y"
                },
                "blur": {
                    "value": "5",
                    "type": "blur"
                },
                "spread": {
                    "value": "-1",
                    "type": "spread"
                }
            }
        },
        "7": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "2",
                    "type": "y"
                },
                "blur": {
                    "value": "16",
                    "type": "blur"
                },
                "spread": {
                    "value": "1",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "7",
                    "type": "y"
                },
                "blur": {
                    "value": "10",
                    "type": "blur"
                },
                "spread": {
                    "value": "1",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "4",
                    "type": "y"
                },
                "blur": {
                    "value": "5",
                    "type": "blur"
                },
                "spread": {
                    "value": "-2",
                    "type": "spread"
                }
            }
        },
        "8": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "3",
                    "type": "y"
                },
                "blur": {
                    "value": "14",
                    "type": "blur"
                },
                "spread": {
                    "value": "2",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "8",
                    "type": "y"
                },
                "blur": {
                    "value": "10",
                    "type": "blur"
                },
                "spread": {
                    "value": "1",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "5",
                    "type": "y"
                },
                "blur": {
                    "value": "5",
                    "type": "blur"
                },
                "spread": {
                    "value": "-3",
                    "type": "spread"
                }
            }
        },
        "9": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "3",
                    "type": "y"
                },
                "blur": {
                    "value": "16",
                    "type": "blur"
                },
                "spread": {
                    "value": "2",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "9",
                    "type": "y"
                },
                "blur": {
                    "value": "12",
                    "type": "blur"
                },
                "spread": {
                    "value": "1",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "5",
                    "type": "y"
                },
                "blur": {
                    "value": "6",
                    "type": "blur"
                },
                "spread": {
                    "value": "-3",
                    "type": "spread"
                }
            }
        },
        "10": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "4",
                    "type": "y"
                },
                "blur": {
                    "value": "18",
                    "type": "blur"
                },
                "spread": {
                    "value": "3",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "10",
                    "type": "y"
                },
                "blur": {
                    "value": "14",
                    "type": "blur"
                },
                "spread": {
                    "value": "1",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "6",
                    "type": "y"
                },
                "blur": {
                    "value": "6",
                    "type": "blur"
                },
                "spread": {
                    "value": "-3",
                    "type": "spread"
                }
            }
        },
        "11": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "4",
                    "type": "y"
                },
                "blur": {
                    "value": "20",
                    "type": "blur"
                },
                "spread": {
                    "value": "3",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "11",
                    "type": "y"
                },
                "blur": {
                    "value": "15",
                    "type": "blur"
                },
                "spread": {
                    "value": "1",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "6",
                    "type": "y"
                },
                "blur": {
                    "value": "7",
                    "type": "blur"
                },
                "spread": {
                    "value": "-4",
                    "type": "spread"
                }
            }
        },
        "12": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "5",
                    "type": "y"
                },
                "blur": {
                    "value": "22",
                    "type": "blur"
                },
                "spread": {
                    "value": "4",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "12",
                    "type": "y"
                },
                "blur": {
                    "value": "17",
                    "type": "blur"
                },
                "spread": {
                    "value": "2",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "7",
                    "type": "y"
                },
                "blur": {
                    "value": "8",
                    "type": "blur"
                },
                "spread": {
                    "value": "-4",
                    "type": "spread"
                }
            }
        },
        "13": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "5",
                    "type": "y"
                },
                "blur": {
                    "value": "24",
                    "type": "blur"
                },
                "spread": {
                    "value": "4",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "13",
                    "type": "y"
                },
                "blur": {
                    "value": "19",
                    "type": "blur"
                },
                "spread": {
                    "value": "2",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "7",
                    "type": "y"
                },
                "blur": {
                    "value": "8",
                    "type": "blur"
                },
                "spread": {
                    "value": "-4",
                    "type": "spread"
                }
            }
        },
        "14": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "5",
                    "type": "y"
                },
                "blur": {
                    "value": "26",
                    "type": "blur"
                },
                "spread": {
                    "value": "4",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "14",
                    "type": "y"
                },
                "blur": {
                    "value": "21",
                    "type": "blur"
                },
                "spread": {
                    "value": "2",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "7",
                    "type": "y"
                },
                "blur": {
                    "value": "9",
                    "type": "blur"
                },
                "spread": {
                    "value": "-4",
                    "type": "spread"
                }
            }
        },
        "15": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "6",
                    "type": "y"
                },
                "blur": {
                    "value": "28",
                    "type": "blur"
                },
                "spread": {
                    "value": "5",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "15",
                    "type": "y"
                },
                "blur": {
                    "value": "22",
                    "type": "blur"
                },
                "spread": {
                    "value": "2",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "8",
                    "type": "y"
                },
                "blur": {
                    "value": "9",
                    "type": "blur"
                },
                "spread": {
                    "value": "-5",
                    "type": "spread"
                }
            }
        },
        "16": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "6",
                    "type": "y"
                },
                "blur": {
                    "value": "30",
                    "type": "blur"
                },
                "spread": {
                    "value": "5",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "16",
                    "type": "y"
                },
                "blur": {
                    "value": "24",
                    "type": "blur"
                },
                "spread": {
                    "value": "2",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "8",
                    "type": "y"
                },
                "blur": {
                    "value": "10",
                    "type": "blur"
                },
                "spread": {
                    "value": "-5",
                    "type": "spread"
                }
            }
        },
        "17": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "6",
                    "type": "y"
                },
                "blur": {
                    "value": "32",
                    "type": "blur"
                },
                "spread": {
                    "value": "5",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "17",
                    "type": "y"
                },
                "blur": {
                    "value": "26",
                    "type": "blur"
                },
                "spread": {
                    "value": "2",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "8",
                    "type": "y"
                },
                "blur": {
                    "value": "11",
                    "type": "blur"
                },
                "spread": {
                    "value": "-5",
                    "type": "spread"
                }
            }
        },
        "18": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "7",
                    "type": "y"
                },
                "blur": {
                    "value": "34",
                    "type": "blur"
                },
                "spread": {
                    "value": "6",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "18",
                    "type": "y"
                },
                "blur": {
                    "value": "28",
                    "type": "blur"
                },
                "spread": {
                    "value": "2",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "9",
                    "type": "y"
                },
                "blur": {
                    "value": "11",
                    "type": "blur"
                },
                "spread": {
                    "value": "-5",
                    "type": "spread"
                }
            }
        },
        "19": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "7",
                    "type": "y"
                },
                "blur": {
                    "value": "36",
                    "type": "blur"
                },
                "spread": {
                    "value": "6",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "19",
                    "type": "y"
                },
                "blur": {
                    "value": "29",
                    "type": "blur"
                },
                "spread": {
                    "value": "2",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "9",
                    "type": "y"
                },
                "blur": {
                    "value": "12",
                    "type": "blur"
                },
                "spread": {
                    "value": "-6",
                    "type": "spread"
                }
            }
        },
        "20": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "8",
                    "type": "y"
                },
                "blur": {
                    "value": "38",
                    "type": "blur"
                },
                "spread": {
                    "value": "7",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "20",
                    "type": "y"
                },
                "blur": {
                    "value": "31",
                    "type": "blur"
                },
                "spread": {
                    "value": "3",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "10",
                    "type": "y"
                },
                "blur": {
                    "value": "13",
                    "type": "blur"
                },
                "spread": {
                    "value": "-6",
                    "type": "spread"
                }
            }
        },
        "21": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "8",
                    "type": "y"
                },
                "blur": {
                    "value": "40",
                    "type": "blur"
                },
                "spread": {
                    "value": "7",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "21",
                    "type": "y"
                },
                "blur": {
                    "value": "33",
                    "type": "blur"
                },
                "spread": {
                    "value": "3",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "10",
                    "type": "y"
                },
                "blur": {
                    "value": "13",
                    "type": "blur"
                },
                "spread": {
                    "value": "-6",
                    "type": "spread"
                }
            }
        },
        "22": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "8",
                    "type": "y"
                },
                "blur": {
                    "value": "42",
                    "type": "blur"
                },
                "spread": {
                    "value": "7",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "22",
                    "type": "y"
                },
                "blur": {
                    "value": "35",
                    "type": "blur"
                },
                "spread": {
                    "value": "3",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "10",
                    "type": "y"
                },
                "blur": {
                    "value": "14",
                    "type": "blur"
                },
                "spread": {
                    "value": "-6",
                    "type": "spread"
                }
            }
        },
        "23": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "9",
                    "type": "y"
                },
                "blur": {
                    "value": "44",
                    "type": "blur"
                },
                "spread": {
                    "value": "8",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "23",
                    "type": "y"
                },
                "blur": {
                    "value": "36",
                    "type": "blur"
                },
                "spread": {
                    "value": "3",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "11",
                    "type": "y"
                },
                "blur": {
                    "value": "14",
                    "type": "blur"
                },
                "spread": {
                    "value": "-7",
                    "type": "spread"
                }
            }
        },
        "24": {
            "0": {
                "color": {
                    "value": "#0000001f",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "9",
                    "type": "y"
                },
                "blur": {
                    "value": "46",
                    "type": "blur"
                },
                "spread": {
                    "value": "8",
                    "type": "spread"
                }
            },
            "1": {
                "color": {
                    "value": "#00000024",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "24",
                    "type": "y"
                },
                "blur": {
                    "value": "38",
                    "type": "blur"
                },
                "spread": {
                    "value": "3",
                    "type": "spread"
                }
            },
            "2": {
                "color": {
                    "value": "#00000033",
                    "type": "color"
                },
                "type": {
                    "value": "dropShadow",
                    "type": "type"
                },
                "x": {
                    "value": "0",
                    "type": "x"
                },
                "y": {
                    "value": "11",
                    "type": "y"
                },
                "blur": {
                    "value": "15",
                    "type": "blur"
                },
                "spread": {
                    "value": "-7",
                    "type": "spread"
                }
            }
        },
        "outlined": {
            "x": {
                "value": "0",
                "type": "x"
            },
            "y": {
                "value": "0",
                "type": "y"
            },
            "blur": {
                "value": "0",
                "type": "blur"
            },
            "spread": {
                "value": "1",
                "type": "spread"
            },
            "color": {
                "value": "$divider",
                "type": "color"
            },
            "type": {
                "value": "dropShadow",
                "type": "type"
            }
        }
    },
    "fontFamilies": {
        "roboto": {
            "value": "Roboto",
            "type": "fontFamilies"
        }
    },
    "lineHeights": {
        "0": {
            "value": "116.7%",
            "type": "lineHeights"
        },
        "1": {
            "value": "120%",
            "type": "lineHeights"
        },
        "2": {
            "value": "123.5%",
            "type": "lineHeights"
        },
        "3": {
            "value": "133.4%",
            "type": "lineHeights"
        },
        "4": {
            "value": "160%",
            "type": "lineHeights"
        },
        "5": {
            "value": "150%",
            "type": "lineHeights"
        },
        "6": {
            "value": "143%",
            "type": "lineHeights"
        },
        "7": {
            "value": "175%",
            "type": "lineHeights"
        },
        "8": {
            "value": "157%",
            "type": "lineHeights"
        },
        "9": {
            "value": "266%",
            "type": "lineHeights"
        },
        "10": {
            "value": "166%",
            "type": "lineHeights"
        },
        "11": {
            "value": "20",
            "type": "lineHeights"
        },
        "12": {
            "value": "26",
            "type": "lineHeights"
        },
        "13": {
            "value": "24",
            "type": "lineHeights"
        },
        "14": {
            "value": "22",
            "type": "lineHeights"
        },
        "15": {
            "value": "12",
            "type": "lineHeights"
        },
        "16": {
            "value": "18",
            "type": "lineHeights"
        },
        "17": {
            "value": "14",
            "type": "lineHeights"
        },
        "18": {
            "value": "48",
            "type": "lineHeights"
        }
    },
    "fontWeights": {
        "light": {
            "value": "Light",
            "type": "fontWeights"
        },
        "regular": {
            "value": "Regular",
            "type": "fontWeights"
        },
        "medium": {
            "value": "Medium",
            "type": "fontWeights"
        }
    },
    "fontSize": {
        "0": {
            "value": "10",
            "type": "fontSizes"
        },
        "1": {
            "value": "12",
            "type": "fontSizes"
        },
        "2": {
            "value": "13",
            "type": "fontSizes"
        },
        "3": {
            "value": "14",
            "type": "fontSizes"
        },
        "4": {
            "value": "15",
            "type": "fontSizes"
        },
        "5": {
            "value": "16",
            "type": "fontSizes"
        },
        "6": {
            "value": "20",
            "type": "fontSizes"
        },
        "7": {
            "value": "24",
            "type": "fontSizes"
        },
        "8": {
            "value": "34",
            "type": "fontSizes"
        },
        "9": {
            "value": "48",
            "type": "fontSizes"
        },
        "10": {
            "value": "60",
            "type": "fontSizes"
        },
        "11": {
            "value": "96",
            "type": "fontSizes"
        }
    },
    "letterSpacing": {
        "0": {
            "value": "-1.5",
            "type": "letterSpacing"
        },
        "1": {
            "value": "-0.5",
            "type": "letterSpacing"
        },
        "2": {
            "value": "0",
            "type": "letterSpacing"
        },
        "3": {
            "value": "0.25",
            "type": "letterSpacing"
        },
        "4": {
            "value": "0.15",
            "type": "letterSpacing"
        },
        "5": {
            "value": "0.17",
            "type": "letterSpacing"
        },
        "6": {
            "value": "0.1",
            "type": "letterSpacing"
        },
        "7": {
            "value": "1",
            "type": "letterSpacing"
        },
        "8": {
            "value": "0.4",
            "type": "letterSpacing"
        },
        "9": {
            "value": "0.14",
            "type": "letterSpacing"
        },
        "10": {
            "value": "0.46",
            "type": "letterSpacing"
        },
        "11": {
            "value": "0.16",
            "type": "letterSpacing"
        }
    },
    "paragraphSpacing": {
        "none": {
            "value": "0",
            "type": "paragraphSpacing"
        }
    },
    "Typography": {
        "h1": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.light}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.0}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.11}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.0}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.none}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        },
        "h2": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.light}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.1}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.10}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.1}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.none}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        },
        "h3": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.regular}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.0}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.9}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.2}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.none}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        },
        "h4": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.regular}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.2}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.8}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.3}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.none}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        },
        "h5": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.regular}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.3}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.7}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.2}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.none}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        },
        "h6": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.medium}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.4}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.6}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.4}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.none}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        },
        "body1": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.regular}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.5}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.5}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.4}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.none}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        },
        "body2": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.regular}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.6}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.3}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.5}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.none}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        },
        "subtitle1": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.regular}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.7}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.5}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.4}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.none}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        },
        "subtitle2": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.medium}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.8}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.3}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.6}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.none}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        },
        "overline": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.regular}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.9}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.1}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.7}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.uppercase}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        },
        "caption": {
            "fontFamily": {
                "value": "{fontFamilies.roboto}",
                "type": "fontFamilies"
            },
            "fontWeight": {
                "value": "{fontWeights.regular}",
                "type": "fontWeights"
            },
            "lineHeight": {
                "value": "{lineHeights.10}",
                "type": "lineHeight"
            },
            "fontSize": {
                "value": "{fontSize.1}",
                "type": "fontSizes"
            },
            "letterSpacing": {
                "value": "{letterSpacing.8}",
                "type": "letterSpacing"
            },
            "paragraphSpacing": {
                "value": "{paragraphSpacing.none}",
                "type": "paragraphSpacing"
            },
            "paragraphIndent": {
                "value": "{paragraphIndent.none}",
                "type": "paragraphIndent"
            },
            "textCase": {
                "value": "{textCase.none}",
                "type": "textCase"
            },
            "textDecoration": {
                "value": "{textDecoration.none}",
                "type": "textDecoration"
            }
        }
    },
    "textCase": {
        "none": {
            "value": "none",
            "type": "textCase"
        },
        "uppercase": {
            "value": "uppercase",
            "type": "textCase"
        }
    },
    "textDecoration": {
        "none": {
            "value": "none",
            "type": "textDecoration"
        }
    },
    "shape": {
        "borderRadius": {
            "value": "4",
            "type": "borderRadius"
        }
    },
    "paragraphIndent": {
        "none": {
            "value": "0",
            "type": "paragraphSpacing"
        }
    },
    "spacing": {
        "1": {
            "value": "{spacing.base} * 1",
            "type": "spacing"
        },
        "2": {
            "value": "{spacing.base} * 2",
            "type": "spacing"
        },
        "3": {
            "value": "{spacing.base} * 3",
            "type": "spacing"
        },
        "4": {
            "value": "{spacing.base} * 4",
            "type": "spacing"
        },
        "5": {
            "value": "{spacing.base} * 5",
            "type": "spacing"
        },
        "6": {
            "value": "{spacing.base} * 6",
            "type": "spacing"
        },
        "7": {
            "value": "{spacing.base} * 7",
            "type": "spacing"
        },
        "8": {
            "value": "{spacing.base} * 8",
            "type": "spacing"
        },
        "9": {
            "value": "{spacing.base} * 9",
            "type": "spacing"
        },
        "10": {
            "value": "{spacing.base} * 10",
            "type": "spacing"
        },
        "11": {
            "value": "{spacing.base} * 11",
            "type": "spacing"
        },
        "12": {
            "value": "{spacing.base} * 12",
            "type": "spacing"
        },
        "base": {
            "value": "8",
            "type": "spacing"
        }
    },
    "sizing": {
        "1": {
            "value": "{spacing.base} * 1",
            "type": "sizing"
        },
        "2": {
            "value": "{spacing.base} * 2",
            "type": "sizing"
        },
        "3": {
            "value": "{spacing.base} * 3",
            "type": "sizing"
        },
        "4": {
            "value": "{spacing.base} * 4",
            "type": "sizing"
        },
        "5": {
            "value": "{spacing.base} * 5",
            "type": "sizing"
        },
        "6": {
            "value": "{spacing.base} * 6",
            "type": "sizing"
        },
        "7": {
            "value": "{spacing.base} * 7",
            "type": "sizing"
        },
        "8": {
            "value": "{spacing.base} * 8",
            "type": "sizing"
        },
        "9": {
            "value": "{spacing.base} * 9",
            "type": "sizing"
        },
        "10": {
            "value": "{spacing.base} * 10",
            "type": "sizing"
        },
        "11": {
            "value": "{spacing.base} * 11",
            "type": "sizing"
        },
        "12": {
            "value": "{spacing.base} * 12",
            "type": "sizing"
        },
        "base": {
            "value": "{spacing.base}",
            "type": "sizing"
        }
    },
    "background": {
        "default": {
            "value": "#121212",
            "type": "color",
            "description": "Reflects the background.default variable from the theme object"
        },
        "paper-elevation-0": {
            "value": "#121212",
            "type": "color",
            "description": "Reflects the background.paper variable from the theme object"
        },
        "paper-elevation-1": {
            "value": "#1E1E1E",
            "type": "color"
        },
        "paper-elevation-2": {
            "value": "#232323",
            "type": "color"
        },
        "paper-elevation-3": {
            "value": "#252525",
            "type": "color"
        },
        "paper-elevation-4": {
            "value": "#272727",
            "type": "color"
        },
        "paper-elevation-5": {
            "value": "#2A2A2A",
            "type": "color"
        },
        "paper-elevation-6": {
            "value": "#2C2C2C",
            "type": "color"
        },
        "paper-elevation-7": {
            "value": "#2C2C2C",
            "type": "color"
        },
        "paper-elevation-8": {
            "value": "#2E2E2E",
            "type": "color"
        },
        "paper-elevation-9": {
            "value": "#2E2E2E",
            "type": "color"
        },
        "paper-elevation-10": {
            "value": "#313131",
            "type": "color"
        },
        "paper-elevation-11": {
            "value": "#313131",
            "type": "color"
        },
        "paper-elevation-12": {
            "value": "#333333",
            "type": "color"
        },
        "paper-elevation-13": {
            "value": "#333333",
            "type": "color"
        },
        "paper-elevation-14": {
            "value": "#333333",
            "type": "color"
        },
        "paper-elevation-15": {
            "value": "#333333",
            "type": "color"
        },
        "paper-elevation-16": {
            "value": "#363636",
            "type": "color"
        },
        "paper-elevation-17": {
            "value": "#363636",
            "type": "color"
        },
        "paper-elevation-18": {
            "value": "#363636",
            "type": "color"
        },
        "paper-elevation-19": {
            "value": "#363636",
            "type": "color"
        },
        "paper-elevation-20": {
            "value": "#383838",
            "type": "color"
        },
        "paper-elevation-21": {
            "value": "#383838",
            "type": "color"
        },
        "paper-elevation-22": {
            "value": "#383838",
            "type": "color"
        },
        "paper-elevation-23": {
            "value": "#383838",
            "type": "color"
        },
        "paper-elevation-24": {
            "value": "#383838",
            "type": "color"
        }
    }
};
// const testObjects = (object) => {
//     try{
//         const stringifiedObject = JSON.stringify(object);
//         return JSON.parse(stringifiedObject);
//     }catch (error){
//         console.error(error);
//     }
// }
// console.log("testObjects(DesignSystemTheme): ", testObjects(DesignSystemTheme));
// // console.log("testObjects(WebsiteTheme): ", testObjects(WebsiteTheme));
