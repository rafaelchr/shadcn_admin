// app/users/page.tsx
import { getServerUsers } from "@/services/server-user-service";
import { DataTableUser } from "./datatable-user";

export default async function UserPage() {
  const { data: users, totalPages } = await getServerUsers(0, 10);

  return (
    <div>
      <h1 className="text-xl font-medium uppercase">User Management</h1>
      <div className="container mx-auto py-10">
        <DataTableUser initialData={users} totalPages={totalPages} />
      </div>
    </div>
  );
}
