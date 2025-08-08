'use client';

export default function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="text-center mb-10">
      <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300 mb-3">
        {eyebrow}
      </span>
      <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
        {title}
      </h2>
      {description && (
        <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-gray-300 mx-auto">
          {description}
        </p>
      )}
    </div>
  );
}