import React from 'react';

const Support = () => {
    const faqs = [
        {
            question: 'How can I track my order?',
            answer: 'You can track your order by visiting the "My Orders" page after logging in.'
        },
        {
            question: 'What is the return policy?',
            answer: 'We offer a 30-day return policy for unopened and unused products.'
        },
        {
            question: 'Do you ship internationally?',
            answer: 'Currently, we only ship within the country, but international shipping will be available soon.'
        },
    ];
    return (
        <div className='mt-16'>
            <div className="min-h-screen px-4 md:px-16 lg:px-32 py-16 bg-[#fefefe]">
                <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">Support</h1>

                <div className="max-w-3xl mx-auto space-y-4">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                            <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                            <p className="text-gray-600 mt-2">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default Support;