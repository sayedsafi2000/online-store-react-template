const Cookies = () => {
    const cookieTypes = [
        {
            title: "Essential Cookies",
            description: "These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.",
            examples: [
                "Session management",
                "Shopping cart functionality",
                "Security features",
                "Load balancing"
            ]
        },
        {
            title: "Performance Cookies",
            description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site. They help us to know which pages are the most and least popular and see how visitors move around the site.",
            examples: [
                "Page load times",
                "Site traffic analytics",
                "Error reporting",
                "User behavior tracking"
            ]
        },
        {
            title: "Functional Cookies",
            description: "These cookies enable the website to provide enhanced functionality and personalization. They may be set by us or by third party providers whose services we have added to our pages.",
            examples: [
                "Language preferences",
                "Location services",
                "Live chat services",
                "Social media integration"
            ]
        },
        {
            title: "Targeting Cookies",
            description: "These cookies may be set through our site by our advertising partners. They may be used by those companies to build a profile of your interests and show you relevant adverts on other sites.",
            examples: [
                "Advertising preferences",
                "Behavioral tracking",
                "Marketing analytics",
                "Third-party integrations"
            ]
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Cookie Policy</h1>

                {/* Introduction */}
                <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Our Cookie Policy</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        This Cookie Policy explains how Online Shop ("we", "us", and "our") uses cookies and similar technologies to recognize you when you visit our website. It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                        By continuing to use our website, you are agreeing to our use of cookies as described in this Cookie Policy.
                    </p>
                </div>

                {/* Cookie Types */}
                <div className="space-y-8">
                    {cookieTypes.map((type, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm p-8">
                            <h2 className="text-2xl font-semibold text-gray-800 mb-4">{type.title}</h2>
                            <p className="text-gray-600 leading-relaxed mb-6">
                                {type.description}
                            </p>
                            <div>
                                <h3 className="text-lg font-medium text-gray-800 mb-3">Examples include:</h3>
                                <ul className="list-disc list-inside space-y-2 text-gray-600">
                                    {type.examples.map((example, i) => (
                                        <li key={i}>{example}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Managing Cookies */}
                <div className="bg-white rounded-lg shadow-sm p-8 mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Managing Your Cookie Preferences</h2>
                    <p className="text-gray-600 leading-relaxed mb-6">
                        You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.
                    </p>
                    <div className="space-y-4">
                        <h3 className="text-lg font-medium text-gray-800">How to manage cookies in major browsers:</h3>
                        <ul className="list-disc list-inside space-y-2 text-gray-600">
                            <li>Chrome: Settings → Privacy and security → Cookies and other site data</li>
                            <li>Firefox: Options → Privacy & Security → Enhanced Tracking Protection</li>
                            <li>Safari: Preferences → Privacy → Cookies and website data</li>
                            <li>Edge: Settings → Privacy, search, and services → Cookies</li>
                        </ul>
                    </div>
                </div>

                {/* Updates to Policy */}
                <div className="bg-blue-50 rounded-lg p-8 mt-8">
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">Updates to This Policy</h2>
                    <p className="text-gray-600 leading-relaxed">
                        We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to stay informed about our use of cookies and related technologies.
                    </p>
                    <p className="text-gray-600 mt-4">
                        Last updated: {new Date().toLocaleDateString()}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cookies;