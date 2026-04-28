import { Header } from "@/components/layout/header";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <div className="p-4 w-full max-w-screen-2xl mx-auto">
        <Header />
      </div>

      <main className="flex-1 w-full max-w-screen-2xl mx-auto px-4 pb-6">
        {children}
      </main>
    </div>
  );
}
