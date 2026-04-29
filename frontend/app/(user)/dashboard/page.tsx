"use client";

import { useState } from "react";
import { Monitor, Info } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CalendarGrid } from "@/components/layout/calendar-grid";

const months = [
  "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
  "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro",
];

const years = ["2024", "2025", "2026", "2027", "2028"];

const labs = [
  "Laboratório 1",
  "Laboratório 2",
  "Laboratório 3",
  "Laboratório 4",
  "Laboratório 5",
];

export default function UserDashboard() {
  const [selectedLab, setSelectedLab] = useState<string | null>(null);

  return (
    <div className="w-full px-4 py-8">

      {/* Labs */}
      <div className="flex flex-wrap gap-3 mb-8">
        {labs.map((lab) => (
          <button
            key={lab}
            onClick={() => setSelectedLab(lab)}
            className={`flex items-center gap-2 px-6 py-4 rounded-xl font-semibold text-sm text-white transition-all active:scale-95 shadow-sm
              ${selectedLab === lab
                ? "bg-[#54b500] ring-2 ring-[#61d000] ring-offset-2"
                : "bg-[#61d000] hover:bg-[#54b500]"
              }`}
          >
            <Monitor className="w-4 h-4" />
            {lab}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

        {/* Calendar side */}
        <div className="lg:col-span-8 flex flex-col gap-4">

          {/* Month/Year selectors */}
          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shadow-sm w-fit">
            <Select defaultValue="Janeiro">
              <SelectTrigger className="w-32 border-none bg-transparent h-10 shadow-none focus:ring-0 text-slate-700 font-medium">
                <SelectValue placeholder="Mês" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m} value={m}>{m}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <div className="w-px h-6 bg-slate-100" />

            <Select defaultValue="2026">
              <SelectTrigger className="w-24 border-none bg-transparent h-10 shadow-none focus:ring-0 text-slate-700 font-medium">
                <SelectValue placeholder="Ano" />
              </SelectTrigger>
              <SelectContent>
                {years.map((y) => (
                  <SelectItem key={y} value={y}>{y}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Calendar */}
          <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
            <CalendarGrid />
          </div>
        </div>

        {/* Right panel */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm flex flex-col">
            <div className="py-6 text-center border-b border-slate-100">
              <h2 className="text-[13px] font-bold text-slate-700 tracking-wide uppercase">
                Disponibilidade de horários
              </h2>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center p-10 text-center gap-6">
              <div className="w-10 h-10 border-2 border-slate-400 rounded-full flex items-center justify-center">
                <Info className="text-slate-400 w-6 h-6 stroke-[2px]" />
              </div>
              <p className="text-[13px] text-slate-400 font-medium leading-relaxed max-w-[220px]">
                Selecione uma data para visualizar horários disponíveis.
              </p>
            </div>
          </div>

          <Button
            disabled={!selectedLab}
            className="w-full bg-[#61d000] hover:bg-[#54b500] disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-8 rounded-xl text-base shadow-sm border-none transition-transform active:scale-[0.99]"
          >
            Enviar solicitação
          </Button>
        </div>
      </div>
    </div>
  );
}