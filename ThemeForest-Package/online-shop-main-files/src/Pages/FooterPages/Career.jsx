import { useState } from 'react';

const Career = () => {
    const [selectedDepartment, setSelectedDepartment] = useState('all');

    const departments = ['Engineering', 'Design', 'Marketing', 'Sales', 'Customer Support'];
    
    const jobs = [
        {
            id: 1,
            title: 'Senior Frontend Developer',
            department: 'Engineering',
            location: 'Bengaluru, India',
            type: 'Full-time',
            experience: '5+ years'
        },
        {
            id: 2,
            title: 'UI/UX Designer',
            department: 'Design',
            location: 'Remote',
            type: 'Full-time',
            experience: '3+ years'
        },
        {
            id: 3,
            title: 'Digital Marketing Manager',
            department: 'Marketing',
            location: 'Mumbai, India',
            type: 'Full-time',
            experience: '4+ years'
        },
        {
            id: 4,
            title: 'Sales Executive',
            department: 'Sales',
            location: 'Delhi, India',
            type: 'Full-time',
            experience: '2+ years'
        },
        {
            id: 5,
            title: 'Customer Support Representative',
            department: 'Customer Support',
            location: 'Remote',
            type: 'Full-time',
            experience: '1+ years'
        }
    ];

    const filteredJobs = selectedDepartment === 'all' 
        ? jobs 
        : jobs.filter(job => job.department === selectedDepartment);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16">
            <div className="max-w-6xl mx-auto px-4">
                {/* Hero Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Join Our Team
                    </h1>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        Be part of our mission to revolutionize online shopping. We`re looking for talented individuals who are passionate about creating exceptional experiences.
                    </p>
                </div>

                {/* Why Join Us Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8 mb-12">
                    <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
                        Why Join Us?
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                Growth & Learning
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Continuous learning opportunities and career development programs to help you grow.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                Work-Life Balance
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Flexible work hours and remote work options to maintain a healthy work-life balance.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
                                Competitive Benefits
                            </h3>
                            <p className="text-gray-600 dark:text-gray-300">
                                Comprehensive health insurance, stock options, and other great perks.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Open Positions Section */}
                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm p-8">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 md:mb-0">
                            Open Positions
                        </h2>
                        <select
                            value={selectedDepartment}
                            onChange={(e) => setSelectedDepartment(e.target.value)}
                            className="w-full md:w-auto px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                        >
                            <option value="all">All Departments</option>
                            {departments.map(dept => (
                                <option key={dept} value={dept}>{dept}</option>
                            ))}
                        </select>
                    </div>

                    <div className="space-y-6">
                        {filteredJobs.map(job => (
                            <div 
                                key={job.id}
                                className="border dark:border-gray-700 rounded-lg p-6 hover:shadow-md transition-shadow"
                            >
                                <div className="flex flex-col md:flex-row justify-between mb-4">
                                    <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 md:mb-0">
                                        {job.title}
                                    </h3>
                                    <span className="text-blue-600 dark:text-blue-400 font-medium">
                                        {job.department}
                                    </span>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-gray-600 dark:text-gray-300 mb-4">
                                    <div>📍 {job.location}</div>
                                    <div>⏰ {job.type}</div>
                                    <div>💼 {job.experience}</div>
                                </div>
                                <button className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium">
                                    View Details →
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Career; 