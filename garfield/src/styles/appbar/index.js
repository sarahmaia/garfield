import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Box } from "@mui/system";
import "@fontsource/playfair-display";

// container
export const AppbarContainer = styled(Box)(() => ({
    display: 'flex',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',
    padding: '2px 8px',
}));

// header
export const AppbarHeader = styled(Typography)(() => ({
    padding: '4px',
    flexGrow: 1,
    fontSize: '1.5em', // header font size
    fontFamily: '"Playfair"', // header font
    color: "#00000", //header color
}));

// search bar? toggle to different sections under header?
// side hamburger toggle? small donation page link at top or?