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
  const visibleCount = 2;
  const maxIdx = certificates.length - visibleCount;

  const handlePrev = () => {
    setStartIdx((prev) => (prev - 1 < 0 ? maxIdx : prev - 1));
  };
  const handleNext = () => {
    setStartIdx((prev) => (prev + 1 > maxIdx ? 0 : prev + 1));
  };

  return (
    <div className="w-full flex flex-col items-center">
      <div className="flex items-center w-full gap-4">
        <button
          aria-label="Previous"
          onClick={handlePrev}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex-shrink-0"
        >
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" /></svg>
        </button>
        <div className="flex gap-8 w-full justify-center">
          {certificates.slice(startIdx, startIdx + visibleCount).map((cert, idx) => (
            <div key={cert.alt} className="flex flex-col items-center w-full max-w-md">
              <div className="relative w-full h-56 rounded-md overflow-hidden border border-gray-200 dark:border-gray-600 mb-2">
                <Image src={cert.src} alt={cert.alt} fill className="object-contain" />
              </div>
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{cert.label}</span>
            </div>
          ))}
        </div>
        <button
          aria-label="Next"
          onClick={handleNext}
          className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 flex-shrink-0"
        >
          <svg className="w-5 h-5 text-gray-700 dark:text-gray-300" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
        </button>
      </div>
      <div className="mt-2 flex gap-1">
        {Array.from({ length: certificates.length - visibleCount + 1 }).map((_, idx) => (
          <span
            key={idx}
            className={`inline-block w-2 h-2 rounded-full ${startIdx === idx ? 'bg-purple-600 dark:bg-purple-400' : 'bg-gray-300 dark:bg-gray-600'}`}
          />
        ))}
      </div>
    </div>
  );
}