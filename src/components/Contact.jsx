import React from 'react';

const Contact = () => {
    return (
        <div className='mt-16'>
            <div className="min-h-screen px-4 md:px-16 lg:px-32 py-16 bg-[#f9f9f9]">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Contact Us</h1>

                <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md space-y-6">
                    <p className="text-gray-700">
                        Have questions or need support? Reach out to us! Our friendly team is ready to help.
                    </p>

                    <div className="flex flex-col gap-4">
                        <div>
                            <label className="block text-gray-600 mb-1">Name</label>
                            <input type="text" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]" />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1">Email</label>
                            <input type="email" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]" />
                        </div>
                        <div>
                            <label className="block text-gray-600 mb-1">Message</label>
                            <textarea rows="4" className="w-full border rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-[#1a1a1a]"></textarea>
                        </div>
                    </div>

                    <button className="bg-[#1a1a1a] text-white px-6 py-2 rounded-full hover:bg-gray-800 transition-colors duration-300">
                        Send Message
                    </button>
                </div>
            </div>

        </div>
    );
};

export default Contact;