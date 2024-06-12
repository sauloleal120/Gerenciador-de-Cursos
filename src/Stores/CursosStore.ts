import {create} from 'zustand';

type Curso = {
  key: number;
  name: string;
  duration: string;
  brief: string;
  about: string;
  price: number;
  tags: string[];
};

// Store de seus cursos
type CoursesStore = {
  coursesStore: Curso[];
};
export const useCoursesStore = create<CoursesStore>(() => ({
  coursesStore: [
    {
      key: 1,
      name: 'UI',
      duration: '2h30min',
      brief: 'Advanced mobile interface design',
      about:
        'Completed UI Design Essentials Course at Design Academy, Anytown, USA (July 2024). Proficient in UI design principles, wireframing, prototyping tools, and user-centered design. Developed practical projects focusing on creating intuitive and visually appealing interfaces',
      price: 50,
      tags: ['#UI', '#UX'],
    },
    {
      key: 2,
      name: 'HTML',
      duration: '3h10min',
      brief: 'Advanced web applications',
      about:
        'Completed HTML Mastery Course at Tech Academy, Anytown, USA (May 2024). Proficient in HTML5, basic CSS, and responsive web design. Developed projects including a personal portfolio website and recipe page.',
      price: 60,
      tags: ['#CSS', '#UI', '#UX'],
    },
    {
      key: 3,
      name: 'UI Advanced',
      duration: '2h15min',
      brief: 'Advanced mobile interface design',
      about:
        'Proficient in advanced UI design concepts including interaction design, information architecture, and usability testing. Skilled in prototyping tools such as Adobe XD and Figma. Developed complex projects emphasizing user-centered design principles and accessibility standards.',
      price: 55,
      tags: ['#UI', '#UX'],
    },
    {
      key: 4,
      name: 'Swift',
      duration: '1h30min',
      brief: 'Advanced iOS apps',
      about:
        'Proficient in Swift programming language for iOS development. Developed skills in mobile app development, including UI design, data handling, and integrating APIs. Created projects showcasing proficiency in Swift and iOS app development best practices.',
      price: 65,
      tags: ['#Swift'],
    },
    {
      key: 5,
      name: 'Scrum',
      duration: '2h30min',
      brief: 'Advanced project organization course',
      about:
        'Acquired foundational knowledge in Scrum methodology, Agile principles, and team collaboration. Demonstrated skills in sprint planning, daily stand-ups, and agile project management. Completed practical exercises and simulations to apply Scrum practices in real-world scenarios.',
      price: 48,
      tags: ['#ProjectManagement'],
    },
    {
      key: 6,
      name: 'Javascript',
      duration: '3h30min',
      brief: 'Programming language',
      about:
        'Proficient in JavaScript programming language for web development. Developed skills in front-end and back-end scripting, DOM manipulation, and asynchronous programming. Created interactive web applications and projects showcasing JavaScript proficiency and modern development practices.',
      price: 70,
      tags: ['#JavaScript', '#WebDevelopment'],
    },
    {
      key: 7,
      name: 'React Native',
      duration: '3h50min',
      brief: 'Advanced React Native course',
      about:
        'Proficient in React Native framework for cross-platform mobile app development. Developed skills in building mobile applications using React Native components, state management, and navigation. Created and deployed mobile apps for iOS and Android platforms, showcasing React Native expertise.',
      price: 65,
      tags: ['#JavaScript', '#MobileDevelopment', '#React'],
    },
    {
      key: 8,
      name: 'Python',
      duration: '4h00min',
      brief: 'Comprehensive Python programming',
      about:
        'Completed Python for Everybody Course at Python Institute, Anytown, USA (April 2024). Proficient in Python programming for data analysis, web development, and automation. Developed projects including a web scraper, data visualizations, and automation scripts.',
      price: 75,
      tags: ['#Python', '#DataScience'],
    },
    {
      key: 9,
      name: 'Machine Learning',
      duration: '5h00min',
      brief: 'Introduction to Machine Learning',
      about:
        'Completed Machine Learning Course at AI Academy, Anytown, USA (June 2024). Proficient in machine learning algorithms, data preprocessing, and model evaluation. Developed projects including classification models, regression analysis, and clustering algorithms.',
      price: 90,
      tags: ['#Python', '#MachineLearning', '#AI'],
    },
    {
      key: 10,
      name: 'Data Science',
      duration: '4h30min',
      brief: 'Data analysis and visualization',
      about:
        'Completed Data Science Bootcamp at DataCamp, Anytown, USA (August 2024). Proficient in data manipulation, statistical analysis, and visualization using tools like pandas, NumPy, and Matplotlib. Developed projects including exploratory data analysis and predictive modeling.',
      price: 85,
      tags: ['#Python', '#DataScience', '#BigData'],
    },
    {
      key: 11,
      name: 'DevOps',
      duration: '3h45min',
      brief: 'Introduction to DevOps practices',
      about:
        'Completed DevOps Fundamentals Course at Tech Academy, Anytown, USA (September 2024). Proficient in DevOps practices including continuous integration, continuous delivery, and infrastructure as code. Developed projects involving CI/CD pipelines and containerization.',
      price: 80,
      tags: ['#DevOps'],
    },
    {
      key: 12,
      name: 'Docker',
      duration: '2h20min',
      brief: 'Containerization with Docker',
      about:
        'Completed Docker Essentials Course at DevOps Academy, Anytown, USA (October 2024). Proficient in Docker for containerization and microservices architecture. Developed projects including containerized applications and Docker Compose configurations.',
      price: 55,
      tags: ['#DevOps', '#Docker'],
    },
    {
      key: 13,
      name: 'Kubernetes',
      duration: '3h00min',
      brief: 'Container orchestration with Kubernetes',
      about:
        'Completed Kubernetes Mastery Course at Cloud Academy, Anytown, USA (November 2024). Proficient in Kubernetes for container orchestration and management. Developed projects including deployment, scaling, and managing containerized applications using Kubernetes.',
      price: 65,
      tags: ['#DevOps', '#Kubernetes'],
    },
    {
      key: 14,
      name: 'Cloud Computing',
      duration: '4h15min',
      brief: 'Introduction to Cloud Computing',
      about:
        'Completed Cloud Computing Fundamentals Course at Cloud Academy, Anytown, USA (December 2024). Proficient in cloud services and deployment models across AWS, Azure, and GCP. Developed projects involving cloud architecture, deployment, and management.',
      price: 70,
      tags: ['#CloudComputing', '#AWS', '#Azure', '#GCP'],
    },
    {
      key: 15,
      name: 'AWS',
      duration: '4h30min',
      brief: 'AWS Cloud services',
      about:
        'Completed AWS Certified Solutions Architect Course at Cloud Academy, Anytown, USA (January 2024). Proficient in AWS cloud services, including EC2, S3, and Lambda. Developed projects involving cloud infrastructure setup, management, and automation using AWS services.',
      price: 75,
      tags: ['#CloudComputing', '#AWS'],
    },
    {
      key: 16,
      name: 'Azure',
      duration: '4h00min',
      brief: 'Microsoft Azure cloud platform',
      about:
        'Completed Microsoft Azure Fundamentals Course at Cloud Academy, Anytown, USA (February 2024). Proficient in Azure cloud services, including Virtual Machines, Azure SQL Database, and Azure Functions. Developed projects involving Azure cloud infrastructure and management.',
      price: 70,
      tags: ['#CloudComputing', '#Azure'],
    },
    {
      key: 17,
      name: 'GCP',
      duration: '3h50min',
      brief: 'Google Cloud Platform services',
      about:
        'Completed Google Cloud Platform Fundamentals Course at Cloud Academy, Anytown, USA (March 2024). Proficient in GCP services, including Compute Engine, Cloud Storage, and BigQuery. Developed projects involving GCP infrastructure, data analysis, and cloud-based applications.',
      price: 70,
      tags: ['#CloudComputing', '#GCP'],
    },
    {
      key: 18,
      name: 'AI',
      duration: '5h30min',
      brief: 'Introduction to Artificial Intelligence',
      about:
        'Completed Artificial Intelligence Course at AI Academy, Anytown, USA (May 2024). Proficient in AI concepts including neural networks, natural language processing, and computer vision. Developed projects including chatbots, image recognition, and AI-driven applications.',
      price: 95,
      tags: ['#AI', '#MachineLearning'],
    },
    {
      key: 19,
      name: 'NodeJS',
      duration: '4h20min',
      brief: 'Comprehensive NodeJS Development',
      about:
        'Completed NodeJS Development Course at FullStack Academy, Anytown, USA (June 2024). Proficient in server-side development using NodeJS, Express, and MongoDB. Developed projects including RESTful APIs, real-time chat applications, and microservices architecture.',
      price: 80,
      tags: ['#NodeJS', '#JavaScript', '#WebDevelopment'],
    },
    {
      key: 20,
      name: 'TypeScript',
      duration: '3h45min',
      brief: 'Mastering TypeScript for Applications',
      about:
        'Completed TypeScript Mastery Course at CodeAcademy, Anytown, USA (April 2024). Proficient in TypeScript syntax, type system, and advanced features. Developed projects including large-scale applications, with a focus on type safety, maintainability, and integration with JavaScript frameworks.',
      price: 85,
      tags: ['#TypeScript', '#JavaScript', '#WebDevelopment'],
    },
  ],
}));
