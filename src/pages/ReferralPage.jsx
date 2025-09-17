import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { toast } from '@/components/ui/use-toast';
import { CheckCircle, Copy, Gift, Star, ShieldCheck } from 'lucide-react';

const MembershipCard = ({ plan, onBuyNow }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition flex flex-col h-full"
    >
      <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">{plan.name}</h3>
      <p className="text-4xl font-extrabold text-center my-4">
        {plan.price}
        <span className="text-base font-medium text-gray-500">/মাস</span>
      </p>
      <ul className="space-y-3 mb-8 flex-grow">
        {plan.benefits.map((benefit, index) => (
          <li key={index} className="flex items-start">
            <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-1 flex-shrink-0" />
            <span>{benefit}</span>
          </li>
        ))}
      </ul>
      <Button 
        onClick={() => onBuyNow(plan)} 
        size="lg" 
        className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-xl"
      >
        এখনই কিনুন
      </Button>
    </motion.div>
  );
};

const ReferralPage = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const user = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(!!user);
  }, []);

  const handleBuyNow = (plan) => {
    if (!isLoggedIn) {
      navigate('/login?redirect=/membership');
    } else {
      toast({
        title: `🚀 ${plan.name} এর জন্য চেকআউটে এগিয়ে যাওয়া হচ্ছে!`,
        description: "পেমেন্ট ইন্টিগ্রেশন পরবর্তী ধাপ।",
      });
    }
  };
  
  const copyLink = () => {
    navigator.clipboard.writeText("https://letdropship.com/ref/USER123");
    toast({ title: "✅ লিঙ্ক কপি করা হয়েছে!" });
  }

  const membershipPlans = [
    {
      name: "বেসিক মেম্বার",
      price: "৳১৯৯",
      benefits: [
        "প্রতি রেফারেলে ৳১০",
        "রেফারেল ড্যাশবোর্ড অ্যাক্সেস",
        "সীমিত সাপোর্ট",
      ],
    },
    {
      name: "প্রো সেলার",
      price: "৳৩৯৯",
      benefits: [
        "প্রতি রেফারেলে ৳২৫",
        "অগ্রাধিকার শিপিং",
        "প্রোফাইলে প্রো ব্যাজ",
      ],
    },
    {
      name: "প্রিমিয়াম পার্টনার",
      price: "৳৭৯৯",
      benefits: [
        "প্রতি রেফারেলে ৳৫০",
        "প্রতি ১০টি রেফারেলে বিনামূল্যে গিফট বক্স",
        "পার্টনার ড্যাশবোর্ড অ্যাক্সেস",
        "সর্বোচ্চ অগ্রাধিকার সাপোর্ট",
      ],
    },
  ];

  return (
    <>
      <Helmet>
        <title>আমাদের মেম্বারশিপে যোগ দিন – LetsDropship</title>
        <meta name="description" content="আপনার মেম্বারশিপ প্ল্যান বেছে নিন এবং এক্সক্লুসিভ পুরস্কার আনলক করুন।" />
      </Helmet>
      
      <div className="bg-slate-50 min-h-screen py-12">
        <div className="max-w-7xl mx-auto px-4">
          <section className="text-center p-8 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg mb-16">
            <h1 className="text-4xl font-bold">রেফার করুন এবং আয় করুন – ভিআইপি সদস্য হন</h1>
            <p className="mt-2 text-lg">আপনার মেম্বারশিপ প্ল্যান বেছে নিন এবং এক্সক্লুসিভ পুরস্কার আনলক করুন।</p>
          </section>

          <section className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {membershipPlans.map((plan, index) => (
                <MembershipCard key={index} plan={plan} onBuyNow={handleBuyNow} />
              ))}
            </div>
          </section>

          <section className="mb-16 bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">কেন সদস্য হবেন?</h2>
            <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8">
              আমাদের মেম্বারশিপ প্রোগ্রামটি আপনাকে আপনার ড্রপশিপিং ব্যবসা দ্রুত বাড়াতে সাহায্য করার জন্য ডিজাইন করা হয়েছে। উচ্চতর উপার্জন, উন্নত সাপোর্ট এবং এক্সক্লুসিভ সুবিধা পান যা আপনাকে সাফল্যের জন্য প্রস্তুত করে।
            </p>
            <div className="grid md:grid-cols-3 gap-8 text-center">
                <div className="flex flex-col items-center">
                    <Star className="w-10 h-10 text-orange-500 mb-3" />
                    <h3 className="font-semibold text-lg">বড় পুরস্কার</h3>
                    <p className="text-gray-600">আপনার প্রতিটি সফল রেফারেলের জন্য আরও বেশি নগদ উপার্জন করুন।</p>
                </div>
                <div className="flex flex-col items-center">
                    <Gift className="w-10 h-10 text-orange-500 mb-3" />
                    <h3 className="font-semibold text-lg">এক্সক্লুসিভ সুবিধা</h3>
                    <p className="text-gray-600">বিশেষ গিফট বক্স, অগ্রাধিকার শিপিং এবং আরও অনেক কিছু অ্যাক্সেস করুন।</p>
                </div>
                <div className="flex flex-col items-center">
                    <ShieldCheck className="w-10 h-10 text-orange-500 mb-3" />
                    <h3 className="font-semibold text-lg">অগ্রাধিকার সাপোর্ট</h3>
                    <p className="text-gray-600">আমাদের নিবেদিত সাপোর্টের মাধ্যমে আপনার প্রশ্নের উত্তর দ্রুত পান।</p>
                </div>
            </div>
          </section>

          {isLoggedIn && (
            <section className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-3xl font-bold text-gray-800 text-center mb-4">আপনার রেফারেল লিঙ্ক</h2>
              <p className="text-center text-gray-600 max-w-2xl mx-auto mb-6">আজই পুরস্কার উপার্জন শুরু করতে আপনার বন্ধুদের সাথে এই লিঙ্কটি শেয়ার করুন!</p>
              <div className="relative flex items-center max-w-lg mx-auto">
                <input type="text" readOnly value="https://letdropship.com/ref/USER123" className="w-full bg-slate-100 border border-gray-300 rounded-xl p-3 pr-28 text-gray-500"/>
                <Button onClick={copyLink} className="absolute right-2 top-1/2 -translate-y-1/2" size="sm"><Copy className="w-4 h-4 mr-2"/> কপি</Button>
              </div>
            </section>
          )}
        </div>
      </div>
    </>
  );
};

export default ReferralPage;