import React from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, Facebook, Send } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const ReferralSection = () => {
  const showToast = () => {
    toast({
      title: "🚧 এই ফিচারটি এখনও চালু হয়নি—তবে চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀"
    });
  };

  return (
    <section className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 mx-4 rounded-lg mb-8">
      <div className="text-center px-6">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">রেফার করুন এবং আয় করুন</h2>
        <p className="text-lg mb-6 opacity-90">
          বন্ধুদের আমন্ত্রণ জানান এবং তাদের প্রতিটি কেনাকাটায় ক্যাশব্যাক বা পয়েন্ট অর্জন করুন
        </p>
        <Button 
          size="lg" 
          onClick={showToast}
        >
          রেফারেল লিঙ্ক তৈরি করুন
        </Button>
        <div className="flex justify-center space-x-4 mt-6">
          <button onClick={showToast} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <MessageCircle className="w-5 h-5" />
          </button>
          <button onClick={showToast} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <Facebook className="w-5 h-5" />
          </button>
          <button onClick={showToast} className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors">
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ReferralSection;