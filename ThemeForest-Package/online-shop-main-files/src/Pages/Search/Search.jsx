import { useContext, useState, useEffect, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import ProductCard from "../../components/ProductCard/ProductCard";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    const { product, loading, error, handleClick } = useContext(AuthContext);
    const [searchParams] = useSearchParams();
    const [searchResults, setSearchResults] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState("");
    const [selectedSubcategory, setSelectedSubcategory] = useState("");
    const [priceRange, setPriceRange] = useState({ min: "", max: "" });
    const [sortBy, setSortBy] = useState("");

    // Get query from URL
    const query = searchParams.get("q") || "";

    // Get unique categories
    const categories = useMemo(() => {
        return [...new Set(product.map(item => item.category))];
    }, [product]);

    // Get subcategories based on selected category
    const subcategories = useMemo(() => {
        if (!selectedCategory) return [];
        const categoryProducts = product.filter(item => item.category === selectedCategory);
        return [...new Set(categoryProducts.map(item => item.subcategory))];
    }, [selectedCategory, product]);

    // Reset subcategory when category changes
    useEffect(() => {
        setSelectedSubcategory("");
    }, [selectedCategory]);

    // Reset all filters
    const handleResetFilters = () => {
        setSelectedCategory("");
        setSelectedSubcategory("");
        setPriceRange({ min: "", max: "" });
        setSortBy("");
    };

    // Search function
    const performSearch = (searchTerm) => {
        if (product.length > 0) {
            let filtered = [...product];

            // Text search across multiple fields
            if (searchTerm) {
                const term = searchTerm.toLowerCase();
                filtered = filtered.filter(item =>
                    item.name.toLowerCase().includes(term) ||
                    item.brand.toLowerCase().includes(term) ||
                    item.category.toLowerCase().includes(term) ||
                    item.subcategory.toLowerCase().includes(term) ||
                    item.details.toLowerCase().includes(term)
                );
            }

            // Category filter
            if (selectedCategory) {
                filtered = filtered.filter(item => item.category === selectedCategory);
            }

            // Subcategory filter
            if (selectedSubcategory) {
                filtered = filtered.filter(item => item.subcategory === selectedSubcategory);
            }

            // Price range filter
            if (priceRange.min !== "") {
                filtered = filtered.filter(item => item.price >= Number(priceRange.min));
            }
            if (priceRange.max !== "") {
                filtered = filtered.filter(item => item.price <= Number(priceRange.max));
            }

            // Sorting
            if (sortBy === "price-asc") {
                filtered.sort((a, b) => a.price - b.price);
            } else if (sortBy === "price-desc") {
                filtered.sort((a, b) => b.price - a.price);
            } else if (sortBy === "rating") {
                filtered.sort((a, b) => b.rating - a.rating);
            }

            setSearchResults(filtered);
        }
    };

    // Effect to perform search when URL query changes
    useEffect(() => {
        performSearch(query);
    }, [query, product, selectedCategory, selectedSubcategory, priceRange, sortBy]);

    // Format category/subcategory name for display
    const formatName = (name) => {
        return name
            .split("-")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
    };

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
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

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Filters */}
                    <div className="space-y-6 bg-white p-6 rounded-lg shadow-sm h-fit">
                        <div>
                            <h3 className="font-semibold mb-3">Category</h3>
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full p-2 border rounded-md"
                            >
                                <option value="">All Categories</option>
                                {categories.map(category => (
                                    <option key={category} value={category}>
                                        {formatName(category)}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {selectedCategory && subcategories.length > 0 && (
                            <div>
                                <h3 className="font-semibold mb-3">Subcategory</h3>
                                <select
                                    value={selectedSubcategory}
                                    onChange={(e) => setSelectedSubcategory(e.target.value)}
                                    className="w-full p-2 border rounded-md"
                                >
                                    <option value="">All Subcategories</option>
                                    {subcategories.map(subcategory => (
                                        <option key={subcategory} value={subcategory}>
                                            {formatName(subcategory)}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        )}

                        <div>
                            <h3 className="font-semibold mb-3">Price Range</h3>
                            <div className="flex gap-2">
                                <input
                                    type="number"
                                    placeholder="Min"
                                    value={priceRange.min}
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, min: e.target.value }))}
                                    className="w-1/2 p-2 border rounded-md"
                                />
                                <input
                                    type="number"
                                    placeholder="Max"
                                    value={priceRange.max}
                                    onChange={(e) => setPriceRange(prev => ({ ...prev, max: e.target.value }))}
                                    className="w-1/2 p-2 border rounded-md"
                                />
                            </div>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-3">Sort By</h3>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                className="w-full p-2 border rounded-md"
                            >
                                <option value="">Default</option>
                                <option value="price-asc">Price: Low to High</option>
                                <option value="price-desc">Price: High to Low</option>
                                <option value="rating">Rating</option>
                            </select>
                        </div>

                        {/* Reset Filters Button */}
                        <button
                            onClick={handleResetFilters}
                            className="w-full py-2 text-blue-600 hover:text-blue-700 font-medium border border-blue-600 rounded-md hover:bg-blue-50 transition-colors"
                        >
                            Reset Filters
                        </button>
                    </div>

                    {/* Results */}
                    <div className="lg:col-span-3">
                        <div className="mb-6">
                            <h2 className="text-2xl font-bold text-gray-800">
                                {searchResults.length} {searchResults.length === 1 ? 'Result' : 'Results'}
                                {query && ` for "${query}"`}
                                {selectedCategory && ` in ${formatName(selectedCategory)}`}
                                {selectedSubcategory && ` > ${formatName(selectedSubcategory)}`}
                            </h2>
                        </div>

                        {searchResults.length > 0 ? (
                            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
                                {searchResults.map(item => (
                                    <ProductCard
                                        key={item._id}
                                        product={item}
                                        handleClick={handleClick}
                                    />
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm">
                                <FaSearch className="mx-auto text-gray-400 text-4xl mb-4" />
                                <p className="text-gray-500 dark:text-gray-400 text-lg">No products found matching your criteria.</p>
                                {query && (
                                    <p className="text-gray-400 dark:text-gray-300 mt-2">
                                        Try adjusting your search or filters
                                    </p>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Search; 