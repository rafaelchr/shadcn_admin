"use client";

import { DataTable } from "@/components/ui/data-table";
import { columns } from "./columns";
import { Film } from "@/models/film";
import { getFilms } from "@/services/film-service";

export function DataTableFilm({
  initialData,
  totalPages,
}: {
  initialData: Film[];
  totalPages: number;
}) {
  return (
    <DataTable
      columns={columns}
      data={initialData}
      totalPages={totalPages}
      initialPageSize={10}
      fetchData={(pageIndex, pageSize) =>
        getFilms(pageIndex, pageSize).then((res) => ({
          data: res.data,
          totalPages: res.totalPages
        }))
      }
    />
  );
}
