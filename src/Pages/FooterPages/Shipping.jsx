const Shipping = () => {


    const shippingMethods = [
        {
            title: "Standard Delivery",
            description: "Delivery within 5-7 business days",
            price: "₹50",
            icon: "🚚"
        },
        {
            title: "Express Delivery",
            description: "Delivery within 2-3 business days",
            price: "₹100",
            icon: "⚡"
        },
        {
            title: "Next Day Delivery",
            description: "Delivery by tomorrow",
            price: "₹200",
            icon: "🎯"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Shipping Information
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Fast and reliable shipping options to meet your delivery needs
                    </p>
                </div>

                {/* Shipping Methods */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                        Shipping Methods
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {shippingMethods.map((method, index) => (
                            <div key={index} className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow">
                                <div className="text-4xl mb-4">{method.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {method.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {method.description}
                                </p>
                                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                                    {method.price}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Delivery Areas */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                        Delivery Areas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                Domestic Shipping
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                We deliver to all major cities and towns across India. Delivery times may vary based on location.
                            </p>
                        </div>
                        <div className="space-y-4">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                                International Shipping
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Currently, we only ship within India. International shipping coming soon!
                            </p>
                        </div>
                    </div>
                </div>

                {/* Track Order */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                        Track Your Order
                    </h2>
                    <div className="max-w-xl mx-auto">
                        <div className="flex gap-4">
                            <input
                                type="text"
                                placeholder="Enter your tracking number"
                                className="flex-1 px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400"
                            />
                            <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                                Track
                            </button>
                        </div>
                        <p className="mt-4 text-sm text-gray-600 dark:text-gray-300 text-center">
                            Track your shipment to see the current status and estimated delivery date
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Shipping;