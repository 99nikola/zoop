import { createTheme } from "@mui/material";

declare module "@mui/material/styles" {
    interface Theme {
        color: {
            primary: string,
            secondary: string,
            backgroundPrimary: string,
            backgroundSecondary: string
        }
    }

    interface ThemeOptions {
        color: {
            primary: string,
            secondary: string,
            backgroundPrimary: string,
            backgroundSecondary: string
        }
    }
}

const theme = createTheme({
    color: {
        primary: "#276ACD",
        secondary: "#E863A3",
        backgroundPrimary: "#FFFFFF",
        backgroundSecondary: "#F4F4F4",
    }
});

export default theme;