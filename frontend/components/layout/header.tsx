import { User } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#222e3e] text-white rounded-md shadow-md">
      <div className="font-semibold text-lg md:text-xl tracking-wide select-none">
        LabSchedule
      </div>

      <Button
        variant="secondary"
        size="icon"
        className="rounded-full bg-white text-[#222e3e] hover:bg-slate-200 h-12 w-12 border-none"
      >
        <User className="h-6 w-6" strokeWidth={2} />
      </Button>
    </header>
  );
}
