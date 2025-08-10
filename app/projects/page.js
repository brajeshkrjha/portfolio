'use client';
import Link from 'next/link';
import Image from 'next/image';
import SectionHeader from '../../components/SectionHeader';

export default function Projects() {
  // Define projects data
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
      image: "/data_tech1.jpg" // Updated image
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
      image: "/data_tech2.jpg" // Updated image
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
      image: "/data_tech3.jpg", // Updated image
      link: "https://github.com/brajeshkrjha/rajya" // Placeholder link
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
      image: "/data_tech4.jpg", // Updated image
      link: "https://github.com/brajeshkrjha/todo-app" // Placeholder link
    }
  ];

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          eyebrow="Portfolio"
          title="My Projects"
          description="A showcase of my work in data engineering, cloud infrastructure, and web development."
        />

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={project.id} className="group bg-white dark:bg-gray-800 overflow-hidden shadow-md rounded-xl border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
              <div className="relative h-40 bg-gradient-to-br from-blue-400 to-purple-500">
                <Image 
                  src={project.image} 
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                  onContextMenu={(e) => e.preventDefault()}
                  draggable="false"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-3 left-4 right-4">
                  <span className="inline-block px-2 py-1 text-xs font-medium bg-blue-600/90 text-white rounded-md backdrop-blur-sm">
                    {project.id.includes('data') ? 'Data Engineering' : 'Web Development'}
                  </span>
                </div>
              </div>
              
              <div className="p-5">
                <div className="flex justify-between items-start mb-2">
                  <h2 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h2>
                  <span className="text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-700 px-2 py-0.5 rounded-full">
                    {project.period}
                  </span>
                </div>
                
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">{project.description}</p>
                
                <div className="mb-3">
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span key={i} className="px-2 py-0.5 text-xs font-medium bg-blue-100 text-blue-800 rounded-full dark:bg-blue-900 dark:text-blue-300">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-0.5 text-xs font-medium bg-gray-100 text-gray-800 rounded-full dark:bg-gray-700 dark:text-gray-300">
                        +{project.technologies.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4">
                  <Link 
                    href={`/projects/${project.id}`}
                    className="inline-flex items-center text-sm font-medium text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                  >
                    View Details
                    <svg className="ml-1 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </Link>
                  
                  {project.link && (
                    <a 
                      href={project.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white flex items-center"
                    >
                      Source Code
                      <svg className="ml-1 h-3.5 w-3.5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
                        <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}