import {create} from 'zustand';


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
