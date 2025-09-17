import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Newspaper, Download } from 'lucide-react';

const PressPage = () => {
    const pressMentions = [
        {
            outlet: 'ডিজিটাল উদ্যোক্তা ম্যাগাজিন',
            title: 'LetsDropship: বাংলাদেশের নতুন ই-কমার্স বিপ্লব',
            date: 'জুলাই ২৫, ২০২৫',
            link: '#',
        },
        {
            outlet: 'টেক নিউজ বিডি',
            title: 'ড্রপশিপিংকে সহজ করছে LetsDropship',
            date: 'জুলাই ২০, ২০২৫',
            link: '#',
        },
        {
            outlet: 'বিজনেস ইনসাইডার বাংলাদেশ',
            title: 'যেভাবে হাজারো তরুণের কর্মসংস্থান করছে LetsDropship',
            date: 'জুলাই ১৫, ২০২৫',
            link: '#',
        },
    ];

    return (
        <>
            <Helmet>
                <title>প্রেস - LetsDropship</title>
                <meta name="description" content="LetsDropship সম্পর্কে মিডিয়া কী বলছে তা দেখুন এবং আমাদের প্রেস কিট ডাউনলোড করুন।" />
            </Helmet>
            <div className="bg-slate-50 py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">প্রেস এবং মিডিয়া</h1>
                        <p className="mt-4 text-lg text-gray-600">আমাদের সম্পর্কে মিডিয়ার সর্বশেষ খবর এবং কভারেজ।</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="bg-white rounded-xl shadow-lg p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">মিডিয়ায় আমরা</h2>
                            <div className="space-y-6">
                                {pressMentions.map((mention, index) => (
                                    <a key={index} href={mention.link} className="block p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                                        <p className="font-semibold text-gray-900">{mention.title}</p>
                                        <p className="text-sm text-gray-500 mt-1">{mention.outlet} - {mention.date}</p>
                                    </a>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="bg-white rounded-xl shadow-lg p-8"
                        >
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">প্রেস কিট</h2>
                            <p className="text-gray-600 mb-4">আমাদের অফিসিয়াল লোগো, প্রতিষ্ঠাতা দলের ছবি এবং কোম্পানির তথ্য পেতে প্রেস কিট ডাউনলোড করুন।</p>
                            <button className="w-full flex items-center justify-center gap-2 bg-orange-500 text-white font-bold py-3 px-4 rounded-lg hover:bg-orange-600 transition-colors">
                                <Download className="w-5 h-5" />
                                প্রেস কিট ডাউনলোড
                            </button>
                            <div className="mt-8">
                                <h3 className="font-semibold text-lg text-gray-800 mb-2">মিডিয়া যোগাযোগের জন্য:</h3>
                                <p className="text-gray-600">
                                    <span className="font-semibold">ইমেইল:</span> <a href="mailto:press@letsdropship.com" className="text-orange-600 hover:underline">press@letsdropship.com</a>
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PressPage;