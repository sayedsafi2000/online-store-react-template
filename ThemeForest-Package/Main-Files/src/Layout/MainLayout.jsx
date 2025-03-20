import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Header/Navbar";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
    return (
        <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-dark-bg">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default MainLayout; 