const Press = () => {
    const pressReleases = [
        {
            date: "March 15, 2024",
            title: "Online Shop Expands Operations to 100+ Cities",
            description: "Leading e-commerce platform Online Shop announces major expansion across India, now serving over 100 cities with same-day delivery options.",
            category: "Company News"
        },
        {
            date: "February 28, 2024",
            title: "Q4 2023 Financial Results",
            description: "Online Shop reports strong Q4 performance with 45% YoY growth in GMV and 2 million new customers added.",
            category: "Financial News"
        },
        {
            date: "January 10, 2024",
            title: "Launch of Sustainable Packaging Initiative",
            description: "Online Shop commits to 100% sustainable packaging by 2025, starting with major cities in Phase 1.",
            category: "Sustainability"
        }
    ];

    const mediaContacts = {
        press: {
            name: "Sarah Johnson",
            role: "Head of Communications",
            email: "press@onlineshop.com",
            phone: "+91 (800) 123-4567"
        },
        media: {
            name: "David Chen",
            role: "Media Relations Manager",
            email: "media@onlineshop.com",
            phone: "+91 (800) 123-4568"
        }
    };

    const mediaResources = [
        {
            title: "Brand Guidelines",
            description: "Access our brand assets, logos, and usage guidelines",
            link: "#"
        },
        {
            title: "Press Kit",
            description: "Download high-resolution images and company information",
            link: "#"
        },
        {
            title: "Fact Sheet",
            description: "Get key statistics and information about Online Shop",
            link: "#"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Press Center
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Get the latest news, updates, and information about Online Shop.
                    </p>
                </div>

                {/* Latest Press Releases */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                        Latest Press Releases
                    </h2>
                    <div className="space-y-8">
                        {pressReleases.map((release, index) => (
                            <div key={index} className="border-b dark:border-gray-700 last:border-0 pb-8 last:pb-0">
                                <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                                    <span className="text-sm text-gray-500 dark:text-gray-400">
                                        {release.date}
                                    </span>
                                    <span className="text-sm text-blue-600 dark:text-blue-400 font-medium">
                                        {release.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {release.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {release.description}
                                </p>
                                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                                    Read More →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Media Resources */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                        Media Resources
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {mediaResources.map((resource, index) => (
                            <div key={index} className="border dark:border-gray-700 rounded-lg p-6">
                                <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
                                    {resource.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 mb-4">
                                    {resource.description}
                                </p>
                                <a 
                                    href={resource.link}
                                    className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium"
                                >
                                    Download →
                                </a>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Media Contacts */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                        Media Contacts
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="border dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                Press Inquiries
                            </h3>
                            <div className="space-y-2">
                                <p className="text-gray-800 dark:text-white font-medium">
                                    {mediaContacts.press.name}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {mediaContacts.press.role}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Email: {mediaContacts.press.email}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Phone: {mediaContacts.press.phone}
                                </p>
                            </div>
                        </div>
                        <div className="border dark:border-gray-700 rounded-lg p-6">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">
                                Media Relations
                            </h3>
                            <div className="space-y-2">
                                <p className="text-gray-800 dark:text-white font-medium">
                                    {mediaContacts.media.name}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {mediaContacts.media.role}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Email: {mediaContacts.media.email}
                                </p>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Phone: {mediaContacts.media.phone}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Press; 