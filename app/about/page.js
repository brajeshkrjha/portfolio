import Image from 'next/image';

export default function About() {
  return (
    <div className="min-h-screen py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            About Me
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            Get to know more about my background and journey
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
          <div className="md:w-1/3">
            <div className="aspect-w-1 aspect-h-1 rounded-lg overflow-hidden shadow-lg">
              <Image 
                src="/profile.svg" 
                alt="Brajesh Kumar Jha" 
                width={400}
                height={400}
                className="w-full h-auto"
                priority
              />
            </div>

            <div className="mt-8 bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
              <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Personal Details</h2>
              
              <div className="space-y-3">
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Brajesh Kumar Jha</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">AWS Data Engineer</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">Hyderabad, India</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700 dark:text-gray-300">2 Years of Experience</span>
                </div>
                
                <div className="flex items-center">
                  <svg className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:contact@example.com" className="text-blue-600 dark:text-blue-400 hover:underline">contact@example.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h2>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Education</h3>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-md">
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Technology</h4>
                <p className="text-gray-600 dark:text-gray-400">Computer Science and Engineering</p>
                <p className="text-gray-600 dark:text-gray-400">University Name, 2017-2021</p>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Career Goals</h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl aliquam nisl, eget aliquam nisl nisl sit amet nisl.
              </p>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Interests</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Cloud Computing</li>
                    <li>Big Data Processing</li>
                    <li>Data Visualization</li>
                    <li>Machine Learning</li>
                  </ul>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 shadow-md">
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Hobbies</h4>
                  <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
                    <li>Reading Tech Blogs</li>
                    <li>Contributing to Open Source</li>
                    <li>Hiking</li>
                    <li>Photography</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}