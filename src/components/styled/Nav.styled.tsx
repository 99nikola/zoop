import { styled } from "@mui/material";

const Nav = styled("nav")(({ theme }) => ({
    position: "absolute",
    bottom: 0,
    left: 0,
    borderTopLeftRadius: "50%",
    borderTopRightRadius: "50%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "5%",
    backgroundColor: theme.color.backgroundSecondary
}));

export default Nav;
