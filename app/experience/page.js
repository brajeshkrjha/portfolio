import SectionHeader from '../../components/SectionHeader';

export default function Experience() {
  // Define experience data
  const experiences = [
    {
      title: "Software Engineer",
      company: "ValueMomentum",
      location: "Hyderabad, Telangana, India",
      period: "Jan 2025 - Present",
      duration: "8 months",
      description: [
        "Building and maintaining scalable, event-driven data pipelines using AWS services like Glue, Athena, Iceberg, DataSync, SQS, EventBridge, Step Functions, Lambda, SNS, CloudTrail, and CloudWatch.",
        "Automating cloud infrastructure provisioning with Terraform (IaC), and developing performant ETL workflows in PySpark to transform complex XML datasets into optimized Parquet format for efficient analytics and storage.",
        "Implementing data quality checks and monitoring solutions to ensure data integrity across the pipeline.",
        "Collaborating with cross-functional teams to understand data requirements and deliver solutions that meet business needs."
      ],
      technologies: ["AWS Glue", "Athena", "Lambda", "Step Functions", "EventBridge", "Terraform", "PySpark", "Parquet", "XML"]
    },
    {
      title: "Software Engineer-Trainee",
      company: "ValueMomentum",
      location: "Hyderabad, Telangana, India",
      period: "Aug 2023 - Jan 2025",
      duration: "1 year 6 months",
      description: [
        "Worked on the Erie Insurance project, implementing MarkLogic Data Hub Framework to manage and optimize large-scale data environments.",
        "Assisted in developing ETL processes for data transformation and loading into the data hub.",
        "Participated in code reviews and implemented best practices for data engineering workflows.",
        "Gained hands-on experience with AWS services and data engineering tools."
      ],
      technologies: ["MarkLogic", "Data Hub Framework", "ETL", "AWS", "SQL"]
    }
  ];

  // Define projects data
  const projects = [
    {
      title: "Commercial Prefill DataLake",
      period: "Jan 2025",
      description: "A data lake solution for commercial insurance prefill data, built on AWS using Glue, Athena, and S3.",
      technologies: ["AWS Glue", "Athena", "S3", "Lambda", "Step Functions"]
    },
    {
      title: "Erie Data Hub Framework",
      period: "Dec 2023 - Dec 2024",
      description: "Implemented MarkLogic Data Hub Framework to manage and optimize large-scale data environments of the Erie Insurance project.",
      technologies: ["MarkLogic", "Data Hub", "ETL", "XML Processing"]
    }
  ];

  return (
    <div className="min-h-screen py-10 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          eyebrow="Career"
          title="Professional Experience"
          description="My journey as an AWS Data Engineer"
        />

        {/* Work Experience Timeline */}
        <div className="mb-10">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Work Experience</h2>
          
          <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 ml-6">
                <span className="absolute flex items-center justify-center w-5 h-5 bg-blue-100 rounded-full -left-2.5 ring-4 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg className="w-2 h-2 text-blue-600 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </span>
                <div className="p-3 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                      {exp.title} at {exp.company}
                    </h3>
                    <span className="bg-blue-50 text-blue-700 text-xs font-medium mt-1 sm:mt-0 px-2 py-0.5 rounded-md dark:bg-blue-900 dark:text-blue-300">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3">
                    {exp.location} · {exp.duration}
                  </p>
                  <ul className="space-y-1.5 mb-3">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-xs text-gray-600 dark:text-gray-300 pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-gray-400">
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-1.5 py-0.5 text-xs font-medium bg-gray-50 text-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Key Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden">
                <div className="p-4">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-2">
                    <h3 className="text-sm font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className="text-xs text-gray-500 dark:text-gray-400 mt-1 sm:mt-0">{project.period}</span>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-3">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-1.5 py-0.5 text-xs font-medium bg-gray-50 text-gray-600 rounded-md dark:bg-gray-700 dark:text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}