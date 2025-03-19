const Returns = () => {
    const returnPolicies = [
        {
            title: "Easy Returns Within 30 Days",
            description: "Return any item within 30 days of delivery for a full refund. Items must be unused and in original packaging.",
            icon: "📦"
        },
        {
            title: "Free Return Shipping",
            description: "We cover return shipping costs for all items. Simply use our prepaid shipping label.",
            icon: "🚚"
        },
        {
            title: "Quick Refunds",
            description: "Refunds are processed within 3-5 business days after we receive your return.",
            icon: "💰"
        }
    ];

    const returnSteps = [
        {
            number: "1",
            title: "Initiate Return",
            description: "Log in to your account, go to orders, and select the items you want to return."
        },
        {
            number: "2",
            title: "Pack Items",
            description: "Pack the items securely in their original packaging with all tags attached."
        },
        {
            number: "3",
            title: "Ship",
            description: "Use our prepaid shipping label and drop off at nearest courier partner."
        },
        {
            number: "4",
            title: "Refund",
            description: "Once we receive and verify the return, we'll process your refund."
        }
    ];

    const returnConditions = [
        "Items must be unused, unworn, and in original condition",
        "All original tags and packaging must be intact",
        "Items marked as 'Final Sale' cannot be returned",
        "Certain personal care items and food products are non-returnable",
        "Items must be returned within 30 days of delivery",
        "Gift returns will be refunded as store credit"
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Returns & Refunds
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We want you to be completely satisfied with your purchase. If you&apos;re not happy, we&apos;re not happy.
                    </p>
                </div>

                {/* Return Policies */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                        Our Return Policy
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {returnPolicies.map((policy, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-4">{policy.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {policy.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {policy.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Return Process */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                        Return Process
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {returnSteps.map((step, index) => (
                            <div key={index} className="text-center">
                                <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                                    {step.number}
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Return Conditions */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                        Return Conditions
                    </h2>
                    <div className="space-y-4">
                        {returnConditions.map((condition, index) => (
                            <div key={index} className="flex items-start space-x-3">
                                <div className="flex-shrink-0 w-6 h-6 bg-blue-600 dark:bg-blue-500 text-white rounded-full flex items-center justify-center text-sm">
                                    ✓
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {condition}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Need Help */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 text-center">
                        Need Help?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 text-center mb-6">
                        Our customer service team is here to help you with your return.
                    </p>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <a 
                            href="mailto:returns@onlineshop.com"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                        >
                            returns@onlineshop.com
                        </a>
                        <span className="hidden md:inline text-gray-400">|</span>
                        <a 
                            href="tel:+918001234567"
                            className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                        >
                            +91 (800) 123-4567
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Returns;