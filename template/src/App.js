import { createTheme, ThemeProvider } from "@material-ui/core"
import Dashboard from "./app/components/Dashboard"

const theme = createTheme({
    typography: {
        fontFamily: "Lato",
    },
    overrides: {
        MuiTypography: {
            root: {
                fontWeight: "500 !important",
            },
        },
        MuiButton: {
            root: {
                borderColor: "transparent",
                minWidth: "auto",
            },
            contained: {
                backgroundColor: "#E1E1FA",
                boxShadow: "none",
                color: "#4D4DAD",
                "&:hover, &:focus, &:active": {
                    backgroundColor: "#C2C2F5",
                    boxShadow: "0 2px 5px rgba(133, 133, 235, .35)",
                    color: "#343473",
                },
                "&:disabled": {
                    backgroundColor: "#E2E4E8",
                    color: "#535968",
                },
            },
            containedPrimary: {
                backgroundColor: "#6767E6",
                color: "#FFF",
                "&:hover, &:focus, &:active": {
                    backgroundColor: "#4D4DAD",
                    color: "#FFF",
                },
            },
            label: {
                fontWeight: 700,
            },
        },
    },
})

const App = () => {
    return (
        <ThemeProvider theme={theme}>
            <Dashboard />
        </ThemeProvider>
    )
}
export default App
