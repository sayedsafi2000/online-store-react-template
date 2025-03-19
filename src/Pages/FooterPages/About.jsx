const About = () => {
    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">About Us</h1>
                
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 space-y-6">
                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Story</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Welcome to Online Shop, your number one source for all things. We`re dedicated to providing you the very best of products, with an emphasis on quality, customer service, and uniqueness.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Our Mission</h2>
                        <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            Our mission is to revolutionize the way people shop online by providing a seamless, secure, and enjoyable shopping experience. We strive to offer the widest selection of products at competitive prices while ensuring the highest standards of customer service.
                        </p>
                    </div>

                    <div className="mb-8">
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Why Choose Us?</h2>
                        <ul className="list-disc list-inside space-y-3 text-gray-600 dark:text-gray-300">
                            <li>Wide selection of quality products</li>
                            <li>Competitive prices and regular deals</li>
                            <li>Fast and reliable shipping</li>
                            <li>Excellent customer service</li>
                            <li>Secure payment options</li>
                            <li>Easy returns and refunds</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-4">Contact Information</h2>
                        <div className="text-gray-600 dark:text-gray-300">
                            <p>Bengaluru, 560103</p>
                            <p>Karnataka, India</p>
                            <p>Email: support@onlineshop.com</p>
                            <p>Phone: +91 (800) 123-4567</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 