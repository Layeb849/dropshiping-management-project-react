import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { LifeBuoy, Phone, MessageSquare, BookOpen } from 'lucide-react';

const SupportPage = () => {
    return (
        <>
            <Helmet>
                <title>সাপোর্ট - LetsDropship</title>
                <meta name="description" content="যেকোনো প্রয়োজনে আমাদের সাপোর্ট টিমের সাহায্য নিন। আমরা আপনাকে সহায়তা করতে প্রস্তুত।" />
            </Helmet>
            <div className="bg-slate-50 py-16">
                <div className="max-w-5xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">সাপোর্ট সেন্টার</h1>
                        <p className="mt-4 text-lg text-gray-600">আপনার যেকোনো প্রশ্ন বা সমস্যার জন্য আমরা আছি আপনার পাশে।</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="grid md:grid-cols-2 gap-8"
                    >
                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">সাধারণ প্রশ্ন (FAQ)</h2>
                            <div className="space-y-4">
                                <details className="group">
                                    <summary className="flex justify-between items-center font-semibold cursor-pointer p-3 rounded-lg bg-slate-100 group-hover:bg-slate-200">
                                        <span>আমি কিভাবে অর্ডার করব?</span>
                                        <span className="transform transition-transform duration-200 group-open:rotate-180">&#9660;</span>
                                    </summary>
                                    <p className="mt-2 p-3 text-gray-600">আপনি আমাদের ওয়েবসাইটে পণ্য নির্বাচন করে "কার্টে যোগ করুন" বাটনে ক্লিক করে সহজেই অর্ডার করতে পারেন।</p>
                                </details>
                                <details className="group">
                                    <summary className="flex justify-between items-center font-semibold cursor-pointer p-3 rounded-lg bg-slate-100 group-hover:bg-slate-200">
                                        <span>পণ্য ফেরত দেওয়ার নিয়ম কী?</span>
                                        <span className="transform transition-transform duration-200 group-open:rotate-180">&#9660;</span>
                                    </summary>
                                    <p className="mt-2 p-3 text-gray-600">আপনি পণ্য হাতে পাওয়ার ৭ দিনের মধ্যে আমাদের <Link to="/return-policy" className="text-orange-600 hover:underline">ফেরত নীতি</Link> অনুযায়ী ফেরত দিতে পারবেন।</p>
                                </details>
                                <details className="group">
                                    <summary className="flex justify-between items-center font-semibold cursor-pointer p-3 rounded-lg bg-slate-100 group-hover:bg-slate-200">
                                        <span>ক্যাশ অন ডেলিভারি কি সম্ভব?</span>
                                        <span className="transform transition-transform duration-200 group-open:rotate-180">&#9660;</span>
                                    </summary>
                                    <p className="mt-2 p-3 text-gray-600">হ্যাঁ, আমরা সারা বাংলাদেশে ক্যাশ অন ডেলিভারি সুবিধা প্রদান করি।</p>
                                </details>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-lg p-8">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">সরাসরি যোগাযোগ</h2>
                             <div className="space-y-4">
                                <Link to="/contact" className="flex items-center gap-4 p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                                    <Phone className="w-8 h-8 text-orange-500" />
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900">ফোন করুন</h3>
                                        <p className="text-gray-600">জরুরী প্রয়োজনে সরাসরি কথা বলুন।</p>
                                    </div>
                                </Link>
                                <Link to="/contact" className="flex items-center gap-4 p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                                    <MessageSquare className="w-8 h-8 text-orange-500" />
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900">লাইভ চ্যাট</h3>
                                        <p className="text-gray-600">আমাদের সাপোর্ট এজেন্টের সাথে চ্যাট করুন।</p>
                                    </div>
                                </Link>
                                 <Link to="/contact" className="flex items-center gap-4 p-4 border rounded-lg hover:bg-slate-50 transition-colors">
                                    <BookOpen className="w-8 h-8 text-orange-500" />
                                    <div>
                                        <h3 className="font-semibold text-lg text-gray-900">গাইডলাইন পড়ুন</h3>
                                        <p className="text-gray-600">আমাদের রিসোর্স সেন্টার থেকে বিস্তারিত জানুন।</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default SupportPage;