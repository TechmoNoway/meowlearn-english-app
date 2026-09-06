import { isAdmin } from "@/lib/admin";
import { redirect } from "next/navigation";
import { AdminClient } from "./admin-client";

const AdminPage = async () => {
  if (!(await isAdmin())) {
    redirect("/");
  }

  return <AdminClient />;
};

export default AdminPage;
