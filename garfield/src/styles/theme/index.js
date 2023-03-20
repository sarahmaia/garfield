import { createTheme } from "@mui/material/styles";

const Theme = createTheme({
    palette: {
        primary: {
            main: "#FF6347",
        },
        secondary: {
            main: "#008CFF",
            text: "#ffff",
        }
    }, 

    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            }
        }
    }
});

export default Theme;