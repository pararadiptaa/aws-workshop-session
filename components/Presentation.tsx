import React, { useState, useEffect, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { SlideData } from '../types';
import * as Visuals from './SlideVisuals';

const slides: SlideData[] = [
  { id: 1, title: "AWS Fundamentals", subtitle: "A visual journey into Cloud Computing.", visualId: "Intro" },
  { id: 2, title: "What is Cloud Computing?", subtitle: "Toggle between the technical definition and the simple analogy.", visualId: "CloudDefinition" },
  { id: 3, title: "Core Characteristics", subtitle: "Interact to explore: On-Demand, Scalable, and Pay-As-You-Go.", visualId: "Scalability" },
  { id: 4, title: "On-Premises vs Cloud", subtitle: "Compare Ownership, Cost, Speed, Flexibility, and Maintenance.", visualId: "HouseVsHotel" },
  { id: 5, title: "Responsibility Models", subtitle: "IaaS, PaaS, and SaaS. Who bakes the pizza?", visualId: "PizzaModel" },
  { id: 6, title: "Infrastructure Evolution", subtitle: "Mansion vs Apartment vs Capsule Hotel. The journey of efficiency.", visualId: "Evolution" },
  { id: 7, title: "AWS Compute", subtitle: "Car Rental (EC2) vs Taxi (Lambda) vs Bus Fleet (EKS).", visualId: "Compute" },
  { id: 8, title: "AWS Storage", subtitle: "Walk-In Closet (EBS) vs Kitchen Pantry (EFS) vs Fulfillment Center (S3).", visualId: "Storage" },
  { id: 9, title: "AWS Databases", subtitle: "Structured SQL (RDS) vs Flexible NoSQL (DynamoDB).", visualId: "Databases" },
  { id: 10, title: "Networking: Inside", subtitle: "The Gated Housing Complex Analogy (VPC).", visualId: "VPC" },
  { id: 11, title: "Networking: Outside", subtitle: "Phonebook (Route 53) and Local Stores (CloudFront).", visualId: "Global" },
  { id: 12, title: "Keep Learning", subtitle: "The cloud is a journey, not a destination.", visualId: "Closing" },
];

const Presentation: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const goToNext = useCallback(() => {
    if (currentIndex < slides.length - 1) {
      setDirection(1);
      setCurrentIndex(prev => prev + 1);
    }
  }, [currentIndex]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setCurrentIndex(prev => prev - 1);
    }
  }, [currentIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === ' ') {
        e.preventDefault();
        goToNext();
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
        e.preventDefault();
        goToPrev();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev]);

  // Wheel/Scroll navigation
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    const handleWheel = (e: WheelEvent) => {
      if (Math.abs(e.deltaY) < 30) return; // Threshold
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        if (e.deltaY > 0) goToNext();
        else goToPrev();
      }, 100); // Debounce
    };
    window.addEventListener('wheel', handleWheel);
    return () => {
      window.removeEventListener('wheel', handleWheel);
      clearTimeout(timeout);
    };
  }, [goToNext, goToPrev]);

  const CurrentVisual = Visuals[slides[currentIndex].visualId as keyof typeof Visuals] || Visuals.Intro;

  return (
    <div className="relative w-full h-full flex flex-col items-center justify-between p-8 md:p-16">

      {/* Progress Indicators */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3 z-50">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-accent scale-150' : 'bg-secondaryDepth hover:bg-depth'
              }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Main Content Area */}
      <div className="w-full h-full max-w-6xl flex flex-col relative overflow-hidden">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={currentIndex}
            custom={direction}
            initial={{ opacity: 0, y: direction * 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: direction * -50 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="flex flex-col h-full w-full"
          >
            {/* Slide Header */}
            <div className="flex-none mb-4 md:mb-8">
              <motion.h1
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 md:mb-4"
              >
                {slides[currentIndex].title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-base md:text-lg text-depth font-light max-w-2xl border-l-4 border-accent pl-4"
              >
                {slides[currentIndex].subtitle}
              </motion.p>
            </div>

            {/* Slide Visual Container */}
            <div className="flex-1 flex items-center justify-center relative bg-shadow/30 rounded-2xl border border-secondaryDepth/20 backdrop-blur-sm p-4 md:p-8 overflow-hidden">
              <CurrentVisual />
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Footer / Navigation Hint */}
      <div className="flex-none mt-4 md:mt-8 flex flex-col items-center gap-2 text-depth text-sm">
        <div className="flex gap-4">
          <button onClick={goToPrev} disabled={currentIndex === 0} className="p-2 hover:text-accent disabled:opacity-30 transition-colors">
            <ChevronUp />
          </button>
          <button onClick={goToNext} disabled={currentIndex === slides.length - 1} className="p-2 hover:text-accent disabled:opacity-30 transition-colors">
            <ChevronDown />
          </button>
        </div>
        <span>Use arrow keys or scroll to navigate</span>
        <span className="text-xs text-secondaryDepth">Slide {currentIndex + 1} / {slides.length}</span>
      </div>
    </div>
  );
};

export default Presentation;