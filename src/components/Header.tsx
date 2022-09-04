import { Box, Typography } from "@mui/material";
import colors from "../styles/colors";

export function Header() {
  return (
    <Box
      sx={{
        backgroundColor: colors.black,
        width: "100vw",
        height: "10vh",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
      }}
    >
        <Typography variant="h3" sx={{
            color:colors.white
        }}>Engineer Gonzalo Cantú Treviño</Typography>
    </Box>
  );
}
