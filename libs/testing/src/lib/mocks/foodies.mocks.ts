import { Foodie } from '@bba/api-interfaces';
import { of } from 'rxjs';

export const mockFoodiesFacade = {
  loadFoodies: () => {},
  selectFoodie: () => {},
  deleteFoodie: () => {},
  updateFoodie: () => {},
  createFoodie: () => {},
  mutations$: of(true),
};

export const mockFoodiesService = {
  all: () => of([]),
  find: () => of({ ...mockFoodie }),
  create: () => of({ ...mockFoodie }),
  update: () => of({ ...mockFoodie }),
  delete: () => of({ ...mockFoodie }),
};

export const mockFoodie = {
  id: '0',
  nickName: 'mock',
  type: 'mock',
  firstName: 'mock',
  lastName: 'mock',
  email: 'mock',
};

export const mockEmptyFoodie = {
  id: null,
  nickName: 'mockEmpty',
  type: 'mockEmpty',
  description: 'mockEmpty',
  firstName: 'mockEmpty',
  lastName: 'mockEmpty',
  email: 'mockEmpty',
};
