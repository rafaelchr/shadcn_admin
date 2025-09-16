import { columns, Payment } from "./columns";
import { DataTable } from "@/components/ui/data-table";

async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    {
      id: "128ed52g",
      amount: 110,
      status: "success",
      email: "m@example.com",
    },
  ];
}

const page = async () => {
  const data = await getData();

  return (
    <div className="">
      <h1 className="text-xl font-medium uppercase">User Management</h1>
      <div className="container mx-auto py-10">
        <DataTable columns={columns} data={data} />
      </div>
    </div>
  );
};

export default page;
