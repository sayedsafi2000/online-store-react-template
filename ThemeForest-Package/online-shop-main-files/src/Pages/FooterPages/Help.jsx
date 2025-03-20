import { useState } from 'react';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Help = () => {
    const [openSection, setOpenSection] = useState(null);

    const faqs = [
        {
            question: "How do I track my order?",
            answer: "You can track your order by logging into your account and visiting the 'Orders' section. Click on the specific order to view its current status and tracking information."
        },
        {
            question: "What payment methods do you accept?",
            answer: "We accept various payment methods including credit/debit cards (Visa, MasterCard, American Express), PayPal, and net banking. All payments are processed securely."
        },
        {
            question: "How long will shipping take?",
            answer: "Shipping times vary depending on your location and chosen delivery method. Standard shipping typically takes 3-5 business days, while express shipping takes 1-2 business days."
        },
        {
            question: "What is your return policy?",
            answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Please visit our Returns page for detailed information."
        },
        {
            question: "How can I change or cancel my order?",
            answer: "You can modify or cancel your order within 1 hour of placing it. After that, please contact our customer support team for assistance."
        }
    ];

    const supportCategories = [
        {
            title: "Orders & Shipping",
            description: "Track orders, shipping information, and delivery updates",
            icon: "📦"
        },
        {
            title: "Returns & Refunds",
            description: "Process returns, refund status, and return policies",
            icon: "💰"
        },
        {
            title: "Account & Security",
            description: "Account settings, password reset, and privacy concerns",
            icon: "🔒"
        },
        {
            title: "Product Support",
            description: "Product information, specifications, and usage guides",
            icon: "📱"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">Help Center</h1>

                {/* Support Categories */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                    {supportCategories.map((category, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="text-3xl mb-4">{category.icon}</div>
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{category.title}</h3>
                            <p className="text-gray-600 dark:text-gray-300">{category.description}</p>
                        </div>
                    ))}
                </div>

                {/* FAQs */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Frequently Asked Questions</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b dark:border-gray-700 last:border-0">
                                <button
                                    onClick={() => setOpenSection(openSection === index ? null : index)}
                                    className="w-full flex items-center justify-between py-4 text-left"
                                >
                                    <span className="text-lg font-medium text-gray-800 dark:text-white">{faq.question}</span>
                                    {openSection === index ? (
                                        <FaChevronUp className="text-gray-500 dark:text-gray-400" />
                                    ) : (
                                        <FaChevronDown className="text-gray-500 dark:text-gray-400" />
                                    )}
                                </button>
                                {openSection === index && (
                                    <div className="pb-4">
                                        <p className="text-gray-600 dark:text-gray-300">{faq.answer}</p>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Contact Support */}
                <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                    <h2 className="text-2xl font-semibold text-gray-800 dark:text-white mb-6">Need More Help?</h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                        Our customer support team is available 24/7 to assist you with any questions or concerns.
                    </p>
                    <div className="space-y-4">
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <span className="font-medium mr-2">Email:</span>
                            <a href="mailto:support@onlineshop.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                                support@onlineshop.com
                            </a>
                        </div>
                        <div className="flex items-center text-gray-600 dark:text-gray-300">
                            <span className="font-medium mr-2">Phone:</span>
                            <a href="tel:+918001234567" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300">
                                +91 (800) 123-4567
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Help; 