const SellOnShop = () => {
    const benefits = [
        {
            title: "Wide Reach",
            description: "Access millions of customers across India",
            icon: "🌐"
        },
        {
            title: "Easy Setup",
            description: "Start selling in less than 24 hours",
            icon: "⚡"
        },
        {
            title: "Secure Payments",
            description: "Reliable and secure payment processing",
            icon: "🔒"
        },
        {
            title: "Seller Support",
            description: "24/7 dedicated seller support",
            icon: "💬"
        }
    ];

    const steps = [
        {
            number: "1",
            title: "Register",
            description: "Sign up as a seller with basic details and documentation"
        },
        {
            number: "2",
            title: "List Products",
            description: "Add your products with details and pricing"
        },
        {
            number: "3",
            title: "Start Selling",
            description: "Receive orders and start growing your business"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Sell on Online Shop
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Reach millions of customers and grow your business with our e-commerce platform.
                    </p>
                    <button className="mt-8 px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors">
                        Start Selling
                    </button>
                </div>

                {/* Benefits Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                        Why Sell With Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {benefits.map((benefit, index) => (
                            <div key={index} className="text-center">
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* How It Works Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                        How It Works
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {steps.map((step, index) => (
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

                {/* Pricing Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                        Pricing & Fees
                    </h2>
                    <div className="max-w-3xl mx-auto">
                        <div className="space-y-4">
                            <div className="flex justify-between items-center p-4 border dark:border-gray-700 rounded-lg">
                                <div>
                                    <h3 className="font-semibold text-gray-800 dark:text-white">Registration Fee</h3>
                                    <p className="text-gray-600 dark:text-gray-300">One-time payment</p>
                                </div>
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">₹500</span>
                            </div>
                            <div className="flex justify-between items-center p-4 border dark:border-gray-700 rounded-lg">
                                <div>
                                    <h3 className="font-semibold text-gray-800 dark:text-white">Commission Rate</h3>
                                    <p className="text-gray-600 dark:text-gray-300">Per sale</p>
                                </div>
                                <span className="text-2xl font-bold text-gray-900 dark:text-white">5%</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* FAQ Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
                        Frequently Asked Questions
                    </h2>
                    <div className="max-w-3xl mx-auto space-y-6">
                        <div className="border-b dark:border-gray-700 pb-4">
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                                What documents do I need to register?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                You&apos;ll need a GST certificate, PAN card, bank account details, and business proof to start selling.
                            </p>
                        </div>
                        <div className="border-b dark:border-gray-700 pb-4">
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                                How long does it take to get approved?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Once you submit all required documents, approval typically takes 24-48 hours.
                            </p>
                        </div>
                        <div className="border-b dark:border-gray-700 pb-4">
                            <h3 className="font-semibold text-gray-800 dark:text-white mb-2">
                                When do I get paid?
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Payments are processed every 7 days for delivered orders, directly to your registered bank account.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SellOnShop; 