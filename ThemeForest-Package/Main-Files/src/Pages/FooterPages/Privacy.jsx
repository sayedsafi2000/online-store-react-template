const Privacy = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
                
                <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information We Collect</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We collect information that you provide directly to us, including when you create an account, make a purchase, sign up for our newsletter, or contact us for support.
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                            <li>Name and contact information</li>
                            <li>Billing and shipping addresses</li>
                            <li>Payment information</li>
                            <li>Order history</li>
                            <li>Device and browsing information</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">How We Use Your Information</h2>
                        <ul className="list-disc list-inside space-y-3 text-gray-600">
                            <li>Process your orders and payments</li>
                            <li>Communicate with you about your orders</li>
                            <li>Send you marketing communications (with your consent)</li>
                            <li>Improve our services and website</li>
                            <li>Prevent fraud and maintain security</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Information Sharing</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We do not sell or rent your personal information to third parties. We may share your information with:
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                            <li>Service providers who assist our operations</li>
                            <li>Payment processors for secure transactions</li>
                            <li>Delivery partners for order fulfillment</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your Rights</h2>
                        <p className="text-gray-600 leading-relaxed">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside mt-4 space-y-2 text-gray-600">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt-out of marketing communications</li>
                            <li>Data portability</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Security</h2>
                        <p className="text-gray-600 leading-relaxed">
                            We implement appropriate technical and organizational measures to protect your personal information against unauthorized or unlawful processing, accidental loss, destruction or damage.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Contact Us</h2>
                        <p className="text-gray-600 leading-relaxed">
                            If you have any questions about our Privacy Policy, please contact us at:
                        </p>
                        <div className="mt-4 text-gray-600">
                            <p>Email: privacy@onlineshop.com</p>
                            <p>Phone: +91 (800) 123-4567</p>
                            <p>Address: Bengaluru, 560103, Karnataka, India</p>
                        </div>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg">
                        <p className="text-gray-600">
                            Last updated: {new Date().toLocaleDateString()}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Privacy; 