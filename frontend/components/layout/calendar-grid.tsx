
const daysOfWeek = ["DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"];

const calendarData = [
  { day: "1", status: null },
  { day: "2", status: "Ocupado" },
  { day: "3", status: "Ocupado" },
  { day: "4", status: "Livre" },
  { day: "5", status: "Livre" },
  { day: "6", status: "Livre" },
  { day: "7", status: null },
  { day: "9", status: null },
  { day: "9", status: "Ocupado" },
  { day: "10", status: "Livre" },
  { day: "12", status: "Ocupado" },
  { day: "12", status: "Livre" },
  { day: "13", status: "Livre" },
  { day: "14", status: null },
  { day: "15", status: null },
  { day: "17", status: "Ocupado" },
  { day: "18", status: "Ocupado" },
  { day: "18", status: "Livre" },
  { day: "19", status: "Ocupado" },
  { day: "20", status: "Livre" },
  { day: "21", status: null },
  { day: "22", status: null },
  { day: "23", status: "Livre" },
  { day: "24", status: "Livre" },
  { day: "25", status: "Ocupado" },
  { day: "26", status: "Ocupado" },
  { day: "27", status: "Ocupado" },
  { day: "28", status: null },
  { day: "29", status: null },
  { day: "30", status: "Ocupado" },
  { day: "31", status: "Livre" },
  { day: "1", status: null, muted: true },
  { day: "2", status: null, muted: true },
  { day: "3", status: null, muted: true },
  { day: "4", status: null, muted: true },
];

export const CalendarGrid = () => {
  return (
    <div className="bg-white rounded-lg border border-slate-200 overflow-hidden shadow-sm h-full">
      <div className="grid grid-cols-7 border-b border-slate-100">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="py-3 px-4 text-[11px] font-bold text-slate-400 border-r border-slate-100 last:border-r-0 uppercase"
          >
            {day}
          </div>
        ))}
      </div>
      <div className="grid grid-cols-7">
        {calendarData.map((item, index) => (
          <div
            key={index}
            className={`min-h-27.5 border-r border-b border-slate-100 p-3 last:border-r-0 flex flex-col justify-between ${
              item.muted ? "bg-slate-50/50" : "bg-white"
            }`}
          >
            <span
              className={`text-sm font-bold ${item.muted ? "text-slate-300" : "text-slate-800"}`}
            >
              {item.day}
            </span>
            <div className="flex justify-center mb-1">
              {item.status === "Ocupado" && (
                <div className="bg-[#fff1f1] text-[#ff4d4d] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                  Ocupado
                </div>
              )}
              {item.status === "Livre" && (
                <div className="bg-[#eefbff] text-[#42cdff] text-[10px] font-bold px-2.5 py-1 rounded-md uppercase">
                  Livre
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
