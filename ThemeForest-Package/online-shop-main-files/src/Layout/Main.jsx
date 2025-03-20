import { Outlet } from 'react-router-dom';
import Navbar from '../Shared/Header/Navbar';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='min-h-screen flex flex-col bg-white dark:bg-gray-900'>
            <Header />
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default Main;