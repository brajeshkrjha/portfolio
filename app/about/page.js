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
                src="/my_img.jpg" 
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
                  <a href="mailto:brajeshjha2001@gmail.com" className="text-blue-600 dark:text-blue-400 hover:underline">brajeshjha2001@gmail.com</a>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3">
            <div className="prose prose-blue dark:prose-invert max-w-none">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">My Journey</h2>
              
              <div className="mb-6">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-4">
                  <div className="w-full md:w-2/3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Professional Experience</h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-2">
                      I started my career with ValueMomentum in August 2023, where I've been working in the Data Engineering department.
                    </p>
                    <p className="text-gray-700 dark:text-gray-300">
                      In my first project, I had the opportunity to work with MarkLogic and Data Hub Framework to implement data harmonization, consumption, data lake in AWS, and REST API services. Later, I moved to a full-fledged AWS data engineering project, where I gained experience with various AWS services as part of the data lake team. I collaborate with team members from both India and the USA, following Agile methodologies. Currently, I'm continuing in the same team and work role.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="rounded-lg overflow-hidden shadow-md h-48 relative">
                      <Image 
                        src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_z53c0ybh/def_height/2700/def_width/2700/version/100012/type/1" 
                        alt="ValueMomentum" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Education</h3>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-2/3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Bachelor of Technology</h4>
                    <p className="text-gray-600 dark:text-gray-400">Information Technology</p>
                    <p className="text-gray-600 dark:text-gray-400">Bengal Institute of Technology, Kolkata, West Bengal (2019-2023)</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">I completed my B.Tech graduation from Bengal Institute of Technology in Information Technology. BIT is a renowned engineering college under Techno India Group, established in 2000 and NAAC accredited with B++ rating.</p>
                    <p className="text-gray-600 dark:text-gray-400">During my time at BIT, I actively participated in various hackathons including Toycathon, Smart India Hackathon, and Toys and Games hackathon. I was proud to reach the grand finale round for Toycathon, which was a significant achievement in my academic journey.</p>
                  </div>
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="rounded-lg overflow-hidden shadow-md h-48 relative">
                      <Image 
                        src="https://technotimes.info/wp-content/uploads/2025/06/image-3.png" 
                        alt="Bengal Institute of Technology" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 mb-6 shadow-md">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="w-full md:w-2/3">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">Schooling</h4>
                    <p className="text-gray-600 dark:text-gray-400">Rajkamal Saraswati Vidya Mandir, Dhanbad, Jharkhand</p>
                    <p className="text-gray-600 dark:text-gray-400 mt-2">I completed my education till Class 12th at RSVM, a CBSE-affiliated school established in 1978. The school is known for its holistic approach to education and excellent academic standards.</p>
                    <p className="text-gray-600 dark:text-gray-400">I chose Science stream for my 11th and 12th grades, which laid the foundation for my engineering career. My introduction to SQL and Java began in Class 11 through the Information Practices subject, which sparked my interest in programming and ultimately helped me choose my career path in technology.</p>
                  </div>
                  <div className="w-full md:w-1/3 flex-shrink-0">
                    <div className="rounded-lg overflow-hidden shadow-md h-48 relative">
                      <Image 
                        src="https://rsvm.in/uploads/gallery/media/Front.jpg" 
                        alt="Rajkamal Saraswati Vidya Mandir" 
                        fill
                        style={{ objectFit: 'cover' }}
                        className="transition-transform hover:scale-105 duration-300"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mt-8 mb-4">Career Goals</h3>
              
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                My goal is to grow in the data engineering field and solve complex data problems with AWS. While I'm also open to Azure or GCP, my primary focus is on AWS technologies. In the future, I aspire to work on machine learning pipelines and tackle big data challenges.
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
                    <li>Chess</li>
                    <li>Drawing</li>
                    <li>Sleeping</li>
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