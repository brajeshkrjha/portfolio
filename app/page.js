import Image from 'next/image';
import Link from 'next/link';
import { Server, Database, Code, Cog, ArrowRight } from 'lucide-react';
import SectionHeader from '../components/SectionHeader';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl md:text-5xl mb-3">
                <span className="block">Hi, I'm Brajesh</span>
                <span className="block text-blue-600 dark:text-blue-400">Cloud Data Engineer</span>
              </h1>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300 sm:mt-4 sm:text-base md:mt-4 md:text-lg lg:mx-0 mb-5">
                Building scalable data solutions and ETL pipelines on AWS. Passionate about transforming raw data into valuable insights.
              </p>
              
              {/* Profile image shown in mobile view before buttons */}
              <div className="flex justify-center mb-6 md:hidden">
                <div className="w-56 h-56 relative rounded-full overflow-hidden border-2 border-blue-600 dark:border-blue-400 shadow-lg">
                  <Image 
                    src="/my_img.jpg" 
                    alt="Brajesh Kumar Jha" 
                    fill 
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              
              <div className="mt-5 sm:mt-6 sm:flex">
                <div className="rounded-md shadow">
                  <Link href="/projects" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-3 md:text-base md:px-8">
                    View My Work
                  </Link>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <Link href="/contact" className="w-full flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-3 md:text-base md:px-8">
                    Contact Me
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 hidden md:flex justify-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 relative rounded-full overflow-hidden border-2 border-blue-600 dark:border-blue-400 shadow-lg">
                <Image 
                  src="/my_img.jpg" 
                  alt="Brajesh Kumar Jha" 
                  fill 
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section className="py-12 bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader 
            eyebrow="Professional Skills"
            title="My Expertise"
            description="Specialized in cloud data engineering solutions with a focus on scalable and efficient architectures"
          />

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="group">
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-indigo-900/20 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg shadow-lg mb-5">
                      <Server className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight mb-2">AWS Services</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Practical experience with AWS cloud services for data processing and analytics solutions
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">AWS Glue</span>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">Lambda</span>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">Step Functions</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg shadow-lg mb-5">
                      <Database className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight mb-2">Data Engineering</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Designing and implementing scalable data pipelines and analytics solutions
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">ETL Pipelines</span>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">Data Lakes</span>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">PySpark</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group">
                <div className="relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 transform hover:-translate-y-1">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-blue-100 dark:from-purple-900/20 dark:to-blue-900/20 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div className="relative p-6">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-600 rounded-lg shadow-lg mb-5">
                      <Code className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white tracking-tight mb-2">Infrastructure as Code</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      Creating reproducible and scalable infrastructure through automation
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">Terraform</span>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">CloudFormation</span>
                      <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">CDK</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/skills" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View All Skills
              <ArrowRight className="ml-2 -mr-1 h-5 w-5" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300 mb-3">
              Portfolio Highlights
            </span>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white sm:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
              Featured Projects
            </h2>
            <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-gray-300 mx-auto">
              Showcasing my most impactful work in data engineering and cloud infrastructure
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <div className="group bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="relative h-48 bg-gradient-to-br from-blue-400 to-purple-500">
                <Image 
                  src="/data_tech1.jpg" 
                  alt="Commercial Prefill DataLake"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-600/90 text-white rounded-md backdrop-blur-sm">
                    Enterprise Data Solution
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Commercial Prefill DataLake</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    Jan 2025
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  A comprehensive data lake solution for commercial insurance prefill data, built on AWS using Glue, Athena, and S3.
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      AWS Glue
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      Athena
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      S3
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      Lambda
                    </span>
                  </div>
                </div>
                <Link 
                  href="/projects/commercial-prefill-datalake"
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Details
                  <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>

            <div className="group bg-white dark:bg-gray-800 overflow-hidden shadow-lg rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="relative h-48 bg-gradient-to-br from-indigo-400 to-blue-500">
                <Image 
                  src="/data_tech2.jpg" 
                  alt="Erie Data Hub Framework"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-indigo-600/90 text-white rounded-md backdrop-blur-sm">
                    Data Integration Framework
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Erie Data Hub Framework</h3>
                  <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                    Dec 2023 - Dec 2024
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Implemented MarkLogic Data Hub Framework to manage and optimize large-scale data environments for Erie Insurance.
                </p>
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      MarkLogic
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      Data Hub
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      ETL
                    </span>
                    <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                      REST APIs
                    </span>
                  </div>
                </div>
                <Link 
                  href="/projects/erie-data-hub-framework"
                  className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                >
                  View Details
                  <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              href="/projects" 
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-md text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              View All Projects
              <svg className="ml-2 -mr-1 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
