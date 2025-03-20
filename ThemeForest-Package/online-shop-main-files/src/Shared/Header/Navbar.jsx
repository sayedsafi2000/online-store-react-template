import { useContext, useState } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { BsGrid3X3Gap, BsSun, BsMoon } from "react-icons/bs";
import { IoCloseOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { useTheme } from "../../Provider/ThemeProvider";
import logo from "../../assets/logo.png";
const Navbar = () => {
    const { cart, product } = useContext(AuthContext);
    const { darkMode, toggleDarkMode } = useTheme();
    const [searchQuery, setSearchQuery] = useState("");
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [showAuthDropdown, setShowAuthDropdown] = useState(false);
    const navigate = useNavigate();

    // Get unique categories from products
    const categories = [...new Set(product.map(item => item.category))];

    // Format category name for display
    const formatCategoryName = (category) => {
        return category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
            setSearchQuery("");
            setShowMobileSearch(false);
        }
    };

    // Close dropdown when clicking outside
    const handleClickOutside = (e) => {
        if (!e.target.closest('.auth-dropdown')) {
            setShowAuthDropdown(false);
        }
    };

    // Add event listener for clicking outside
    useState(() => {
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return (
        <div className="bg-white dark:bg-gray-800 shadow-lg border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4">
                <div className="flex items-center justify-between md:h-28">
                    {/* Left Section - Logo and Categories */}
                    <div className="flex items-center gap-6">
                        {/* Logo */}
                        <Link to="/" className="flex-shrink-0 flex flex-col items-center justify-center text-center">
                            <img 
                                className="h-14 w-auto" 
                                src={logo} 
                                alt="Logo" 
                            />
                            <p className="text-gray-700 dark:text-white text-sm font-semibold">ONLINE SHOP</p>
                        </Link>

                        {/* Categories Dropdown */}
                        <div className="relative group hidden md:block">
                            <button className="flex items-center gap-2 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 font-medium py-2">
                                <BsGrid3X3Gap className="text-lg" />
                                <span>Categories</span>
                            </button>
                            <div className="absolute left-0 top-full mt-1 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                <div className="py-2 max-h-96 overflow-y-auto">
                                    {categories.map(category => (
                                        <Link
                                            key={category}
                                            to={`/category/${category}`}
                                            className="block px-4 py-2 text-sm text-gray-700 dark:text-white hover:bg-blue-50 dark:hover:bg-dark-surface hover:text-blue-600 dark:hover:text-blue-400"
                                        >
                                            {formatCategoryName(category)}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Center Section - Search */}
                    <div className="hidden md:block flex-1 max-w-2xl mx-8">
                        <form onSubmit={handleSearch} className="flex">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="w-full pl-4 pr-10 py-3 rounded-l-lg border border-r-0 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-6 bg-blue-600 dark:bg-gray-400 text-white rounded-r-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                            >
                                <BiSearch className="text-xl" />
                            </button>
                        </form>
                    </div>

                    {/* Right Section - Theme, Auth & Cart */}
                    <div className="flex items-center gap-4">
                        {/* Theme Toggle */}
                        <button
                            onClick={toggleDarkMode}
                            className="p-2 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-semibold"
                        >
                            {darkMode ? <BsSun className="text-xl" /> : <BsMoon className="text-xl" />}
                        </button>

                        {/* Mobile Search Icon */}
                        <button 
                            onClick={() => setShowMobileSearch(true)}
                            className="md:hidden p-2 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400"
                        >
                            <BiSearch className="text-2xl" />
                        </button>

                        {/* Auth Dropdown */}
                        <div className="relative auth-dropdown">
                            <button 
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setShowAuthDropdown(!showAuthDropdown);
                                }}
                                className="p-2 text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                            >
                                <FaRegUser className="text-xl" />
                            </button>
                            
                            {/* Dropdown Menu */}
                            {showAuthDropdown && (
                                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-100 dark:border-gray-700 py-2">
                                    <Link 
                                        to="/login"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600"
                                        onClick={() => setShowAuthDropdown(false)}
                                    >
                                        Login
                                    </Link>
                                    <Link 
                                        to="/signup"
                                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-blue-600"
                                        onClick={() => setShowAuthDropdown(false)}
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            )}
                        </div>

                        {/* Cart */}
                        <Link 
                            to="/cart"
                            className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors"
                        >
                            <div className="relative">
                                <AiOutlineShoppingCart className="text-2xl dark:text-white hover:bg-blue-50 hover:text-blue-600" />
                                {cart.length > 0 && (
                                    <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                                        {cart.length}
                                    </span>
                                )}
                            </div>
                            <span className="font-medium dark:text-white text-sm hidden md:inline">Cart</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Mobile Search Overlay */}
            {showMobileSearch && (
                <div className="fixed inset-0 bg-white dark:bg-dark-bg z-50 md:hidden">
                    <div className="p-4">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-semibold text-gray-800">Search</h2>
                            <button 
                                onClick={() => setShowMobileSearch(false)}
                                className="p-2 text-gray-500 hover:text-gray-700"
                            >
                                <IoCloseOutline className="text-2xl" />
                            </button>
                        </div>
                        <form onSubmit={handleSearch} className="flex">
                            <div className="relative flex-1">
                                <input
                                    type="text"
                                    placeholder="Search for products..."
                                    className="w-full pl-4 pr-10 py-3 rounded-l-lg border border-r-0 border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    autoFocus
                                />
                            </div>
                            <button
                                type="submit"
                                className="px-6 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors flex items-center justify-center"
                            >
                                <BiSearch className="text-xl" />
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;