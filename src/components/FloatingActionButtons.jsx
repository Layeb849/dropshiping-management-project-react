import React from 'react';
import { MessageCircle } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const FloatingActionButtons = () => {
  const showToast = () => {
    toast({
      title: "🚧 এই ফিচারটি এখনও চালু হয়নি—তবে চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀"
    });
  };

  return (
    <div className="fixed bottom-24 md:bottom-6 right-4 flex flex-col space-y-3 z-40">
      <button 
        onClick={showToast}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
      >
        <MessageCircle className="w-6 h-6" />
      </button>
    </div>
  );
};

export default FloatingActionButtons;