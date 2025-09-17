import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const OurStoryPage = () => {
  return (
    <>
      <Helmet>
        <title>আমাদের গল্প - LetsDropship</title>
        <meta name="description" content="LetsDropship এর পেছনের গল্প এবং আমাদের যাত্রার কথা জানুন।" />
      </Helmet>
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">আমাদের গল্প</h1>
            <p className="mt-4 text-lg text-gray-600">কিভাবে একটি সাধারণ ধারণা একটি সফল উদ্যোগে পরিণত হলো</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                ২০২২ সালে কয়েকজন স্বপ্নবাজ উদ্যোক্তার হাত ধরে LetsDropship-এর যাত্রা শুরু হয়। আমাদের লক্ষ্য ছিল বাংলাদেশের ই-কমার্স জগতে একটি বিপ্লব আনা, যেখানে যে কেউ কোনো ইনভেন্টরি ছাড়াই নিজের ব্যবসা শুরু করতে পারে।
              </p>
              <p>
                আমরা দেখেছি, অনেক প্রতিভাবান উদ্যোক্তা শুধুমাত্র প্রাথমিক পুঁজির অভাবে নিজের ব্যবসা শুরু করতে পারছেন না। এই সমস্যার সমাধান হিসেবে আমরা ড্রপশিপিং মডেলটিকে বেছে নিই। আমাদের প্ল্যাটফর্ম সরবরাহকারী এবং বিক্রেতাদের মধ্যে একটি সেতুবন্ধন তৈরি করে, যা ব্যবসার প্রক্রিয়াকে সহজ ও ঝুঁকিহীন করে তোলে।
              </p>
              <img  alt="একদল উদ্যোক্তা একটি প্রকল্পে কাজ করছে" class="rounded-lg my-8 shadow-md" src="https://images.unsplash.com/photo-1583680756130-4a21be5cac2f" />
              <p>
                গত কয়েক বছরে, আমরা হাজার হাজার বিক্রেতাকে তাদের স্বপ্ন পূরণে সহায়তা করেছি। আমাদের প্রযুক্তিগত উদ্ভাবন এবং গ্রাহক-কেন্দ্রিক পরিষেবা দিয়ে আমরা বাংলাদেশের অন্যতম বিশ্বস্ত ড্রপশিপিং প্ল্যাটফর্ম হিসেবে নিজেদের প্রতিষ্ঠিত করেছি। আমাদের যাত্রা এখনও চলছে, এবং আমরা বাংলাদেশের ডিজিটাল অর্থনীতিতে আরও বড় অবদান রাখতে প্রতিশ্রুতিবদ্ধ।
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default OurStoryPage;