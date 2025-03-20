import { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const contactInfo = [
        {
            title: "Customer Support",
            email: "support@onlineshop.com",
            phone: "+91 (800) 123-4567",
            hours: "24/7 Support"
        },
        {
            title: "Business Inquiries",
            email: "business@onlineshop.com",
            phone: "+91 (800) 123-4568",
            hours: "Mon-Fri, 9:00 AM - 6:00 PM IST"
        },
        {
            title: "Media Relations",
            email: "media@onlineshop.com",
            phone: "+91 (800) 123-4569",
            hours: "Mon-Fri, 9:00 AM - 6:00 PM IST"
        }
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: ''
        });
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Contact Us
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        We&apos;re here to help! Send us a message and we&apos;ll get back to you as soon as possible.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Contact Information */}
                    <div className="lg:col-span-1 space-y-8">
                        {contactInfo.map((info, index) => (
                            <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-6">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                    {info.title}
                                </h3>
                                <div className="space-y-2">
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Email: {info.email}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Phone: {info.phone}
                                    </p>
                                    <p className="text-gray-600 dark:text-gray-300">
                                        Hours: {info.hours}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <div className="lg:col-span-2">
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                                Send us a Message
                            </h2>
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label 
                                            htmlFor="name"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        >
                                            Your Name
                                        </label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                            placeholder="John Doe"
                                        />
                                    </div>
                                    <div>
                                        <label 
                                            htmlFor="email"
                                            className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                        >
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <label 
                                        htmlFor="subject"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Subject
                                    </label>
                                    <input
                                        type="text"
                                        id="subject"
                                        name="subject"
                                        required
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="How can we help you?"
                                    />
                                </div>
                                <div>
                                    <label 
                                        htmlFor="message"
                                        className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                                    >
                                        Message
                                    </label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        required
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows="6"
                                        className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                                        placeholder="Type your message here..."
                                    ></textarea>
                                </div>
                                <button
                                    type="submit"
                                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>

                {/* Map or Additional Information */}
                <div className="mt-12 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
                        Visit Our Office
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                                Headquarters
                            </h3>
                            <div className="space-y-2 text-gray-600 dark:text-gray-300">
                                <p>123 Commerce Street</p>
                                <p>Tech Park, Bengaluru</p>
                                <p>Karnataka, India 560001</p>
                            </div>
                        </div>
                        <div>
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                                Office Hours
                            </h3>
                            <div className="space-y-2 text-gray-600 dark:text-gray-300">
                                <p>Monday - Friday: 9:00 AM - 6:00 PM IST</p>
                                <p>Saturday: 10:00 AM - 4:00 PM IST</p>
                                <p>Sunday: Closed</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact; 