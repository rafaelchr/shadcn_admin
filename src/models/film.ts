export type Film = {
  id: number;
  title: string;
  description: string;
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