'use client';

import { User } from '@/models/user';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'username',
    header: 'Username',
  },
  {
    accessorKey: 'role',
    header: 'Role',
  },
];
