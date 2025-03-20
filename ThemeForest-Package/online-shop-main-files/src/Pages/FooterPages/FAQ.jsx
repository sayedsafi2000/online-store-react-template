import { useState } from 'react';

const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const faqCategories = [
        {
            title: "Shopping & Orders",
            faqs: [
                {
                    question: "How do I place an order?",
                    answer: "You can place an order by browsing our products, adding items to your cart, and proceeding to checkout. You'll need to provide shipping information and choose a payment method to complete your purchase."
                },
                {
                    question: "What payment methods do you accept?",
                    answer: "We accept all major credit cards (Visa, MasterCard, American Express), UPI, Net Banking, and popular digital wallets. All payments are processed securely through our payment gateway."
                },
                {
                    question: "How can I track my order?",
                    answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on our website or through the courier's tracking system."
                }
            ]
        },
        {
            title: "Returns & Refunds",
            faqs: [
                {
                    question: "What is your return policy?",
                    answer: "We offer a 30-day return policy for most items. Products must be unused and in their original packaging. Some items, like personal care products, cannot be returned for hygiene reasons."
                },
                {
                    question: "How do I initiate a return?",
                    answer: "To initiate a return, log into your account, go to your orders, select the item you want to return, and follow the return instructions. You'll receive a return shipping label via email."
                },
                {
                    question: "When will I receive my refund?",
                    answer: "Once we receive and inspect your return, we'll process your refund within 3-5 business days. The time it takes for the refund to appear in your account depends on your payment method and bank."
                }
            ]
        },
        {
            title: "Account & Security",
            faqs: [
                {
                    question: "How do I create an account?",
                    answer: "Click the 'Sign Up' button in the top right corner of our website. Enter your email address, create a password, and provide some basic information to complete your registration."
                },
                {
                    question: "How can I reset my password?",
                    answer: "Click 'Forgot Password' on the login page, enter your email address, and we'll send you instructions to reset your password. For security reasons, password reset links expire after 24 hours."
                },
                {
                    question: "Is my personal information secure?",
                    answer: "Yes, we take security seriously. We use industry-standard encryption to protect your personal and payment information. We never store sensitive payment details on our servers."
                }
            ]
        },
        {
            title: "Shipping & Delivery",
            faqs: [
                {
                    question: "What are your shipping options?",
                    answer: "We offer standard shipping (3-5 business days), express shipping (1-2 business days), and same-day delivery in select cities. Shipping costs vary based on your location and chosen delivery method."
                },
                {
                    question: "Do you ship internationally?",
                    answer: "Yes, we ship to most countries worldwide. International shipping times and costs vary by destination. You can see exact shipping costs during checkout."
                },
                {
                    question: "How do you handle shipping delays?",
                    answer: "If there's a delay with your order, we'll notify you via email with updated delivery estimates. You can also check your order status in your account dashboard."
                }
            ]
        }
    ];

    const toggleAccordion = (categoryIndex, faqIndex) => {
        const newIndex = openIndex === `${categoryIndex}-${faqIndex}` ? null : `${categoryIndex}-${faqIndex}`;
        setOpenIndex(newIndex);
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-4xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        Find answers to common questions about our services
                    </p>
                </div>

                {/* FAQ Categories */}
                <div className="space-y-8">
                    {faqCategories.map((category, categoryIndex) => (
                        <div key={categoryIndex} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm overflow-hidden">
                            <h2 className="text-xl font-semibold text-gray-900 dark:text-white p-6 border-b border-gray-200 dark:border-gray-700">
                                {category.title}
                            </h2>
                            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                                {category.faqs.map((faq, faqIndex) => (
                                    <div key={faqIndex} className="p-6">
                                        <button
                                            onClick={() => toggleAccordion(categoryIndex, faqIndex)}
                                            className="flex justify-between items-center w-full text-left"
                                        >
                                            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                                                {faq.question}
                                            </h3>
                                            <span className="ml-6 flex-shrink-0">
                                                <svg
                                                    className={`w-6 h-6 transform transition-transform duration-200 ${
                                                        openIndex === `${categoryIndex}-${faqIndex}` ? 'rotate-180' : ''
                                                    } text-gray-500 dark:text-gray-400`}
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                >
                                                    <path
                                                        strokeLinecap="round"
                                                        strokeLinejoin="round"
                                                        strokeWidth={2}
                                                        d="M19 9l-7 7-7-7"
                                                    />
                                                </svg>
                                            </span>
                                        </button>
                                        <div
                                            className={`mt-4 transition-all duration-200 ${
                                                openIndex === `${categoryIndex}-${faqIndex}`
                                                    ? 'opacity-100 max-h-96'
                                                    : 'opacity-0 max-h-0 overflow-hidden'
                                            }`}
                                        >
                                            <p className="text-gray-600 dark:text-gray-300">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact Support Section */}
                <div className="mt-16 text-center">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                        Still have questions?
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-8">
                        Can&apos;t find the answer you&apos;re looking for? Please chat to our friendly team.
                    </p>
                    <a
                        href="/contact"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors"
                    >
                        Contact Support
                    </a>
                </div>
            </div>
        </div>
    );
};

export default FAQ;