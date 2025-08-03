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
    <div className="min-h-screen py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Professional Experience
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            My journey as an AWS Data Engineer
          </p>
        </div>

        {/* Work Experience Timeline */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Work Experience</h2>
          
          <div className="relative border-l border-gray-200 dark:border-gray-700 ml-3">
            {experiences.map((exp, index) => (
              <div key={index} className="mb-10 ml-6">
                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                  <svg className="w-2.5 h-2.5 text-blue-600 dark:text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"/>
                  </svg>
                </span>
                <div className="p-4 bg-white rounded-lg border border-gray-200 shadow-sm dark:bg-gray-800 dark:border-gray-700">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {exp.title} at {exp.company}
                    </h3>
                    <span className="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                    {exp.location} · {exp.duration}
                  </p>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-base text-gray-600 dark:text-gray-300">
                        • {item}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {exp.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded dark:bg-gray-700 dark:text-gray-300">
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
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Key Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{project.title}</h3>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{project.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded dark:bg-blue-900 dark:text-blue-300">
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