export interface BaseEntity {
  id: string | null;
  title?: string | null;
}

export interface Foodie extends BaseEntity {
  nickName: string;
  firstName: string;
  lastName: string;
  email: string;
  type: string;
  meals?: Meal[];
}

export interface Meal extends BaseEntity {
  title: string;
  description: string;
  type: string;
  time: string;
  appetizer?: string;
  mainDish?: string;
  dessert?: string;
  foodieId: string;
}
