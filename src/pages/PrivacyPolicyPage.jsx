import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const PrivacyPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>গোপনীয়তা নীতি - LetsDropship</title>
        <meta name="description" content="আমরা আপনার ব্যক্তিগত তথ্য কীভাবে সংগ্রহ, ব্যবহার এবং সুরক্ষিত করি সে সম্পর্কে জানুন।" />
      </Helmet>
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">গোপনীয়তা নীতি</h1>
            <p className="mt-4 text-lg text-gray-600">আপনার তথ্যের সুরক্ষা আমাদের অগ্রাধিকার</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>LetsDropship আপনার ব্যক্তিগত তথ্যের গোপনীয়তা রক্ষা করতে প্রতিশ্রুতিবদ্ধ। এই নীতিটি ব্যাখ্যা করে যে আমরা কীভাবে আপনার তথ্য সংগ্রহ, ব্যবহার এবং সুরক্ষিত রাখি।</p>
              
              <h3>আমরা কী তথ্য সংগ্রহ করি:</h3>
              <ul>
                <li><strong>ব্যক্তিগত তথ্য:</strong> নাম, ইমেইল, ফোন নম্বর এবং ঠিকানা যা আপনি অ্যাকাউন্ট খোলার সময় প্রদান করেন।</li>
                <li><strong>লেনদেনের তথ্য:</strong> আপনার অর্ডার এবং পেমেন্টের বিবরণ।</li>
                <li><strong>প্রযুক্তিগত তথ্য:</strong> আইপি অ্যাড্রেস, ব্রাউজারের ধরন এবং আপনার ব্যবহৃত ডিভাইস সম্পর্কিত তথ্য।</li>
              </ul>

              <h3>কেন আমরা তথ্য সংগ্রহ করি:</h3>
              <ul>
                <li>আপনাকে আমাদের পরিষেবা সরবরাহ করতে এবং আপনার অর্ডার প্রক্রিয়া করতে।</li>
                <li>আমাদের পরিষেবার মান উন্নত করতে এবং আপনার অভিজ্ঞতাকে আরও ব্যক্তিগত করতে।</li>
                <li>আপনাকে নতুন পণ্য এবং অফার সম্পর্কে অবহিত করতে।</li>
                <li>আইনি বাধ্যবাধকতা পূরণ করতে।</li>
              </ul>
              
              <h3>তথ্যের সুরক্ষা:</h3>
              <p>আমরা আপনার তথ্য সুরক্ষিত রাখতে আধুনিক প্রযুক্তি এবং কঠোর নিরাপত্তা ব্যবস্থা ব্যবহার করি। আমরা কোনো অবস্থাতেই আপনার ব্যক্তিগত তথ্য তৃতীয় পক্ষের কাছে বিক্রয় বা ভাড়া দিই না।</p>
              
              <p>আমাদের গোপনীয়তা নীতি সম্পর্কে আপনার কোনো প্রশ্ন থাকলে, অনুগ্রহ করে আমাদের সাথে <a href="/contact" className="text-orange-600 font-semibold hover:underline">যোগাযোগ</a> করুন।</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default PrivacyPolicyPage;