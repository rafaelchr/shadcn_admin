import { getServerFilms } from "@/services/server-service";
import { DataTableFilm } from "./data-table-film";
import CreateFilmDialog from "./create-film-dialog";

const FilmPage = async () => {
  const { data: films, totalPages } = await getServerFilms(0, 10);

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between">
        <h1 className="text-xl font-medium uppercase">Film Management</h1>
        <CreateFilmDialog />
      </div>
      <div className="container mx-auto">
        <DataTableFilm initialData={films} totalPages={totalPages} />
      </div>
    </div>
  );
};

export default FilmPage;
