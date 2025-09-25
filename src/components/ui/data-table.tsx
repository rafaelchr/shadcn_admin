"use client";

import * as React from "react";
import {
  ColumnDef,
  useReactTable,
  getCoreRowModel,
  getPaginationRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getUsers } from "@/services/user-service";
import { User } from "@/models/user";
import { Button } from "@/components/ui/button"; // Asumsi Anda menggunakan komponen button yang sesuai

interface DataTableProps {
  columns: ColumnDef<User, unknown>[];
  data: User[];
  totalPages?: number;
}

export function DataTable({ columns, data, totalPages = 1 }: DataTableProps) {
  const [pageIndex, setPageIndex] = React.useState(0);
  const [tableData, setTableData] = React.useState<User[]>(data);

  // Efek untuk mengambil data baru saat pageIndex berubah
  React.useEffect(() => {
    const fetchData = async () => {
      const res = await getUsers(pageIndex, 20);
      setTableData(res.data);
    };
    console.log(pageIndex);
    fetchData();
  }, [pageIndex]);

  const table = useReactTable({
    data: tableData,
    columns,
    pageCount: totalPages,
    state: {
      pagination: { pageIndex, pageSize: 20 },
    },
    onPaginationChange: (updater) => {
      const next =
        typeof updater === "function"
          ? updater({ pageIndex, pageSize: 20 })
          : updater;
      setPageIndex(next.pageIndex);
    },
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    manualPagination: true,
  });

  return (
    <div>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id}>
                  {header.isPlaceholder
                    ? null
                    : header.column.columnDef.header?.toString()}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {cell.renderValue() as React.ReactNode}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex justify-between py-4">
        <Button
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <span>
          Page {pageIndex + 1} of {totalPages}
        </span>
        <Button
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
