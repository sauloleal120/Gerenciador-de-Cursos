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
