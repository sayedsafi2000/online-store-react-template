import { Link } from 'react-router-dom';

const HomeBanner = () => {
    return (
        <div className=" dark:bg-gray-900 py-12">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                    {/* Content Section */}
                    <div className="space-y-6">
                        <div className="inline-block bg-blue-100 dark:bg-blue-900 rounded-full px-4 py-1">
                            <p className="text-blue-600 dark:text-blue-400 text-sm font-medium">
                                Special Offer
                            </p>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                            Fresh & Healthy
                            <span className="block text-blue-600 dark:text-blue-400">Organic Food</span>
                        </h1>
                        <p className="text-lg text-gray-600 dark:text-gray-400 max-w-xl">
                            Get the best quality organic products delivered to your doorstep. 
                            Save up to 30% on your first order.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link 
                                to="/products" 
                                className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors"
                            >
                                Shop Now
                            </Link>
                            <Link 
                                to="/category/fresh-produce" 
                                className="inline-block bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white px-8 py-3 rounded-lg font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                            >
                                View Categories
                            </Link>
                        </div>
                        <div className="grid grid-cols-3 gap-6 pt-8">
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">100+</h4>
                                <p className="text-gray-600 dark:text-gray-400">Products</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">50k+</h4>
                                <p className="text-gray-600 dark:text-gray-400">Customers</p>
                            </div>
                            <div>
                                <h4 className="text-2xl font-bold text-gray-900 dark:text-white">99%</h4>
                                <p className="text-gray-600 dark:text-gray-400">Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative">
                        <div className="relative z-10">
                            <img 
                                src="https://images.unsplash.com/photo-1610348725531-843dff563e2c?w=500" 
                                alt="Fresh Vegetables"
                                className="w-full rounded-2xl shadow-xl"
                            />
                        </div>
                        {/* Decorative Elements */}
                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full">
                            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-green-500/20 rounded-2xl filter blur-3xl"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
