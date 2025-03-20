import { Link } from 'react-router-dom';

const HomeSecondBanner = () => {
    return (
        <div className="bg-white dark:bg-gray-800 w-[97%] mx-auto rounded-md">
            <div className="w-full mx-auto p-12">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Left Banner */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1542838132-92c53300491e?w=500" 
                            alt="Fresh Produce"
                            className="w-full h-[300px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-white text-2xl font-bold mb-2">Fresh Produce</h3>
                            <p className="text-gray-200 mb-4">Get fresh vegetables and fruits delivered to your doorstep</p>
                            <Link 
                                to="/category/fresh-produce"
                                className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors w-fit"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>

                    {/* Right Banner */}
                    <div className="relative overflow-hidden rounded-2xl">
                        <img 
                            src="https://images.unsplash.com/photo-1609501676725-7186f017a4b7?w=500" 
                            alt="Cooking Essentials"
                            className="w-full h-[300px] object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                            <h3 className="text-white text-2xl font-bold mb-2">Cooking Essentials</h3>
                            <p className="text-gray-200 mb-4">Stock up on premium quality cooking oils and spices</p>
                            <Link 
                                to="/category/cooking-essentials"
                                className="inline-block bg-white text-gray-900 px-6 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors w-fit"
                            >
                                Shop Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeSecondBanner;