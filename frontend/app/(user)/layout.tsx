import { Header } from "@/components/layout/header";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="py-4 px-8 w-full mx-auto">
        <Header />
      </div>
      <main className="flex-1 w-full mx-auto">{children}</main>
    </div>
  );
}