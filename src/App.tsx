import { useMemo } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";
import { ROUTES } from "./constants/routes";

const App: React.FC = () => {
    const HomePage = useMemo(() => <Home />, []);
    const NotFoundPage = useMemo(() => <NotFound />, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path={ROUTES.HOME} element={HomePage} />
                <Route path="*" element={NotFoundPage} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
