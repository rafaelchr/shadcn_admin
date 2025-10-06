export type User = {
  username: string;
  role: string;
}

export type UserResponse = {
  data: User[];
  page: number;
  size: number;
  total: number;
  totalPages: number;
}