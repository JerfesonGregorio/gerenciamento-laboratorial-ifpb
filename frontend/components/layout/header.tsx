"use client";

import { UserDropdown } from "@/components/layout/user-dropdown";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4 bg-[#222e3e] text-white rounded-md shadow-md">
      <div className="font-semibold text-lg md:text-xl tracking-wide select-none">
        LabSchedule
      </div>

      <UserDropdown />
    </header>
  );
}
