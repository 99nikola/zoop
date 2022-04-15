import { CssBaseline, ThemeProvider } from "@mui/material";
import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";
import Navigation from "../organisms/Navigation";
import Main from "../styled/Main.styled";
import theme from "../../theme";
import ProgressStepper from "../organisms/ProgressStepper";

const MainLayout: React.FC = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <ProgressStepper />
            {/* <PageNavigation /> */}
            <Main>
                <Outlet />
            </Main>
            <Navigation />
        </ThemeProvider>
    );
};

export default MainLayout;
