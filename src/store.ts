import {create} from 'zustand';

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
      name: 'ad', 
      email: 'ad', 
      password: 'ad'
    }
  ],
  addUsuario: (name, email, password)  => 
    set(state => ({users: [...state.users, {name, email, password}]})),
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
    set(state => ({cursosSalvos: [...state.cursosSalvos, curso]})),
  removeCurso: (key: number) =>
    set(state => ({
      cursosSalvos: state.cursosSalvos.filter(curso => curso.key !== key),
    })),
}));

// Store de seus cursos
type YourCoursesStore = {
  yourCourses: Curso[];
};

export const useYourCourses = create<YourCoursesStore>(() => ({
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
}));
