import { getServerUsers } from "@/services/server-service";
import { DataTableUser } from "./data-table-user";

const UserPage = async () => {
  const { data: users, totalPages } = await getServerUsers(0, 10);

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-xl font-medium uppercase">User Management</h1>
      <div className="container mx-auto">
        <DataTableUser initialData={users} totalPages={totalPages} />
      </div>
    </div>
  );
}

export default UserPage;
