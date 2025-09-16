import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { AppHeader } from "@/components/app-header";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <div className="w-full flex justify-between p-5 items-center ">
          <SidebarTrigger />
          <AppHeader />
        </div>
        <hr />
        <div className="p-5">
          {children}
        </div>
      </main>
    </SidebarProvider>
  );
}