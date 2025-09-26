// user/page.tsx

import { getServerUsers } from "@/services/server-user-service"; // Import fungsi khusus server
import { columns } from "./columns";
import { DataTable } from "@/components/ui/data-table";

export default async function UserPage() {
  // Panggil fungsi khusus server di sini
  const { data: users, total, totalPages } = await getServerUsers(0, 10);

  return (
    <div>
      <h1 className="text-xl font-medium uppercase">User Management</h1>
      <div className="container mx-auto py-10">
        <DataTable
          columns={columns}
          data={users}
          totalPages={totalPages}
          initialPageSize={10}
        />
      </div>
    </div>
  );
}