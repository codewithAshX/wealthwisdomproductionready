"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { TrendingUp, Percent } from "lucide-react";

export default function ProfitSimulator() {
  const [initialCapital, setInitialCapital] = useState(1000);
  const [monthlyReturn, setMonthlyReturn] = useState(10);
  const [months, setMonths] = useState(12);

  const calculateGrowth = () => {
    return initialCapital * Math.pow((1 + monthlyReturn / 100), months);
  };

  const finalAmount = calculateGrowth().toLocaleString(undefined, { maximumFractionDigits: 0 });

  return (
    <div className="min-h-screen bg-[#F7FCF9] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        <div className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
            Profit <span className="text-emerald-600">Simulator.</span>
          </h1>
          <p className="mt-4 text-slate-500 font-normal">Visualize your capital growth over time with compound returns.</p>
        </div>

        <div className="bg-white rounded-[2.5rem] border border-emerald-100 p-10 shadow-sm overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-5">
            <TrendingUp size={200} className="text-emerald-600" />
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Initial Capital</label>
              <input 
                type="number" 
                value={initialCapital} 
                onChange={(e) => setInitialCapital(Number(e.target.value))}
                className="text-3xl font-bold text-slate-900 bg-transparent border-b-2 border-emerald-100 focus:border-emerald-500 outline-none w-full"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Monthly Return (%)</label>
              <input 
                type="number" 
                value={monthlyReturn} 
                onChange={(e) => setMonthlyReturn(Number(e.target.value))}
                className="text-3xl font-bold text-emerald-600 bg-transparent border-b-2 border-emerald-100 focus:border-emerald-500 outline-none w-full"
              />
            </div>
            <div>
              <label className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-3">Duration (Months)</label>
              <input 
                type="number" 
                value={months} 
                onChange={(e) => setMonths(Number(e.target.value))}
                className="text-3xl font-bold text-slate-900 bg-transparent border-b-2 border-emerald-100 focus:border-emerald-500 outline-none w-full"
              />
            </div>
          </div>

          <div className="mt-16 pt-10 border-t border-emerald-50">
             <p className="text-sm font-bold text-slate-400 uppercase mb-2">Projected Balance</p>
             <p className="text-6xl md:text-8xl font-black tracking-tighter text-slate-900">${finalAmount}</p>
             <p className="mt-4 text-emerald-600 font-medium flex items-center gap-2">
               <Percent size={16}/> Total Growth: {((calculateGrowth()/initialCapital - 1) * 100).toFixed(0)}%
             </p>
          </div>
        </div>
      </div>
    </div>
  );
}