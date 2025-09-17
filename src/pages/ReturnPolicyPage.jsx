import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';

const ReturnPolicyPage = () => {
  return (
    <>
      <Helmet>
        <title>ফেরত নীতি - LetsDropship</title>
        <meta name="description" content="আমাদের পণ্য ফেরত এবং রিফান্ড প্রক্রিয়া সম্পর্কে বিস্তারিত জানুন।" />
      </Helmet>
      <div className="bg-slate-50 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">ফেরত নীতি</h1>
            <p className="mt-4 text-lg text-gray-600">আপনার সন্তুষ্টি আমাদের কাছে গুরুত্বপূর্ণ</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>আমরা গ্রাহকদের সেরা অভিজ্ঞতা দিতে প্রতিশ্রুতিবদ্ধ। যদি কোনো কারণে আপনি আপনার কেনা পণ্যে সন্তুষ্ট না হন, তবে আমাদের সহজ ফেরত নীতি অনুসরণ করে পণ্যটি ফেরত দিতে পারেন।</p>

              <h3>ফেরত দেওয়ার শর্তাবলী:</h3>
              <ul>
                <li>পণ্যটি অবশ্যই ডেলিভারির ৭ দিনের মধ্যে ফেরত দেওয়ার জন্য আবেদন করতে হবে।</li>
                <li>পণ্যটি অবশ্যই অব্যবহৃত এবং অক্ষত অবস্থায় থাকতে হবে।</li>
                <li>পণ্যের আসল প্যাকেজিং, ট্যাগ এবং ইনভয়েস অবশ্যই সাথে দিতে হবে।</li>
                <li>কিছু নির্দিষ্ট পণ্য, যেমন কাস্টমাইজড আইটেম এবং দ্রুত পচনশীল পণ্য, ফেরতযোগ্য নয়।</li>
              </ul>

              <h3>ফেরত প্রক্রিয়া:</h3>
              <ol>
                <li>আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করে আপনার ফেরত অনুরোধ রেজিস্টার করুন।</li>
                <li>আমাদের প্রতিনিধি আপনার অনুরোধ যাচাই করে ফেরত প্রক্রিয়া শুরু করবেন।</li>
                <li>পণ্যটি আমাদের ওয়্যারহাউজে পৌঁছানোর পর মান যাচাই করা হবে।</li>
                <li>যাচাই প্রক্রিয়া সফল হলে, ৭-১০ কার্যদিবসের মধ্যে আপনার টাকা রিফান্ড করা হবে।</li>
              </ol>
              
              <p>যেকোনো প্রশ্নের জন্য, আমাদের <a href="/contact" className="text-orange-600 font-semibold hover:underline">গ্রাহক সেবা</a> বিভাগে যোগাযোগ করুন।</p>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default ReturnPolicyPage;