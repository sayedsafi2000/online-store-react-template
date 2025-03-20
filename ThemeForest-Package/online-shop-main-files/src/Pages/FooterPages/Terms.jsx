const Terms = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-16">
            <div className="max-w-4xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms & Conditions</h1>
                
                <div className="bg-white rounded-lg shadow-sm p-8 space-y-8">
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Introduction</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Welcome to Online Shop. By accessing and using this website, you accept and agree to be bound by the terms and conditions laid out here.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Use License</h2>
                        <ul className="list-disc list-inside space-y-3 text-gray-600">
                            <li>Permission is granted to temporarily download one copy of the materials for personal, non-commercial transitory viewing only.</li>
                            <li>This is the grant of a license, not a transfer of title.</li>
                            <li>This license shall automatically terminate if you violate any of these restrictions.</li>
                        </ul>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Disclaimer</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The materials on Online Shop website are provided on an as is basis. Online Shop makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Limitations</h2>
                        <p className="text-gray-600 leading-relaxed">
                            In no event shall Online Shop or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Online Shop website.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Accuracy of Materials</h2>
                        <p className="text-gray-600 leading-relaxed">
                            The materials appearing on Online Shop website could include technical, typographical, or photographic errors. Online Shop does not warrant that any of the materials on its website are accurate, complete, or current.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Links</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Online Shop has not reviewed all of the sites linked to its website and is not responsible for the contents of any such linked site. The inclusion of any link does not imply endorsement by Online Shop of the site.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Modifications</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Online Shop may revise these terms of service for its website at any time without notice. By using this website you are agreeing to be bound by the then current version of these terms of service.
                        </p>
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

export default Terms; 