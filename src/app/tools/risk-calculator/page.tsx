"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Calculator, 
  RefreshCcw, 
  DollarSign, 
  Percent, 
  Target, 
  ShieldAlert, 
  ArrowRightLeft,
  Copy,
  Check
} from "lucide-react";

export default function RiskCalculator() {
  const [accountSize, setAccountSize] = useState("10000");
  const [riskPercent, setRiskPercent] = useState("1");
  const [entryPrice, setEntryPrice] = useState("100");
  const [stopLoss, setStopLoss] = useState("95");
  const [copied, setCopied] = useState(false);
  
  const [result, setResult] = useState({
    amountToRisk: 0,
    positionSize: 0,
    totalValue: 0,
  });

  // Smooth Calculation Logic
  useEffect(() => {
    const acc = parseFloat(accountSize) || 0;
    const riskP = parseFloat(riskPercent) || 0;
    const entry = parseFloat(entryPrice) || 0;
    const stop = parseFloat(stopLoss) || 0;

    const amountToRisk = (acc * riskP) / 100;
    const riskPerShare = Math.abs(entry - stop);
    
    if (riskPerShare > 0) {
      const posSize = amountToRisk / riskPerShare;
      setResult({
        amountToRisk: Math.round(amountToRisk),
        positionSize: Number(posSize.toFixed(2)),
        totalValue: Number((posSize * entry).toFixed(2)),
      });
    }
  }, [accountSize, riskPercent, entryPrice, stopLoss]);

  // Copy Function
  const copyToClipboard = () => {
    navigator.clipboard.writeText(result.positionSize.toString());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const inputFields = [
    { label: "Account Size", val: accountSize, set: setAccountSize, icon: <DollarSign size={18}/>, color: "text-blue-500" },
    { label: "Risk Amount (%)", val: riskPercent, set: setRiskPercent, icon: <Percent size={18}/>, color: "text-orange-500" },
    { label: "Entry Price", val: entryPrice, set: setEntryPrice, icon: <Target size={18}/>, color: "text-emerald-500" },
    { label: "Stop Loss", val: stopLoss, set: setStopLoss, icon: <ShieldAlert size={18}/>, color: "text-red-500" },
  ];

  return (
    <section className="min-h-screen bg-[#F7FCF9] py-24 px-6 selection:bg-emerald-100">
      <div className="max-w-6xl mx-auto">
        
        {/* HEADER */}
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-emerald-100 rounded-full text-emerald-600 mb-4 shadow-sm"
          >
            <Calculator size={14} />
            <span className="text-[10px] font-black uppercase tracking-widest text-emerald-700">Institutional Sizing Tool</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-black text-slate-900 tracking-tighter">
            Smart <span className="text-emerald-600">Sizing.</span>
          </h1>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          
          {/* INPUT SECTION */}
          <div className="lg:col-span-7 bg-white p-8 md:p-10 rounded-[2.5rem] border border-slate-100 shadow-sm space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              {inputFields.map((item, i) => (
                <div key={i} className="space-y-3">
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest ml-1">
                    {item.label}
                  </label>
                  <div className="relative">
                    <div className={`absolute left-5 top-1/2 -translate-y-1/2 ${item.color}`}>
                      {item.icon}
                    </div>
                    <input
                      type="number"
                      value={item.val}
                      onChange={(e) => item.set(e.target.value)}
                      className="w-full bg-slate-50 border-2 border-slate-50 rounded-2xl py-5 pl-14 pr-6 
                               text-xl font-black text-slate-900 focus:bg-white focus:border-emerald-500 
                               outline-none transition-all shadow-inner [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
                      placeholder="0.00"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RESULTS SECTION */}
          <div className="lg:col-span-5 bg-slate-900 rounded-[2.5rem] p-10 md:p-12 text-white shadow-2xl flex flex-col justify-between relative overflow-hidden">
             {/* Abstract background glow */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 blur-[80px] rounded-full -mr-20 -mt-20" />

            <div className="relative z-10 space-y-12">
              <header className="flex justify-between items-center border-b border-white/10 pb-6">
                <span className="text-emerald-400 text-[10px] font-black uppercase tracking-[0.4em]">Order Details</span>
                <ArrowRightLeft size={18} className="text-slate-600" />
              </header>

              <div className="group cursor-pointer" onClick={copyToClipboard}>
                <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2 flex items-center gap-2">
                  Quantity to Buy <Copy size={12} className="text-emerald-500 group-hover:scale-110 transition-transform" />
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-7xl font-black text-white tracking-tighter">
                    {result.positionSize}
                  </span>
                  <span className="text-emerald-500 font-bold text-sm uppercase italic">Units</span>
                </div>
                {/* Copy Feedback */}
                <AnimatePresence>
                  {copied && (
                    <motion.span 
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0 }}
                      className="text-xs text-emerald-400 font-bold flex items-center gap-1 mt-2"
                    >
                      <Check size={12} /> Copied to clipboard
                    </motion.span>
                  )}
                </AnimatePresence>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="p-5 bg-white/5 rounded-3xl border border-white/5">
                  <p className="text-slate-500 text-[9px] font-black uppercase mb-1 tracking-wider">Risk Amount</p>
                  <p className="text-2xl font-black text-red-400">${result.amountToRisk}</p>
                </div>
                <div className="p-5 bg-white/5 rounded-3xl border border-white/5">
                  <p className="text-slate-500 text-[9px] font-black uppercase mb-1 tracking-wider">Total Value</p>
                  <p className="text-2xl font-black text-white">${result.totalValue}</p>
                </div>
              </div>
            </div>

            <button 
              onClick={() => { setAccountSize("10000"); setRiskPercent("1"); setEntryPrice("100"); setStopLoss("95"); }}
              className="mt-12 py-5 bg-white/5 hover:bg-white text-white hover:text-slate-900 rounded-[1.5rem] border border-white/10 transition-all duration-500 font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2"
            >
              <RefreshCcw size={14} /> Refresh Terminal
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}