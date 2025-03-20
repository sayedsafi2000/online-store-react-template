import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

const Footer = () => {
    const footerLinks = {
        company: [
            { name: "About Us", path: "/about" },
            { name: "Careers", path: "/career" },
            { name: "Sell on Shop", path: "/sell-on-shop" },
            { name: "Press", path: "/press" }
        ],
        help: [
            { name: "Help Center", path: "/help" },
            { name: "Shipping", path: "/shipping" },
            { name: "Returns", path: "/returns" },
            { name: "Contact Us", path: "/contact" },
            { name: "FAQ", path: "/faq" }
        ],
        legal: [
            { name: "Terms & Conditions", path: "/terms" },
            { name: "Privacy Policy", path: "/privacy" },
            { name: "Cookie Policy", path: "/cookies" }
        ],
        social: [
            { name: "Facebook", icon: <FaFacebook />, url: "https://facebook.com" },
            { name: "Twitter", icon: <FaTwitter />, url: "https://twitter.com" },
            { name: "Instagram", icon: <FaInstagram />, url: "https://instagram.com" },
            { name: "LinkedIn", icon: <FaLinkedin />, url: "https://linkedin.com" },
            { name: "YouTube", icon: <FaYoutube />, url: "https://youtube.com" }
        ]
    };

    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Section */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">About Us</h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                            Your one-stop destination for all your shopping needs. We provide quality products at competitive prices.
                        </p>
                        <div className="flex items-center gap-4">
                            {footerLinks.social.map((social, index) => (
                                <a 
                                    key={index}
                                    href={social.url} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
                        <ul className="space-y-2">
                            {footerLinks.company.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Customer Service */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Customer Service</h3>
                        <ul className="space-y-2">
                            {footerLinks.help.map((link, index) => (
                                <li key={index}>
                                    <Link
                                        to={link.path}
                                        className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                                    >
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">Newsletter</h3>
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            Subscribe to our newsletter for updates and exclusive offers.
                        </p>
                        <form className="space-y-4">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                            <button
                                type="submit"
                                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                            >
                                Subscribe
                            </button>
                        </form>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                        {/* Copyright */}
                        <p className="text-gray-600 dark:text-gray-400 text-center md:text-left">
                            © 2024 Online Shop. All rights reserved.
                        </p>

                        {/* Payment Methods */}
                        <div className="flex items-center justify-center md:justify-end gap-4">
                            <img src="https://res.cloudinary.com/domn2k79e/image/upload/v1710937784/visa_aqoqbh.png" alt="Visa" className="h-8" />
                            <img src="https://res.cloudinary.com/domn2k79e/image/upload/v1710937784/mastercard_yvxq9j.png" alt="Mastercard" className="h-8" />
                            <img src="https://res.cloudinary.com/domn2k79e/image/upload/v1710937784/paypal_aqwzec.png" alt="PayPal" className="h-8" />
                            <img src="https://res.cloudinary.com/domn2k79e/image/upload/v1710937784/amex_kxc9hy.png" alt="American Express" className="h-8" />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;