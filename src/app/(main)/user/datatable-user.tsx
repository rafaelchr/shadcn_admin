"use client";

import { DataTable } from "@/components/ui/data-table";
import { getUsers } from "@/services/user-service";
import { columns } from "./columns";
import { User } from "@/models/user";

export function DataTableUser({
  initialData,
  totalPages,
}: {
  initialData: User[];
  totalPages: number;
}) {
  return (
    <DataTable
      columns={columns}
      data={initialData}
      totalPages={totalPages}
      initialPageSize={10}
      fetchData={(pageIndex, pageSize) =>
        getUsers(pageIndex, pageSize).then((res) => ({
          data: res.data,
          totalPages: res.totalPages
        }))
      }
    />
  );
}
