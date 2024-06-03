import {create} from 'zustand';

function generateRandomKey(): number {
  return Math.floor(Math.random() * 1000000); // Gera um número aleatório entre 0 e 999999
}

// Define os tipos
type Usuario = {
  key: number;
  name: string;
  email: string;
  password: string;
};

type Curso = {
  key: number;
  name: string;
  duration: string;
  brief: string;
  about: string;
  price: number;
};

// Store de usuários
type UsuarioStore = {
  users: Usuario[];
  addUsuario: (usuario: Usuario) => void;
  removeUsuario: (key: number) => void;
};

export const useUsuarios = create<UsuarioStore>(set => ({
  users: [
    {
      key: 1,
      name: 'admin',
      email: 'admin',
      password: 'admin',
    },
  ],
  addUsuario: usuario =>
    set(state => ({
      users: [...state.users, {...usuario, key: generateRandomKey()}],
    })),
  removeUsuario: (key: number) =>
    set(state => ({
      users: state.users.filter(usuario => usuario.key !== key),
    })),
}));

// Store de cursos salvos
type CursosSalvosStore = {
  cursosSalvos: Curso[];
  addCurso: (curso: Curso) => void;
  removeCurso: (key: number) => void;
};

export const useCursosSalvosStore = create<CursosSalvosStore>(set => ({
  cursosSalvos: [
    {
      key: 1,
      name: 'zustand salvos',
      duration: '2h30min',
      brief: 'Advanced mobile interface design',
      about:
        'Completed UI Design Essentials Course at Design Academy, Anytown, USA (July 2024). Proficient in UI design principles, wireframing, prototyping tools, and user-centered design. Developed practical projects focusing on creating intuitive and visually appealing interfaces',
      price: 50,
    },
  ],
  addCurso: curso =>
    set(state => ({
      cursosSalvos: [
        ...state.cursosSalvos,
        {...curso, key: generateRandomKey()},
      ],
    })),
  removeCurso: (key: number) =>
    set(state => ({
      cursosSalvos: state.cursosSalvos.filter(curso => curso.key !== key),
    })),
}));

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
      name: 'zustand Yours',
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

type Category = {
  key: number;
  name: string;
};

type Categories = {
  categories: Category[];
};

export const useCategoryStore = create<Categories>(() => ({
  categories: [
    {key: 1, name: '#CSS'},
    {key: 2, name: '#UX'},
    {key: 3, name: '#Swift'},
    {key: 4, name: '#UI'},
  ],
}));
