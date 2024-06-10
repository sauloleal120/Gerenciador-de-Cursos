import {create} from 'zustand';

function generateRandomKey(): number {
  return Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
}


type Curso = {
  key: number;
  name: string;
  duration: string;
  brief: string;
  about: string;
  price: number;
};


// Store de seus cursos
type YourCoursesStore = {
  yourCourses: Curso[];
  addCurso: (curso: Curso) => void;
  removeCurso: (key: number) => void;
};

export const useYourCourses = create<YourCoursesStore>(set => ({
  yourCourses: [
    {
      key: 1,
      name: 'UI',
      duration: '2h30min',
      brief: 'Advanced mobile interface design',
      about:
        'Completed UI Design Essentials Course at Design Academy, Anytown, USA (July 2024). Proficient in UI design principles, wireframing, prototyping tools, and user-centered design. Developed practical projects focusing on creating intuitive and visually appealing interfaces',
      price: 50,
    },
  ],
  addCurso: curso =>
    set(state => ({
      yourCourses: [...state.yourCourses, {...curso, key: generateRandomKey()}],
    })),
  removeCurso: key =>
    set(state => ({
      yourCourses: state.yourCourses.filter(curso => curso.key !== key),
    })),
}));
