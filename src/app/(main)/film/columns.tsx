"use client";

import { Film } from "@/models/film";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import ImageCell from "./image-cell";

export const columns: ColumnDef<Film>[] = [
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "description",
    header: "Description",
  },
  {
    accessorKey: "url",
    header: "URL Link",
    cell: ({ row }) => {
      const url = row.original.url;
      return url ? (
        <Link
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Click Here!
        </Link>
      ) : (
        <span className="text-gray-400 italic">No link</span>
      );
    },
  },
  {
    accessorKey: "imageUrl",
    header: "Poster",
    cell: ({ row }) => <ImageCell imagePath={row.original.imagePath} />,
  },
  {
    accessorKey: "username",
    header: "Created By",
  },
];
