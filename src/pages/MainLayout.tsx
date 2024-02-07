import { Outlet } from "react-router-dom";
import "./MainLayout.css";

const MainLayout = () => {
    return (
        <>
            <div className="app">
                <Outlet />
            </div>
        </>
    )
};

export default MainLayout;
