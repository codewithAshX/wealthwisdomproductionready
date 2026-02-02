"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Calculator, Info, RefreshCcw } from "lucide-react";

export default function RiskCalculator() {
  const [accountSize, setAccountSize] = useState<number>(10000);
  const [riskPercent, setRiskPercent] = useState<number>(1);
  const [entryPrice, setEntryPrice] = useState<number>(100);
  const [stopLoss, setStopLoss] = useState<number>(95);
  
  const [result, setResult] = useState({
    amountToRisk: 0,
    positionSize: 0,
    totalValue: 0,
  });

  const calculateRisk = () => {
    const amountToRisk = (accountSize * riskPercent) / 100;
    const riskPerShare = Math.abs(entryPrice - stopLoss);
    
    if (riskPerShare > 0) {
      const positionSize = amountToRisk / riskPerShare;
      setResult({
        amountToRisk,
        positionSize: Number(positionSize.toFixed(2)),
        totalValue: Number((positionSize * entryPrice).toFixed(2)),
      });
    }
  };

  useEffect(() => {
    calculateRisk();
  }, [accountSize, riskPercent, entryPrice, stopLoss]);

  return (
    <div className="min-h-screen bg-[#F7FCF9] pt-32 pb-20 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-12">
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-3 text-emerald-600 mb-4"
          >
            <div className="p-2 bg-emerald-100 rounded-lg">
              <Calculator size={20} />
            </div>
            <span className="text-xs font-bold tracking-[0.2em] uppercase">Trading Tools</span>
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tighter text-slate-900">
            Risk <span className="text-emerald-600">Calculator.</span>
          </h1>
          <p className="mt-4 text-slate-500 max-w-xl font-normal leading-relaxed">
            Protect your capital by calculating the exact position size based on your risk appetite and stop-loss levels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          
          {/* INPUTS CARD */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-[2rem] border border-emerald-100 p-8 shadow-sm"
          >
            <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
              Parameters <Info size={16} className="text-slate-400" />
            </h3>
            
            <div className="space-y-6">
              {[
                { label: "Account Size ($)", val: accountSize, set: setAccountSize },
                { label: "Risk (%)", val: riskPercent, set: setRiskPercent },
                { label: "Entry Price", val: entryPrice, set: setEntryPrice },
                { label: "Stop Loss", val: stopLoss, set: setStopLoss },
              ].map((input, idx) => (
                <div key={idx}>
                  <label className="block text-xs font-bold text-slate-500 uppercase mb-2 tracking-wide">
                    {input.label}
                  </label>
                  <input
                    type="number"
                    value={input.val}
                    onChange={(e) => input.set(Number(e.target.value))}
                    className="w-full bg-[#F7FCF9] border border-emerald-50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all font-medium"
                  />
                </div>
              ))}
            </div>
          </motion.div>

          {/* RESULTS CARD */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-emerald-600 rounded-[2rem] p-8 text-white shadow-2xl shadow-emerald-200 flex flex-col justify-between"
          >
            <div>
              <h3 className="text-emerald-200 text-sm font-bold uppercase tracking-widest mb-8">Calculation Result</h3>
              
              <div className="space-y-8">
                <div>
                  <p className="text-emerald-100/60 text-xs font-bold uppercase mb-1">Position Size</p>
                  <p className="text-5xl font-extrabold tracking-tighter">{result.positionSize} <span className="text-xl font-normal opacity-60">Units</span></p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-emerald-100/60 text-xs font-bold uppercase mb-1">Amount at Risk</p>
                    <p className="text-xl font-bold">${result.amountToRisk}</p>
                  </div>
                  <div>
                    <p className="text-emerald-100/60 text-xs font-bold uppercase mb-1">Total Trade Value</p>
                    <p className="text-xl font-bold">${result.totalValue}</p>
                  </div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => { setAccountSize(10000); setRiskPercent(1); }}
              className="mt-12 flex items-center justify-center gap-2 w-full py-4 bg-white/10 hover:bg-white/20 rounded-xl border border-white/20 transition-all font-bold text-sm"
            >
              <RefreshCcw size={16} /> Reset Calculator
            </button>
          </motion.div>

        </div>
      </div>
    </div>
  );
}