import Nav from "../styled/Nav.styled";
import { MdRssFeed } from "react-icons/md";
import { AiTwotoneAppstore } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { styled, useTheme } from "@mui/material";

const Navigation = () => {
    const theme = useTheme();

    return (
        <Nav>
            <MdRssFeed size="2rem" />
            <AppContainer>
                <AiTwotoneAppstore size="2.5rem" color={theme.color.primary} />
            </AppContainer>
            <IoNotificationsOutline size="2.5rem" />
        </Nav>
    );
};

const AppContainer = styled("div")(({ theme }) => ({
    padding: ".5rem",
    borderRadius: "50%",
    position: "relative",
    transform: "translateY(-25%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.color.backgroundSecondary
}));

export default Navigation;
