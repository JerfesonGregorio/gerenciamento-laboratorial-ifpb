// "use client";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import { User, LogOut } from "lucide-react";
// import { useRouter } from "next/navigation";

// export function UserDropdown() {
//   const router = useRouter();

//   const handleLogout = () => {
//     router.push("/login");
//   };

//   return (
//     <DropdownMenu>
//       <DropdownMenuTrigger asChild>
//         <button className="w-10 h-10 rounded-full bg-[#88c000] flex items-center justify-center hover:bg-[#79ac00] transition-colors cursor-pointer outline-none">
//           <User size={20} className="text-white" />
//         </button>
//       </DropdownMenuTrigger>

//       <DropdownMenuContent align="end" className="w-44">
//         <DropdownMenuItem
//           disabled
//           className="flex items-center gap-2 text-muted-foreground cursor-not-allowed"
//         >
//           <User size={16} />
//           Profile
//         </DropdownMenuItem>

//         <DropdownMenuSeparator />

//         <DropdownMenuItem
//           onClick={handleLogout}
//           className="flex items-center gap-2 text-red-500 hover:text-red-600 cursor-pointer"
//         >
//           <LogOut size={16} />
//           Sair
//         </DropdownMenuItem>
//       </DropdownMenuContent>
//     </DropdownMenu>
//   );
// }
// components/layout/user-dropdown.tsx
"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export function UserDropdown() {
  const router = useRouter();

  const handleLogout = () => {
    router.push("/login");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center hover:bg-slate-200 transition-colors cursor-pointer outline-none">
          <User size={20} className="text-[#222e3e]" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent align="end" className="w-44">
        <DropdownMenuItem
          disabled
          className="flex items-center gap-2 text-muted-foreground cursor-not-allowed"
        >
          <User size={16} />
          Profile
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem
          onClick={handleLogout}
          className="flex items-center gap-2 text-red-500 hover:text-red-600 cursor-pointer"
        >
          <LogOut size={16} />
          Sair
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
