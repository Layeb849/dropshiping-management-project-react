import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { toast } from '@/components/ui/use-toast';
import { motion } from 'framer-motion';
import { Gift, Truck, Zap } from 'lucide-react';

const promoData = [
  {
    discount: "২০% ছাড়!",
    cta: "এখানে কিনুন!",
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    bgColor: "bg-black",
    textColor: "text-white",
    buttonColor: "bg-yellow-400 text-black",
  },
  {
    discount: "ফ্রি ডেলিভারি",
    cta: "অর্ডার করুন",
    icon: <Truck className="h-8 w-8 text-blue-400" />,
    bgColor: "bg-beige-100",
    textColor: "text-black",
    buttonColor: "bg-black text-white",
  },
  {
    discount: "বিশেষ ডিল",
    cta: "অফার দেখুন",
    icon: <Gift className="h-8 w-8 text-amber-500" />,
    bgColor: "bg-gold-100",
    textColor: "text-black",
    buttonColor: "bg-black text-white",
  },
  {
    discount: "নতুন কালেকশন",
    cta: "এখনই দেখুন",
    icon: <Zap className="h-8 w-8 text-yellow-400" />,
    bgColor: "bg-black",
    textColor: "text-white",
    buttonColor: "bg-yellow-400 text-black",
  },
  {
    discount: "সীমিত অফার",
    cta: "দ্রুত কিনুন",
    icon: <Truck className="h-8 w-8 text-blue-400" />,
    bgColor: "bg-beige-100",
    textColor: "text-black",
    buttonColor: "bg-black text-white",
  },
];

const PromoCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  const showToast = () => {
    toast({
      title: "🚧 এই ফিচারটি এখনও চালু হয়নি—তবে চিন্তা করবেন না! আপনি পরবর্তী প্রম্পটে এটি যোগ করার জন্য অনুরোধ করতে পারেন! 🚀"
    });
  };

  return (
    <section className="py-8 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className="-ml-4">
            {promoData.map((promo, index) => (
              <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className={`overflow-hidden rounded-lg shadow-sm ${promo.bgColor} ${promo.textColor}`}>
                    <CardContent className="flex flex-col items-center justify-center p-6 space-y-4">
                      <div className="flex items-center space-x-4">
                        {promo.icon}
                        <span className="text-2xl font-bold">{promo.discount}</span>
                      </div>
                      <motion.button
                        onClick={showToast}
                        className={`px-6 py-2 rounded-full font-semibold transition-transform transform hover:scale-105 ${promo.buttonColor}`}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        {promo.cta}
                      </motion.button>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default PromoCarousel;