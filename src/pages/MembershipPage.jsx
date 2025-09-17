import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle, Star, Package, Truck, Zap, Gift, Copy } from 'lucide-react';

const MembershipPlan = ({ plan, onBuyNow }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={`bg-white rounded-xl shadow-lg p-8 border-2 ${plan.recommended ? 'border-orange-500' : 'border-transparent'}`}
    >
        {plan.recommended && (
            <div className="text-center mb-4">
                <span className="bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full">সবচেয়ে জনপ্রিয়</span>
            </div>
        )}
        <h2 className="text-2xl font-bold text-gray-800 text-center">{plan.name}</h2>
        <p className="text-4xl font-extrabold text-gray-900 text-center my-4">৳{plan.price}<span className="text-lg font-normal text-gray-500">/বছর</span></p>
        <ul className="space-y-3 mb-8">
            {plan.benefits.map((benefit, index) => (
                <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">{benefit}</span>
                </li>
            ))}
        </ul>
        <Button onClick={() => onBuyNow(plan)} size="lg" className="w-full">
            এখনি কিনুন
        </Button>
    </motion.div>
);

const MembershipPage = () => {
    const { isAuthenticated, user, becomeMember } = useAuth();
    const navigate = useNavigate();

    const plans = [
        { name: 'বেসিক মেম্বার', price: '৪৯৯', benefits: ['সকল পণ্যের দাম দেখুন', 'সাধারণ গ্রাহক সাপোর্ট', 'মাসিক নিউজলেটার'], recommended: false },
        { name: 'প্রো সেলার', price: '৯৯৯', benefits: ['সকল বেসিক সুবিধা', 'অগ্রাধিকার গ্রাহক সাপোর্ট', 'বিশেষ ডিসকাউন্ট', 'সাপ্তাহিক বিক্রয় রিপোর্ট'], recommended: true },
        { name: 'প্রিমিয়াম পার্টনার', price: '১৯৯৯', benefits: ['সকল প্রো সুবিধা', 'ডেডিকেটেড অ্যাকাউন্ট ম্যানেজার', 'নতুন পণ্যে আর্লি অ্যাক্সেস', 'ফ্রি ডেলিভারি (শর্ত প্রযোজ্য)'], recommended: false },
    ];

    const handleBuyNow = (plan) => {
        if (!isAuthenticated) {
            navigate('/login?redirect=/membership');
        } else {
            becomeMember();
            toast({
                title: `🎉 অভিনন্দন, ${user.name}!`,
                description: `আপনি সফলভাবে "${plan.name}" প্ল্যানটি কিনেছেন।`,
            });
        }
    };

    const copyReferralLink = () => {
        navigator.clipboard.writeText(`https://letsdropship.com/signup?ref=${user.referralCode}`);
        toast({
            title: "✅ লিঙ্ক কপি করা হয়েছে!",
            description: "আপনার বন্ধুদের সাথে রেফারেল লিঙ্ক শেয়ার করুন।",
        });
    };

    return (
        <>
            <Helmet>
                <title>মেম্বারশিপ - LetsDropship</title>
                <meta name="description" content="আমাদের মেম্বার হয়ে বিশেষ সুবিধা উপভোগ করুন এবং সকল পণ্যের দাম দেখুন।" />
            </Helmet>
            <div className="bg-slate-50 py-16">
                <div className="max-w-6xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">আমাদের এক্সক্লুসিভ মেম্বার হোন</h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">বিশেষ সুবিধা, সেরা ডিল এবং আপনার ব্যবসার প্রসারে প্রয়োজনীয় সকল টুলস পেতে আজই আমাদের মেম্বারশিপ গ্রহণ করুন।</p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
                        {plans.map((plan, index) => (
                            <MembershipPlan key={index} plan={plan} onBuyNow={handleBuyNow} />
                        ))}
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-800 mb-4">কেন মেম্বার হবেন?</h2>
                            <p className="text-gray-600 mb-6">আমাদের মেম্বারশিপ শুধু একটি সাবস্ক্রিপশন নয়, এটি আপনার ব্যবসার সাফল্যের চাবিকাঠি। আমরা আপনাকে এমন সব টুলস এবং সুবিধা দিই যা আপনার ব্যবসাকে পরবর্তী স্তরে নিয়ে যেতে সাহায্য করবে।</p>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4"><Star className="w-6 h-6 text-yellow-500 mt-1 shrink-0" /><div><h3 className="font-semibold">সেরা মূল্য</h3><p className="text-gray-600">সদস্যরা পাইকারি মূল্যে পণ্য কেনার সুযোগ পান, যা আপনার লাভের মার্জিন বাড়াতে সাহায্য করে।</p></div></div>
                                <div className="flex items-start gap-4"><Package className="w-6 h-6 text-blue-500 mt-1 shrink-0" /><div><h3 className="font-semibold">এক্সক্লুসিভ পণ্য</h3><p className="text-gray-600">শুধুমাত্র সদস্যদের জন্য সংরক্ষিত ট্রেন্ডিং এবং উচ্চ-চাহিদার পণ্যগুলিতে অ্যাক্সেস পান।</p></div></div>
                                <div className="flex items-start gap-4"><Truck className="w-6 h-6 text-green-500 mt-1 shrink-0" /><div><h3 className="font-semibold">দ্রুত ডেলিভারি</h3><p className="text-gray-600">আপনার অর্ডারগুলি অগ্রাধিকার ভিত্তিতে প্রসেস করা হয়, যা গ্রাহক সন্তুষ্টি বাড়ায়।</p></div></div>
                            </div>
                        </div>
                        <div>
                            <img  alt="একজন ব্যক্তি ল্যাপটপে কাজ করছেন" className="rounded-xl shadow-lg" src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3" />
                        </div>
                    </div>

                    {isAuthenticated && user && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="bg-white rounded-xl shadow-lg p-8 text-center"
                        >
                            <Gift className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                            <h2 className="text-2xl font-bold text-gray-800">আপনার রেফারেল লিঙ্ক শেয়ার করুন</h2>
                            <p className="text-gray-600 mt-2 mb-6">আপনার বন্ধুদের রেফার করে আয় করুন! আপনার লিঙ্ক থেকে কেউ সাইন আপ করলে আপনি পাবেন আকর্ষণীয় বোনাস।</p>
                            <div className="flex justify-center">
                                <div className="relative w-full max-w-md">
                                    <input
                                        type="text"
                                        value={`https://letsdropship.com/signup?ref=${user.referralCode}`}
                                        readOnly
                                        className="w-full bg-slate-100 border border-gray-300 rounded-lg py-3 pl-4 pr-12 text-gray-700"
                                    />
                                    <Button onClick={copyReferralLink} size="icon" className="absolute right-2 top-1/2 -translate-y-1/2">
                                        <Copy className="w-5 h-5" />
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </div>
            </div>
        </>
    );
};

export default MembershipPage;