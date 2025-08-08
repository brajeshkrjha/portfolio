"use client";

import React, { useState } from "react";
import Image from "next/image";

const certificates = [
  {
    src: "/udemy/amazonQ_udemy.jpg",
    alt: "Amazon Q Udemy Certificate",
    label: "Amazon Q"
  },
  {
    src: "/udemy/langchain_udemy.jpg",
    alt: "LangChain Udemy Certificate",
    label: "LangChain"
  },
  {
    src: "/udemy/python_udemy.jpg",
    alt: "Python Udemy Certificate",
    label: "Python"
  },
  {
    src: "/udemy/spark_udemy.jpg",
    alt: "Spark Udemy Certificate",
    label: "Spark"
  },
  {
    src: "/udemy/terraform_udemy.jpg",
    alt: "Terraform Udemy Certificate",
    label: "Terraform"
  }
];

export default function UdemyCertificatesSlider() {
  const [startIdx, setStartIdx] = useState(0);
  // Use responsive visible count based on screen size
  const [visibleCount, setVisibleCount] = useState(2);
  const [maxIdx, setMaxIdx] = useState(certificates.length - visibleCount);
  
  // Effect to handle responsive behavior
  React.useEffect(() => {
    const handleResize = () => {
      // Show only 1 certificate on mobile screens
      const newVisibleCount = window.innerWidth < 768 ? 1 : 2;
      setVisibleCount(newVisibleCount);
      
      // Calculate the maximum valid index
      // This ensures we don't have an empty slide at the end
      const newMaxIdx = Math.max(0, certificates.length - newVisibleCount);
      setMaxIdx(newMaxIdx);
      
      // Reset startIdx if it's out of bounds after resize
      if (startIdx > newMaxIdx) {
        setStartIdx(0);
      }
    };
    
    // Set initial values
    handleResize();
    
    // Add event listener
    window.addEventListener('resize', handleResize);
    
    // Cleanup
    return () => window.removeEventListener('resize', handleResize);
  }, [startIdx, certificates.length]);

  const handlePrev = () => {
    setStartIdx((prev) => {
      const newIndex = prev - 1 < 0 ? maxIdx : prev - 1;
      return newIndex;
    });
  };
  
  const handleNext = () => {
    setStartIdx((prev) => {
      const newIndex = prev + 1 > maxIdx ? 0 : prev + 1;
      return newIndex;
    });
  };
  
  // Auto-slide functionality removed as per user request
  // Now slider only moves on manual clicks

  // Use transform for animation while keeping conditional rendering
  const sliderStyle = {
    transition: 'all 0.5s ease-in-out',
    transform: `translateX(0%)` // No transform needed as we're conditionally rendering
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center w-full gap-4">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 flex-shrink-0 z-10 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="relative w-full overflow-hidden">
          <div 
            className="flex w-full transition-transform duration-500 ease-in-out"
            style={{
              ...sliderStyle,
              transform: `translateX(-${startIdx * (100 / visibleCount)}%)`
            }}
          >
            {/* Render all certificates and use transform for sliding */}
            {certificates.map((cert, idx) => {
              return (
                <div 
                  key={cert.alt} 
                  className="flex-shrink-0 flex-grow-0 px-2 flex flex-col items-center"
                  style={{ width: `${100 / visibleCount}%` }}
                >
                  <div className="relative w-full md:h-56 h-72 rounded-md overflow-hidden border border-gray-200 dark:border-gray-600 mb-2 shadow-sm hover:shadow-md transition-all duration-500 group">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-100/0 to-purple-100/10 dark:from-purple-900/0 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <Image 
                      src={cert.src} 
                      alt={cert.alt} 
                      fill 
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-contain transform group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-2 px-3 py-1 rounded-full bg-gray-50 dark:bg-gray-800 shadow-sm transform group-hover:scale-105 transition-all duration-300">{cert.label}</span>
                </div>
              );
            })}
          </div>
        </div>
        <button
          aria-label="Next"
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-purple-100 dark:hover:bg-purple-900 hover:text-purple-600 dark:hover:text-purple-400 flex-shrink-0 z-10 transition-all duration-300 shadow-sm hover:shadow-md"
        >
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="mt-4 flex gap-2 justify-center">
        {Array.from({ length: maxIdx + 1 }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setStartIdx(idx)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${startIdx === idx ? 'bg-purple-600 dark:bg-purple-400 w-4' : 'bg-gray-300 dark:bg-gray-600'}`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
}