import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";
import HomeSecondBanner from "../HomeSecondBanner/HomeSecondBanner";
import ProductCard from "../../components/ProductCard/ProductCard";

const AllProducts = () => {
    const { handleClick, product, loading, error } = useContext(AuthContext);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900">
                <div className="text-red-500 text-center">
                    <h2 className="text-xl font-bold mb-2">Error Loading Products</h2>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    // Get unique categories and split them into two groups
    const categories = [...new Set(product.map(item => item.category))];
    const midPoint = Math.ceil(categories.length / 2);
    const topCategories = categories.slice(0, midPoint);
    const bottomCategories = categories.slice(midPoint);

    // Function to format category name for display
    const formatCategoryName = (category) => {
        return category
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Function to render category section
    const renderCategorySection = (categoryList) => {
        return categoryList.map(category => {
            const categoryProducts = product.filter(item => item.category === category);
            
            return (
                <div key={category} className="bg-white dark:bg-gray-800 rounded-xl mb-8 p-4">
                    <div className="flex justify-between items-center mb-6">
                        <h3 className="font-bold text-xl text-gray-800 dark:text-white">
                            {formatCategoryName(category)}
                        </h3>
                        <Link 
                            to={`/category/${category}`} 
                            className="text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-semibold text-sm"
                        >
                            See all
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3">
                        {categoryProducts.slice(0, 6).map(item => (
                            <ProductCard 
                                key={item._id}
                                product={item}
                                handleClick={handleClick}
                            />
                        ))}
                    </div>
                </div>
            );
        });
    };

    return (
        <div className=" dark:bg-gray-900 min-h-screen">
            {/* Top Categories Section */}
            <div className="">
                {renderCategorySection(topCategories)}
            </div>

            {/* Middle Banner Section */}
            <HomeSecondBanner />

            {/* Bottom Categories Section */}
            <div className="">
                {renderCategorySection(bottomCategories)}
            </div>
        </div>
    );
};

export default AllProducts;