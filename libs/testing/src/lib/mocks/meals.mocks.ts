import { Meal } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockMealsFacade = {
  loadMeals: () => {},
  selectMeal: () => {},
  deleteMeal: () => {},
  updateMeal: () => {},
  createMeal: () => {},
  mutations$: of(true),
};

export const mockMealsService = {
  all: () => of([]),
  find: () => of({ ...mockMeal }),
  create: () => of({ ...mockMeal }),
  update: () => of({ ...mockMeal }),
  delete: () => of({ ...mockMeal }),
};

export const mockMeal = {
  id: '0',
  title: 'mock',
  description: 'mock',
  type: 'mock',
  time: 'mock',
  foodieId: 'mock',
};

export const mockEmptyMeal = {
  id: null,
  title: 'mockEmpty',
  description: 'mockEmpty',
  type: 'mockEmpty',
  time: 'mockEmpty',
  foodieId: 'mockEmpty',
};
