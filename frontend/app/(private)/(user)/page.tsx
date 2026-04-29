"use client";

import { Plus, Info } from "lucide-react";

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
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];

const years = ["2024", "2025", "2026", "2027", "2028"];

export default function LabSchedule() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans antialiased">
      <main className="w-full px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
          <div className="flex items-center gap-1 bg-white border border-slate-200 p-1 rounded-xl shadow-sm">
            <Select defaultValue="Janeiro">
              <SelectTrigger className="w-32 border-none bg-transparent h-10 shadow-none focus:ring-0 text-slate-700 font-medium">
                <SelectValue placeholder="Mês" />
              </SelectTrigger>
              <SelectContent>
                {months.map((m) => (
                  <SelectItem key={m} value={m}>
                    {m}
                  </SelectItem>
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
                  <SelectItem key={y} value={y}>
                    {y}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button className="bg-[#61d000] hover:bg-[#54b500] text-white font-bold py-6 px-6 rounded-xl text-sm shadow-sm border-none flex items-center gap-2 transition-transform active:scale-95">
            <Plus className="w-5 h-5 stroke-[3px]" />
            Adicionar laboratório
          </Button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-8 flex flex-col">
            <div className="flex-1 bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
              <CalendarGrid />
            </div>
          </div>

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
                <p className="text-[13px] text-slate-400 font-medium leading-relaxed max-w-55">
                  Selecione uma data para visualizar horários disponíveis.
                </p>
              </div>
            </div>

            <Button className="w-full bg-[#61d000] hover:bg-[#54b500] text-white font-bold py-8 rounded-xl text-base shadow-sm border-none transition-transform active:scale-[0.99]">
              Enviar solicitação
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
}
