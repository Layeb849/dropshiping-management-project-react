import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { Briefcase, Users, Code, PenTool } from 'lucide-react';

const CareersPage = () => {
    const showToast = () => {
        toast({
            title: "🚧 এই মুহূর্তে কোনো নতুন পদ খালি নেই।",
            description: "নতুন চাকরির খবর পেতে আমাদের সাথেই থাকুন।",
        });
    };

    const jobOpenings = [
        { title: 'সফটওয়্যার ইঞ্জিনিয়ার', dept: 'টেকনোলজি', icon: <Code className="w-8 h-8 text-orange-500" /> },
        { title: 'মার্কেটিং ম্যানেজার', dept: 'মার্কেটিং', icon: <Briefcase className="w-8 h-8 text-orange-500" /> },
        { title: 'কাস্টমার সাপোর্ট এক্সিকিউটিভ', dept: 'সাপোর্ট', icon: <Users className="w-8 h-8 text-orange-500" /> },
        { title: 'গ্রাফিক ডিজাইনার', dept: 'ডিজাইন', icon: <PenTool className="w-8 h-8 text-orange-500" /> },
    ];

    return (
        <>
            <Helmet>
                <title>ক্যারিয়ার - LetsDropship</title>
                <meta name="description" content="আমাদের দলে যোগ দিন এবং বাংলাদেশের ই-কমার্স ভবিষ্যৎ নির্মাণে অংশ নিন।" />
            </Helmet>
            <div className="bg-slate-50 py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">আমাদের সাথে কাজ করুন</h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">আমরা এমন মেধাবী এবং উদ্যমী ব্যক্তিদের খুঁজছি যারা আমাদের যাত্রায় সঙ্গী হতে চান।</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="bg-white rounded-xl shadow-lg p-8 md:p-12"
                    >
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">সাম্প্রতিক চাকরির সুযোগ</h2>
                        <div className="space-y-4">
                            {jobOpenings.map((job, index) => (
                                <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:shadow-md transition-shadow">
                                    <div className="flex items-center gap-4">
                                        {job.icon}
                                        <div>
                                            <h3 className="font-semibold text-lg text-gray-900">{job.title}</h3>
                                            <p className="text-gray-600">{job.dept} বিভাগ</p>
                                        </div>
                                    </div>
                                    <Button variant="outline" onClick={showToast}>আবেদন করুন</Button>
                                </div>
                            ))}
                        </div>
                         <p className="text-center mt-8 text-gray-600">আপনার পছন্দের পদটি খুঁজে পাচ্ছেন না? আপনার সিভি আমাদের কাছে পাঠিয়ে দিন <a href="mailto:careers@letsdropship.com" className="text-orange-600 font-semibold hover:underline">careers@letsdropship.com</a></p>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default CareersPage;