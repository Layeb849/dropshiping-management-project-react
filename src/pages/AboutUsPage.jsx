import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { Truck, CheckCircle, MessageSquare, Award, ShoppingCart, ListChecks, PackageCheck } from 'lucide-react';

const AboutUsPage = () => {
  const navigate = useNavigate();

  const handleNavigateToMembership = () => {
    navigate('/membership');
  };

  return (
    <>
      <Helmet>
        <title>আমাদের সম্পর্কে - LetsDropship</title>
        <meta name="description" content="ড্রপশিপিং এর মাধ্যমে বাংলাদেশী বিক্রেতা এবং ক্রেতাদের ক্ষমতায়ন। আমাদের লক্ষ্য এবং কার্যপদ্ধতি সম্পর্কে আরও জানুন।" />
      </Helmet>

      <div className="bg-white">
        <section className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold">আমরা কারা</h1>
            <p className="mt-4 text-lg md:text-xl max-w-3xl mx-auto">ড্রপশিপিং এর মাধ্যমে বাংলাদেশী বিক্রেতা এবং ক্রেতাদের ক্ষমতায়ন</p>
          </motion.div>
        </section>

        <section className="py-16 px-4 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">আমাদের লক্ষ্য</h2>
              <p className="text-gray-600 mb-6">বাংলাদেশে একটি নির্বিঘ্ন এবং নির্ভরযোগ্য ড্রপশিপিং ইকোসিস্টেম তৈরি করতে আমরা নিবেদিত। আমাদের প্ল্যাটফর্ম স্থানীয় বিক্রেতাদের বিশাল পণ্যের ক্যাটালগের সাথে সংযুক্ত করে, যা তাদের শূন্য ইনভেন্টরি এবং ঝুঁকি ছাড়াই তাদের অনলাইন ব্যবসা শুরু করতে সক্ষম করে।</p>
              <ul className="space-y-3">
                <li className="flex items-center"><Truck className="w-5 h-5 text-orange-500 mr-3" /> দ্রুত এবং নির্ভরযোগ্য ডেলিভারি</li>
                <li className="flex items-center"><CheckCircle className="w-5 h-5 text-orange-500 mr-3" /> খাঁটি, উচ্চ-মানের পণ্য</li>
                <li className="flex items-center"><MessageSquare className="w-5 h-5 text-orange-500 mr-3" /> নিবেদিত স্থানীয় সহায়তা</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <img  class="rounded-xl shadow-lg w-full max-w-md" alt="একটি আধুনিক অফিসে বিভিন্ন পেশাদারদের একটি দল সহযোগিতা করছে" src="https://images.unsplash.com/photo-1566833546763-672775492199" />
            </motion.div>
          </div>
        </section>

        <section className="bg-slate-50 py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-2">কিভাবে কাজ করে</h2>
            <p className="text-gray-600 mb-12 max-w-2xl mx-auto">আপনার উদ্যোক্তা যাত্রা শুরু করার জন্য একটি সহজ, সুবিন্যস্ত প্রক্রিয়া।</p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-md">
                <ShoppingCart className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">১. পণ্য ব্রাউজ করুন</h3>
                <p className="text-gray-600">আমাদের বিশাল ক্যাটালগ অন্বেষণ করুন এবং আপনার দোকানে বিক্রি করার জন্য পণ্য নির্বাচন করুন।</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <ListChecks className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">২. অর্ডার দিন</h3>
                <p className="text-gray-600">যখন আপনি একটি বিক্রয় পাবেন, তখন আমাদের কাছে পাইকারি মূল্যে অর্ডার দিন।</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-md">
                <PackageCheck className="w-12 h-12 text-orange-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-2">৩. গ্রাহকের কাছে ড্রপশিপ</h3>
                <p className="text-gray-600">আমরা আপনার ব্র্যান্ডিং সহ সরাসরি আপনার গ্রাহকের কাছে পণ্য প্রেরণ করি।</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 max-w-6xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-12">কেন আমাদের বেছে নেবেন?</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="flex flex-col items-center">
                <MessageSquare className="w-10 h-10 text-orange-500 mb-3" />
                <span className="font-semibold tracking-wide text-gray-700">২৪/৭ চ্যাট সাপোর্ট</span>
              </div>
              <div className="flex flex-col items-center">
                <CheckCircle className="w-10 h-10 text-orange-500 mb-3" />
                <span className="font-semibold tracking-wide text-gray-700">যাচাইকৃত বিক্রেতা</span>
              </div>
              <div className="flex flex-col items-center">
                <Truck className="w-10 h-10 text-orange-500 mb-3" />
                <span className="font-semibold tracking-wide text-gray-700">তাত্ক্ষণিক অর্ডার স্ট্যাটাস</span>
              </div>
              <div className="flex flex-col items-center">
                <Award className="w-10 h-10 text-orange-500 mb-3" />
                <span className="font-semibold tracking-wide text-gray-700">রেফারেল বোনাস</span>
              </div>
            </div>
        </section>
        
        <section className="bg-slate-50 py-16">
          <div className="max-w-3xl mx-auto px-4 text-center bg-white p-10 rounded-xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">ড্রপশিপিং শুরু করতে প্রস্তুত?</h2>
            <p className="text-gray-600 mb-8">আমাদের উদ্যোক্তাদের কমিউনিটিতে যোগ দিন এবং আজই আপনার সফল অনলাইন ব্যবসা শুরু করুন।</p>
            <div className="flex justify-center gap-4">
              <Button size="lg" onClick={handleNavigateToMembership}>শুরু করুন</Button>
              <Button size="lg" variant="outline" onClick={handleNavigateToMembership}>সদস্য হন</Button>
            </div>
          </div>
        </section>

      </div>
    </>
  );
};

export default AboutUsPage;