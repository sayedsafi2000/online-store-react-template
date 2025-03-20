import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa";
import logo from "../../assets/logo.png";
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleLogout = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error));
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
        }
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-xl font-bold text-blue-600">
                        <img src={logo} alt="logo" className="w-20 h-20" />
                    </Link>

                    {/* Search Bar */}
                    <div className="hidden md:block flex-1 max-w-2xl mx-8">
                        <form onSubmit={handleSearch} className="relative">
                            <input
                                type="search"
                                placeholder="Search products..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            />
                            <button
                                type="submit"
                                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                            >
                                <FaSearch />
                            </button>
                        </form>
                    </div>

                    {/* Navigation Links */}
                    <div className="flex items-center space-x-4">
                        <Link to="/products" className="text-gray-600 hover:text-blue-600">
                            Products
                        </Link>
                        
                        {/* Mobile Search Icon */}
                        <Link to="/search" className="md:hidden text-gray-600 hover:text-blue-600">
                            <FaSearch />
                        </Link>

                        <Link to="/cart" className="text-gray-600 hover:text-blue-600">
                            <FaShoppingCart />
                        </Link>

                        {user ? (
                            <div className="relative group">
                                <button className="flex items-center space-x-1 text-gray-600 hover:text-blue-600">
                                    <FaUser />
                                </button>
                                <div className="absolute right-0 w-48 py-2 mt-2 bg-white rounded-md shadow-xl hidden group-hover:block">
                                    <div className="px-4 py-2 text-sm text-gray-700">
                                        {user.email}
                                    </div>
                                    <hr />
                                    <button
                                        onClick={handleLogout}
                                        className="block w-full px-4 py-2 text-sm text-left text-gray-700 hover:bg-gray-100"
                                    >
                                        Logout
                                    </button>
                                </div>
                            </div>
                        ) : (
                            <Link
                                to="/login"
                                className="text-gray-600 hover:text-blue-600"
                            >
                                Login
                            </Link>
                        )}
                    </div>
                </div>

                {/* Mobile Search Bar */}
                <div className="md:hidden pb-4">
                    <form onSubmit={handleSearch} className="relative">
                        <input
                            type="search"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                        <button
                            type="submit"
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-blue-500"
                        >
                            <FaSearch />
                        </button>
                    </form>
                </div>
            </div>
        </nav>
    );
};

export default Navbar; 