import { Box } from "@mui/system";
import colors from "../styles/colors";

export function Content(){
    return(<Box
    sx={{
        width:"100vw",
        height:"100vh",
        backgroundColor: colors.green,
        display:"flex",
        justifyContent:"center",
    }}>
        <Box
        sx={{
            width:"65%",
            height:"100%",
            backgroundColor: colors.yellow,
        }}></Box>
    </Box>);
}