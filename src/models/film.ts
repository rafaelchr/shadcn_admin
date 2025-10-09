export type Film = {
  id: number;
  title: string;
  description: string;
  imagePath: string;
  url: string;
  userId: number;
  username: string;
}

export type FilmResponse = {
  data: Film[];
  page: number;
  size: number;
  total: number;
  totalPages: number;
}