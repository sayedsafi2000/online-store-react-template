import { useContext, useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ProductCard from "../../components/ProductCard/ProductCard";

const CategoryProducts = () => {
    const { category } = useParams();
    const { handleClick, product, loading, error } = useContext(AuthContext);
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [selectedBrand, setSelectedBrand] = useState("");
    const [priceRange, setPriceRange] = useState({ min: "", max: "" });
    const [sortBy, setSortBy] = useState("");

    // Get filtered products and metadata
    const {
        filteredProducts,
        subcategories,
        brands,
        priceStats
    } = useMemo(() => {
        // First filter by category
        let filtered = product.filter(item => item.category === category);

        // Get unique subcategories and brands
        const subcategories = [...new Set(filtered.map(item => item.subcategory))];
        const brands = [...new Set(filtered.map(item => item.brand))];
        
        // Get price range
        const prices = filtered.map(item => item.price);
        const priceStats = {
            min: Math.min(...prices),
            max: Math.max(...prices)
        };

        // Apply subcategory filter
        if (selectedSubcategory) {
            filtered = filtered.filter(item => item.subcategory === selectedSubcategory);
        }

        // Apply brand filter
        if (selectedBrand) {
            filtered = filtered.filter(item => item.brand === selectedBrand);
        }

        // Apply price range filter
        if (priceRange.min !== "") {
            filtered = filtered.filter(item => item.price >= Number(priceRange.min));
        }
        if (priceRange.max !== "") {
            filtered = filtered.filter(item => item.price <= Number(priceRange.max));
        }

        // Apply sorting
        if (sortBy === "price-asc") {
            filtered.sort((a, b) => a.price - b.price);
        } else if (sortBy === "price-desc") {
            filtered.sort((a, b) => b.price - a.price);
        } else if (sortBy === "rating") {
            filtered.sort((a, b) => b.rating - a.rating);
        }

        return {
            filteredProducts: filtered,
            subcategories,
            brands,
            priceStats
        };
    }, [product, category, selectedSubcategory, selectedBrand, priceRange, sortBy]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-red-500 text-center">
                    <h2 className="text-xl font-bold mb-2">Error Loading Products</h2>
                    <p>{error}</p>
                </div>
            </div>
        );
    }

    // Function to format name for display
    const formatName = (name) => {
        return name
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    };

    return (
        <div className="bg-gray-50 dark:bg-gray-900 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-8">
                {/* Category Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-800 dark:text-white mb-2">
                        {formatName(category)}
                    </h1>
                    <p className="text-gray-600 dark:text-gray-400">
                        {filteredProducts.length} products available
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters Sidebar */}
                    <div className="space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm h-fit">
                        {/* Subcategories Filter */}
                        <div>
                            <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">Subcategory</h3>
                            <select
                                value={selectedSubcategory}
                                onChange={(e) => setSelectedSubcategory(e.target.value)}
                                className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                            >
                                <option value="">All Subcategories</option>
                                {subcategories.map(sub => (
                                    <option key={sub} value={sub}>
                                        {formatName(sub)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Brands Filter */}
                        <div>
                            <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">Brand</h3>
                            <select
                                value={selectedBrand}
                                onChange={(e) => setSelectedBrand(e.target.value)}
                                className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                            >
                                <option value="">All Brands</option>
                                {brands.map(brand => (
                                    <option key={brand} value={brand}>
                                        {formatName(brand)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Price Range Filter */}
                        <div>
                            <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">Price Range</h3>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    placeholder={`Min (${priceStats.min})`}
                                    value={priceRange.min}
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                                    className="w-1/2 p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                                    min={priceStats.min}
                                    max={priceStats.max}
                                />
                                <input
                                    type="number"
                                    placeholder={`Max (${priceStats.max})`}
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                                    className="w-1/2 p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                                    min={priceStats.min}
                                    max={priceStats.max}
                                />
                            </div>
                        </div>

                        {/* Sort By */}
                        <div>
                            <h3 className="font-semibold mb-3 text-gray-800 dark:text-white">Sort By</h3>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full p-2 border rounded-md bg-white dark:bg-gray-700 text-gray-900 dark:text-white border-gray-300 dark:border-gray-600"
                            >
                                <option value="">Default</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>

                        {/* Reset Filters Button */}
                        <button
                            onClick={() => {
                                setSelectedSubcategory("");
                                setSelectedBrand("");
                                setPriceRange({ min: "", max: "" });
                                setSortBy("");
                            }}
                            className="w-full py-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                        >
                            Reset Filters
                        </button>
                    </div>

                    {/* Products Grid */}
                    <div className="lg:col-span-3">
                        {filteredProducts.length > 0 ? (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                                {filteredProducts.map(item => (
                                    <ProductCard 
                                        key={item._id}
                                        product={item}
                                        handleClick={handleClick}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <h2 className="text-2xl font-semibold text-gray-600 dark:text-gray-300">
                                    No products found
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 mt-2">
                                    Try adjusting your filters to find what you`re looking for
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryProducts; 