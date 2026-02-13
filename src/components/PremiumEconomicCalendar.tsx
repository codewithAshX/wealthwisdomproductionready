"use client";

import { useEffect, useState } from "react";
new Date(event.date).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })

import { motion } from "framer-motion";

type Event = {
  id: string;
  title: string;
  country: string;
  impact: number;
  date: string;
  actual?: string;
  forecast?: string;
  previous?: string;
};

const impactColors = {
  1: "bg-emerald-100 text-emerald-700",
  2: "bg-amber-100 text-amber-700",
  3: "bg-red-100 text-red-700",
};

export default function PremiumEconomicCalendar() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [highImpactOnly, setHighImpactOnly] = useState(false);

 useEffect(() => {
  async function fetchData() {
    try {
      const res = await fetch(
        "https://financialmodelingprep.com/api/v3/economic_calendar?apikey=demo"
      );

      const json = await res.json();

      // 🚨 SAFETY CHECK
      if (!Array.isArray(json)) {
        console.error("Invalid API response:", json);
        setLoading(false);
        return;
      }

      const formatted = json.map((e: any, i: number) => ({
        id: i,
        title: e.event,
        country: e.country,
        impact:
          e.impact === "High"
            ? 3
            : e.impact === "Medium"
            ? 2
            : 1,
        date: e.date,
        actual: e.actual,
        forecast: e.estimate,
        previous: e.previous,
      }));

      setEvents(formatted);
      setLoading(false);
    } catch (err) {
      console.error("Calendar fetch failed:", err);
      setLoading(false);
    }
  }

  fetchData();
}, []);


  const filtered = highImpactOnly
    ? events.filter((e) => e.impact === 3)
    : events;

  return (
    <section className="bg-[#FCFCFC] py-24">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* HEADER */}
        <div className="flex justify-between items-center mb-12">
          <div>
            <h2 className="text-5xl font-light text-slate-900 tracking-tight">
              Economic Calendar
            </h2>
            <p className="text-slate-500 mt-3">
              Institutional macroeconomic events impacting liquidity flows.
            </p>
          </div>

          <button
            onClick={() => setHighImpactOnly(!highImpactOnly)}
            className={`px-6 py-3 rounded-full text-sm font-bold transition-all ${
              highImpactOnly
                ? "bg-red-600 text-white"
                : "bg-white border border-slate-200"
            }`}
          >
            High Impact Only
          </button>
        </div>

        {/* TABLE */}
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">

          {loading ? (
            <div className="p-20 text-center text-slate-400">
              Loading economic events...
            </div>
          ) : (
            <div className="divide-y">

              {filtered.slice(0, 50).map((event) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="grid grid-cols-6 gap-4 p-6 items-center hover:bg-slate-50 transition"
                >
                  {/* TIME */}
                  <div className="text-sm text-slate-600 font-medium">
                    {format(new Date(event.date), "HH:mm")}
                  </div>

                  {/* COUNTRY */}
                  <div className="font-bold text-slate-900">
                    {event.country}
                  </div>

                  {/* TITLE */}
                  <div className="col-span-2 text-slate-800 font-medium">
                    {event.title}
                  </div>

                  {/* IMPACT */}
                  <div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${
                        impactColors[event.impact as 1 | 2 | 3]
                      }`}
                    >
                      {event.impact === 3
                        ? "HIGH"
                        : event.impact === 2
                        ? "MEDIUM"
                        : "LOW"}
                    </span>
                  </div>

                  {/* VALUES */}
                  <div className="text-xs text-slate-500">
                    <div>Act: {event.actual || "-"}</div>
                    <div>Fc: {event.forecast || "-"}</div>
                    <div>Prev: {event.previous || "-"}</div>
                  </div>
                </motion.div>
              ))}

            </div>
          )}
        </div>
      </div>
    </section>
  );
}
