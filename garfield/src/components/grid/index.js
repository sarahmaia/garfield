import GridSpacing, { GridContainer } from "../../styles/grid";
import { useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function Grid() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('md'));

    return (
        <GridContainer>
            <GridSpacing />
        </GridContainer>
    );

}