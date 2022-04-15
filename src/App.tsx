import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { ROUTES } from "./constants/routes";

const App: React.FC = () => {
    const HomeMemo = useMemo(() => <Home />, []);
    const NotFoundMemo = useMemo(() => <NotFound />, []);
    const MainLayoutMemo = useMemo(() => <MainLayout />, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route element={MainLayoutMemo}>
                    <Route path={ROUTES.HOME} element={HomeMemo} />
                    <Route path="*" element={NotFoundMemo} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
