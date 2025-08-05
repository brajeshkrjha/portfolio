import Image from 'next/image';

export default function Skills() {
  // Define skill categories and their items
  const skillCategories = [
    {
      name: "AWS Services",
      description: "Cloud services and tools from Amazon Web Services",
      skills: [
        { name: "AWS Glue", level: 90 },
        { name: "Amazon Athena", level: 85 },
        { name: "AWS Lambda", level: 80 },
        { name: "Step Functions", level: 75 },
        { name: "EventBridge", level: 85 },
        { name: "Amazon S3", level: 95 },
        { name: "AWS IAM", level: 85 },
        { name: "CloudWatch", level: 80 },
        { name: "CloudTrail", level: 75 },
        { name: "AWS DataSync", level: 70 },
      ],
    },
    {
      name: "Data Engineering",
      description: "Tools and technologies for building data pipelines and processing data",
      skills: [
        { name: "ETL Pipeline Design", level: 85 },
        { name: "Data Lake Architecture", level: 80 },
        { name: "PySpark", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Parquet", level: 85 },
        { name: "Iceberg", level: 75 },
        { name: "Data Modeling", level: 80 },
        { name: "XML Processing", level: 85 },
        { name: "MarkLogic", level: 75 },
      ],
    },
    {
      name: "Programming Languages",
      description: "Programming languages for data engineering and cloud development",
      skills: [
        { name: "Python", level: 90 },
        { name: "SQL", level: 85 },
        { name: "Java", level: 70 },
        { name: "JavaScript", level: 65 },
        { name: "Shell Scripting", level: 75 },
      ],
    },
    {
      name: "DevOps & Infrastructure",
      description: "Tools and practices for infrastructure automation and deployment",
      skills: [
        { name: "Terraform", level: 80 },
        { name: "CloudFormation", level: 75 },
        { name: "Git", level: 85 },
        { name: "CI/CD", level: 70 },
        { name: "Docker", level: 65 },
      ],
    },
  ];

  // Function to render skill bar
  const SkillBar = ({ name, level }) => (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-300">{name}</span>
        <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{level}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
        <div 
          className="bg-blue-600 h-2.5 rounded-full" 
          style={{ width: `${level}%` }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen py-12 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            My Skills
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-600 dark:text-gray-300 mx-auto">
            Technical expertise and competencies in AWS data engineering
          </p>
        </div>

        {/* Skills Overview */}
        <div className="mb-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Skills Overview</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              As an AWS Data Engineer with 2 years of experience, I specialize in building and maintaining scalable, event-driven data pipelines using various AWS services. My expertise includes automating cloud infrastructure with Terraform and developing performant ETL workflows in PySpark to transform complex data for efficient analytics.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold">10+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">AWS Services</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold">5+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Data Projects</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold">3+</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">ETL Pipelines</div>
              </div>
              <div className="bg-white dark:bg-gray-700 p-4 rounded-lg shadow">
                <div className="text-blue-600 dark:text-blue-400 text-3xl font-bold">2</div>
                <div className="text-gray-600 dark:text-gray-300 text-sm">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mb-16 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AWS Certified Cloud Practitioner</h3>
                  <p className="text-gray-600 dark:text-gray-400">Amazon Web Services</p>
                </div>
              </div>
              <div className="mt-4 mb-4 flex justify-center">
                <div className="relative w-full h-72 rounded-md overflow-hidden border border-gray-200 dark:border-gray-600">
                  <Image 
                    src="/aws_ccp_certification.jpg" 
                    alt="AWS Certified Cloud Practitioner" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Issued Jun 14, 2025 · Expires Jun 14, 2028</p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 dark:bg-blue-900 p-3 rounded-full mr-4">
                  <svg className="h-6 w-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">AWS Certified Solutions Architect - Associate</h3>
                  <p className="text-gray-600 dark:text-gray-400">Amazon Web Services</p>
                </div>
              </div>
              <div className="mt-4 mb-4 flex justify-center">
                <div className="relative w-full h-72 rounded-md overflow-hidden border border-gray-200 dark:border-gray-600">
                  <Image 
                    src="/coming_soon_cert.svg" 
                    alt="AWS Certified Solutions Architect - Coming Soon" 
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 text-sm">Planning soon</p>
            </div>
          </div>
        </div>

        {/* Detailed Skills */}
        <div className="space-y-12">
          {skillCategories.map((category, index) => (
            <div key={index} className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{category.name}</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{category.description}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <SkillBar key={skillIndex} name={skill.name} level={skill.level} />
                ))}
              </div>
            </div>
          ))}
        </div>


      </div>
    </div>
  );
}