import React from "react";

export const themes = {
    light: {
        foreground: "#000000",
        background: "#eeeeee",
        graphColor: '#8884d8',
        graphColorSeconday: '#82ca9d',
        graphColorTertiary: '#ffc658'
    },
    dark: {
        foreground: "#ffffff",
        background: "#222222",
        graphColor: '#8884d8',
        graphColorSeconday: '#82ca9d',
        graphColorTertiary: '#ffc658'
    }
};


export const MyThemeContext = React.createContext(themes.light);