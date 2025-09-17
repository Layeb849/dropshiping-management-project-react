import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { PackageSearch } from 'lucide-react';

const TrackOrderPage = () => {
    const handleTrackOrder = (e) => {
        e.preventDefault();
        toast({
            title: "🔍 অর্ডার ট্র্যাক করা হচ্ছে...",
            description: "এই ফিচারটি শীঘ্রই আসছে। আপনার অর্ডার আইডি দিয়ে স্ট্যাটাস দেখতে পারবেন।",
        });
    };

    return (
        <>
            <Helmet>
                <title>অর্ডার ট্র্যাক করুন - LetsDropship</title>
                <meta name="description" content="আপনার অর্ডারের বর্তমান অবস্থা জানতে অর্ডার আইডি দিয়ে ট্র্যাক করুন।" />
            </Helmet>
            <div className="bg-slate-50 min-h-[calc(100vh-200px)] flex items-center justify-center py-12">
                <div className="max-w-md w-full mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="bg-white rounded-xl shadow-lg p-8 text-center"
                    >
                        <PackageSearch className="w-16 h-16 text-orange-500 mx-auto mb-4" />
                        <h1 className="text-3xl font-bold text-gray-800">আপনার অর্ডার ট্র্যাক করুন</h1>
                        <p className="mt-2 text-gray-600 mb-6">আপনার অর্ডার আইডি এবং ইমেইল দিয়ে সর্বশেষ আপডেট জানুন।</p>
                        
                        <form onSubmit={handleTrackOrder} className="space-y-4">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="অর্ডার আইডি লিখুন" 
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="আপনার বিলিং ইমেইল" 
                                    required
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500"
                                />
                            </div>
                            <Button type="submit" size="lg" className="w-full">
                                ট্র্যাক করুন
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default TrackOrderPage;