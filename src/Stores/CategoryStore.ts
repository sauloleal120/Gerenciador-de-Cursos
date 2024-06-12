import {create} from 'zustand';

type Category = {
  key: number;
  name: string;
};

type Categories = {
  categories: Category[];
  activeCategories: Category[];
  addActiveCategory: (category: Category) => void;
  removeActiveCategory: (key: number) => void;
};

export const useCategoryStore = create<Categories>(set => ({
  categories: [
    {key: 1, name: '#CSS'},
    {key: 2, name: '#UX'},
    {key: 3, name: '#Swift'},
    {key: 4, name: '#UI'},
    {key: 5, name: '#JavaScript'},
    {key: 6, name: '#React'},
    {key: 7, name: '#NodeJS'},
    {key: 8, name: '#TypeScript'},
    {key: 9, name: '#Python'},
    {key: 10, name: '#MachineLearning'},
    {key: 11, name: '#DataScience'},
    {key: 12, name: '#DevOps'},
    {key: 13, name: '#Docker'},
    {key: 14, name: '#Kubernetes'},
    {key: 15, name: '#CloudComputing'},
    {key: 16, name: '#AWS'},
    {key: 17, name: '#Azure'},
    {key: 18, name: '#GCP'},
    {key: 19, name: '#AI'},
    {key: 20, name: '#BigData'},
    {key: 21, name: '#WebDevelopment'},
    {key: 22, name: '#MobileDevelopment'},
    {key: 23, name: '#ProjectManagement'},
  ],
  activeCategories: [],
  addActiveCategory: category =>
    set(state => ({
      activeCategories: [...state.activeCategories, category],
    })),
  removeActiveCategory: key =>
    set(state => ({
      activeCategories: state.activeCategories.filter(cat => cat.key !== key),
    })),
}));
