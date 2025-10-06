import { Film } from '@/models/film';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<Film>[] = [
  {
    accessorKey: 'title',
    header: 'Title',
  },
  {
    accessorKey: 'description',
    header: 'Description',
  },
  {
    accessorKey: 'username',
    header: 'Created By',
  },
];
