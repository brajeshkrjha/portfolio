'use client';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function ProjectDetail() {
  const params = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  // Define projects data - in a real app, this would come from an API or database
  const projects = [
    {
      id: "commercial-prefill-datalake",
      title: "Commercial Prefill DataLake",
      period: "Jan 2025",
      description: "A comprehensive data lake solution for commercial insurance prefill data, built on AWS using Glue, Athena, and S3.",
      longDescription: [
        "Designed and implemented a scalable data lake architecture on AWS to store and process commercial insurance prefill data.",
        "Developed ETL pipelines using AWS Glue and PySpark to transform raw data into a structured format for analytics.",
        "Implemented data quality checks and monitoring using AWS CloudWatch and Lambda functions.",
        "Created a query layer using Amazon Athena to enable business users to analyze the data efficiently.",
        "Automated the entire infrastructure deployment using Terraform, following Infrastructure as Code best practices."
      ],
      technologies: ["AWS Glue", "Athena", "S3", "Lambda", "Step Functions", "CloudWatch", "Terraform", "PySpark"],
      challenges: [
        "Handling large volumes of data with varying schemas and formats",
        "Ensuring data quality and consistency across different sources",
        "Optimizing query performance for business users",
        "Implementing proper security and access controls"
      ],
      outcomes: [
        "Reduced data processing time by 40%",
        "Improved data quality with automated validation checks",
        "Enabled self-service analytics for business users",
        "Reduced infrastructure costs by 25% through optimization"
      ],
      image: "/project1.svg"
    },
    {
      id: "erie-data-hub-framework",
      title: "Erie Data Hub Framework",
      period: "Dec 2023 - Dec 2024",
      description: "Implemented MarkLogic Data Hub Framework to manage and optimize large-scale data environments of the Erie Insurance project.",
      longDescription: [
        "Led the implementation of MarkLogic Data Hub Framework for Erie Insurance to centralize and manage their data assets.",
        "Designed and developed data harmonization flows to standardize data from multiple source systems.",
        "Created custom data models and entity definitions to represent insurance domain concepts.",
        "Implemented data quality rules and validation processes to ensure data integrity.",
        "Developed APIs to expose the harmonized data to downstream applications and services."
      ],
      technologies: ["MarkLogic", "Data Hub Framework", "XML", "JSON", "XQuery", "JavaScript", "REST APIs"],
      challenges: [
        "Integrating data from legacy systems with different formats and structures",
        "Ensuring data consistency and accuracy during transformation",
        "Managing complex relationships between insurance entities",
        "Scaling the solution to handle increasing data volumes"
      ],
      outcomes: [
        "Consolidated data from 5+ source systems into a unified data hub",
        "Reduced time to market for new data products by 30%",
        "Improved data quality and consistency across the organization",
        "Enhanced reporting capabilities with 360-degree view of insurance data"
      ],
      image: "/project2.svg"
    },
    {
      id: "rajya-web-app",
      title: "Rajya - India States Information Tool",
      period: "Feb 2022 - Mar 2022",
      description: "A web application providing comprehensive information about the States and Union Territories of India.",
      longDescription: [
        "Developed a responsive web application to showcase information about Indian states and union territories.",
        "Implemented interactive UI elements to enhance user experience and engagement.",
        "Created a clean and intuitive interface for users to navigate through different states and their details.",
        "Incorporated maps and visual elements to represent geographical information."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Bootstrap"],
      challenges: [
        "Organizing large amounts of information in a user-friendly manner",
        "Ensuring responsive design across different devices",
        "Optimizing performance with rich media content"
      ],
      outcomes: [
        "Created an educational tool for learning about Indian states",
        "Implemented responsive design for mobile and desktop users",
        "Received positive feedback for intuitive user interface"
      ],
      image: "/project3.svg",
      link: "https://github.com/brajeshkrjha/rajya"
    },
    {
      id: "todo-app",
      title: "ToDo App",
      period: "Dec 2021 - Jan 2022",
      description: "A simple yet effective task management application that saves tasks to local storage.",
      longDescription: [
        "Built a task management application using vanilla JavaScript and browser local storage.",
        "Implemented CRUD operations for managing tasks (create, read, update, delete).",
        "Designed a clean and intuitive user interface with CSS and Bootstrap.",
        "Added persistence using browser's local storage to save tasks between sessions."
      ],
      technologies: ["HTML", "CSS", "JavaScript", "Local Storage API"],
      challenges: [
        "Managing state without a framework",
        "Implementing data persistence with browser storage",
        "Creating an intuitive UI for task management"
      ],
      outcomes: [
        "Developed a fully functional task management application",
        "Implemented data persistence using local storage",
        "Created a responsive design that works across devices"
      ],
      image: "/project4.svg",
      link: "https://github.com/brajeshkrjha/todo-app"
    }
  ];

  useEffect(() => {
    if (params.id) {
      const foundProject = projects.find(p => p.id === params.id);
      setProject(foundProject || null);
      setLoading(false);
    }
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen py-12 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl mb-6">
            Project Not Found
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
            Sorry, the project you're looking for doesn't exist.
          </p>
          <Link 
            href="/projects" 
            className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700"
          >
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Link 
            href="/projects" 
            className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:underline"
          >
            <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
            </svg>
            Back to Projects
          </Link>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg">
          <div className="relative h-64 sm:h-80 md:h-96 bg-gradient-to-br from-blue-400 to-purple-500">
            <Image 
              src={project.image} 
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          
          <div className="p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2 md:mb-0">{project.title}</h1>
              <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-3 py-1 rounded-full">
                {project.period}
              </span>
            </div>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">{project.description}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="col-span-2">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Project Details</h2>
                <div className="prose prose-blue dark:prose-invert max-w-none">
                  <ul className="space-y-4">
                    {project.longDescription.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <svg className="h-6 w-6 text-blue-600 dark:text-blue-400 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-gray-700 dark:text-gray-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 mb-6">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                {project.link && (
                  <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Project Links</h3>
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center text-blue-600 dark:text-blue-400 hover:underline"
                    >
                      <svg className="mr-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                      View Source Code
                    </a>
                  </div>
                )}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Challenges</h3>
                <ul className="space-y-2">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-red-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Outcomes</h3>
                <ul className="space-y-2">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-gray-700 dark:text-gray-300">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}