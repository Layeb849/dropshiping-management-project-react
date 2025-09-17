
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    title: "ঘরে বসেই কেনাকাটা",
    description: "আপনার পছন্দের সবকিছুতে বিশাল ছাড়! প্রতিটি কেনাকাটায় আকর্ষণীয় পুরস্কার জিতে নিন।",
    image: "A vibrant and happy family shopping online together on a large tablet at home.",
    imgSrc: "https://images.unsplash.com/photo-1528911763037-b9458588915a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "নতুন ফ্যাশন কালেকশন",
    description: "সর্বশেষ ট্রেন্ড এবং স্টাইল দেখুন। আজই আপনার ফ্যাশন আপডেট করুন!",
    image: "A diverse group of models showcasing the latest fashion trends on a runway.",
    imgSrc: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "এক্সক্লুসিভ টেক ডিল",
    description: "অবিশ্বাস্য মূল্যে সর্বশেষ গ্যাজেটগুলি কিনুন। সীমিত সময়ের অফার!",
    image: "A sleek and modern flat lay of the latest tech gadgets including a smartphone, smartwatch, and wireless earbuds.",
    imgSrc: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  }
];

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isHovering, setIsHovering] = useState(false);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = React.useCallback(() => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 1 ? 0 : prevIndex + 1));
  }, []);

  useEffect(() => {
    resetTimeout();
    if (!isHovering) {
      timeoutRef.current = setTimeout(nextSlide, 3000);
    }
    return () => {
      resetTimeout();
    };
  }, [currentIndex, isHovering, nextSlide]);

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex(currentIndex === 0 ? slides.length - 1 : currentIndex - 1);
  };

  const goToSlide = (slideIndex) => {
    setDirection(slideIndex > currentIndex ? 1 : -1);
    setCurrentIndex(slideIndex);
  };

  const slideVariants = {
    hidden: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    visible: {
      x: '0%',
      opacity: 1,
      transition: { type: 'tween', duration: 0.5 },
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0,
      transition: { type: 'tween', duration: 0.5 },
    }),
  };

  return (
    <section 
      className="relative w-full h-[50vh] md:h-[70vh] overflow-hidden rounded-lg"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={slideVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="absolute w-full h-full"
        >
          <img  
            alt={slides[currentIndex].title} 
            className="w-full h-full object-cover"
            src={slides[currentIndex].imgSrc} />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center text-white p-4 md:p-12">
            <div className="bg-black bg-opacity-50 p-4 md:p-6 rounded-lg mb-12 md:mb-20 max-w-2xl">
              <h5 className="text-2xl md:text-4xl font-bold mb-2">{slides[currentIndex].title}</h5>
              <p className="text-sm md:text-lg hidden sm:block">{slides[currentIndex].description}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-10"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        type="button"
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75 transition-opacity z-10"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, slideIndex) => (
          <button
            type="button"
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`w-3 h-3 rounded-full transition-colors ${
              currentIndex === slideIndex ? 'bg-white' : 'bg-white/50'
            }`}
            aria-label={`Go to slide ${slideIndex + 1}`}
          ></button>
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
