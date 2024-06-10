import {create} from 'zustand';

type Curso = {
  key: number;
  name: string;
  duration: string;
  brief: string;
  about: string;
  price: number;
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
      brief: 'Advanved mobile interface design',
      about:
        'Completed UI Design Essentials Course at Design Academy, Anytown, USA (July 2024). Proficient in UI design principles, wireframing, prototyping tools, and user-centered design. Developed practical projects focusing on creating intuitive and visually appealing interfaces',
      price: 50,
    },
    {
      key: 2,
      name: 'HTML',
      duration: '3h10min',
      brief: 'Advanced web applications',
      about:
        'Completed HTML Mastery Course at Tech Academy, Anytown, USA (May 2024). Proficient in HTML5, basic CSS, and responsive web design. Developed projects including a personal portfolio website and recipe page.',
      price: 60,
    },
    {
      key: 3,
      name: 'UI Advanced',
      duration: '2h15min',
      brief: 'Advanved mobile interface design',
      about:
        'Proficient in advanced UI design concepts including interaction design, information architecture, and usability testing. Skilled in prototyping tools such as Adobe XD and Figma. Developed complex projects emphasizing user-centered design principles and accessibility standards.',
      price: 55,
    },
    {
      key: 4,
      name: 'Swift',
      duration: '1h30min',
      brief: 'Advanved iOS apps',
      about:
        'Proficient in Swift programming language for iOS development. Developed skills in mobile app development, including UI design, data handling, and integrating APIs. Created projects showcasing proficiency in Swift and iOS app development best practices.',
      price: 65,
    },
    {
      key: 5,
      name: 'Scrum',
      duration: '2h30min',
      brief: 'Advanved project organization course',
      about:
        'Acquired foundational knowledge in Scrum methodology, Agile principles, and team collaboration. Demonstrated skills in sprint planning, daily stand-ups, and agile project management. Completed practical exercises and simulations to apply Scrum practices in real-world scenarios.',
      price: 48,
    },
    {
      key: 6,
      name: 'Javascript',
      duration: '3h30 min',
      brief: 'Programming language',
      about:
        'Proficient in JavaScript programming language for web development. Developed skills in front-end and back-end scripting, DOM manipulation, and asynchronous programming. Created interactive web applications and projects showcasing JavaScript proficiency and modern development practices.',
      price: 70,
    },
    {
      key: 7,
      name: 'React Native',
      duration: '3h50 min',
      brief: 'Advanced React Native course',
      about:
        'Proficient in React Native framework for cross-platform mobile app development. Developed skills in building mobile applications using React Native components, state management, and navigation. Created and deployed mobile apps for iOS and Android platforms, showcasing React Native expertise.',
      price: 65,
    },
  ],
}));
