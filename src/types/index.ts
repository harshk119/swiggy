export interface Category {
  id: number;
  title: string;
  image: string;
}

export interface Restaurant {
  id: number;
  name: string;
  image: string;
  offer: string;
  rating: number;
  time: string;
}

export interface SwiggyData {
  categories: Category[];
  restaurants: Restaurant[];
}
