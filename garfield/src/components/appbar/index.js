import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AppbarDesktop from "./appbarDesktop";
import AppbarMobile from "./appbarMobile";

export default function AppBar() {

    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        // checks if in mobile or desktop mode
        <AppbarDesktop />
        // <>
        //     {matches ? <AppbarMobile /> : <AppbarDesktop />}  
        // </>
    );
}