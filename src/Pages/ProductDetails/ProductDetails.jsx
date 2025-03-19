import { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { FaStar } from "react-icons/fa";

const ProductDetails = () => {
    const { id } = useParams();
    const { product, handleClick } = useContext(AuthContext);
    const [quantity, setQuantity] = useState(1);

    // Find the current product
    const currentProduct = product.find(item => item._id === id);

    if (!currentProduct) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
                <div className="text-center text-gray-600 dark:text-gray-400">
                    <h2 className="text-2xl font-bold mb-2">Product Not Found</h2>
                    <p>The product you&apos;re looking for doesn&apos;t exist.</p>
                </div>
            </div>
        );
    }

    // Format category and subcategory names
    const formatName = (name) => {
        return name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    // Handle quantity changes
    const handleQuantityChange = (type) => {
        if (type === "inc") {
            setQuantity(prev => prev + 1);
        } else if (type === "dec" && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    // Handle add to cart with quantity
    const handleAddToCart = () => {
        handleClick(currentProduct, quantity);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 flex items-center justify-center">
                        <img 
                            src={currentProduct.image} 
                            alt={currentProduct.name}
                            className="max-w-full h-auto rounded-xl"
                        />
                    </div>

                    {/* Product Info */}
                    <div className="space-y-8">
                        {/* Basic Info */}
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                {currentProduct.name}
                            </h1>
                            <div className="flex items-center gap-4 mb-4">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, index) => (
                                        <FaStar
                                            key={index}
                                            className={index < Math.floor(currentProduct.rating) 
                                                ? "text-yellow-400" 
                                                : "text-gray-300 dark:text-gray-600"
                                            }
                                        />
                                    ))}
                                </div>
                                <span className="text-gray-600 dark:text-gray-400">
                                    {currentProduct.rating} Rating
                                </span>
                            </div>
                            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                                ${currentProduct.price}
                            </p>
                        </div>

                        {/* Categories */}
                        <div className="space-y-4">
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600 dark:text-gray-400">Category:</span>
                                <span className="text-gray-900 dark:text-white">
                                    {formatName(currentProduct.category)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600 dark:text-gray-400">Subcategory:</span>
                                <span className="text-gray-900 dark:text-white">
                                    {formatName(currentProduct.subcategory)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600 dark:text-gray-400">Brand:</span>
                                <span className="text-gray-900 dark:text-white">
                                    {formatName(currentProduct.brand)}
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-gray-600 dark:text-gray-400">Quantity:</span>
                                <span className="text-gray-900 dark:text-white">
                                    {currentProduct.quantity}
                                </span>
                            </div>
                        </div>

                        {/* Description */}
                        <div>
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                Product Details
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400">
                                {currentProduct.details}
                            </p>
                        </div>

                        {/* Quantity Selector and Add to Cart */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <span className="text-gray-600 dark:text-gray-400">Quantity:</span>
                                <div className="flex items-center">
                                    <button 
                                        onClick={() => handleQuantityChange("dec")}
                                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-l-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
                                    >
                                        -
                                    </button>
                                    <div className="w-16 text-center py-2 border-t border-b border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white">
                                        {quantity}
                                    </div>
                                    <button 
                                        onClick={() => handleQuantityChange("inc")}
                                        className="px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-r-lg hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-600 dark:text-gray-400"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                className="w-full py-3 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails; 