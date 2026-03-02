"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  ChevronDown,
  Info,
  Copy,
  Check,
  TrendingUp,
  Coins
} from "lucide-react";

export default function ForexRiskCalculator() {
  // Inputs
  const [accountCurrency, setAccountCurrency] = useState("USD");
  const [accountBalance, setAccountBalance] = useState("");
  const [riskPercent, setRiskPercent] = useState("");
  const [stopLossPips, setStopLossPips] = useState("");
  const [currencyPair, setCurrencyPair] = useState("EUR/USD");

  // State for calculated results
  const [results, setResults] = useState({
    amountAtRisk: 0,
    positionSize: 0,
    standardLots: 0,
    miniLots: 0,
    microLots: 0,
  });

  const [isCalculated, setIsCalculated] = useState(false);
  const [copied, setCopied] = useState(false);

  const calculateRisk = () => {
    const balance = parseFloat(accountBalance) || 0;
    const riskP = parseFloat(riskPercent) || 0;
    const pips = parseFloat(stopLossPips) || 0;

    if (balance > 0 && riskP > 0 && pips > 0) {
      const amountAtRisk = (balance * riskP) / 100;
      
      // Basic Forex calculation logic
      // Position Size = (Amount at Risk) / (Stop Loss in Pips * Pip Value)
      // For simplicity in this UI, we assume a standard $10/pip for 1 Standard Lot (USD base)
      const pipValueStandard = 10; 
      const unitsPerStandardLot = 100000;
      
      // Units calculation
      const totalUnits = (amountAtRisk / (pips * (pipValueStandard / unitsPerStandardLot)));
      
      setResults({
        amountAtRisk: Number(amountAtRisk.toFixed(2)),
        positionSize: Math.floor(totalUnits),
        standardLots: Number((totalUnits / 100000).toFixed(2)),
        miniLots: Number((totalUnits / 10000).toFixed(2)),
        microLots: Number((totalUnits / 1000).toFixed(2)),
      });
      setIsCalculated(true);
    }
  };

  const copyToClipboard = (val: string) => {
    navigator.clipboard.writeText(val);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="pt-32 pb-24 px-6 bg-[#FCFCFC] min-h-screen">
      <div className="max-w-5xl mx-auto">
        
        {/* HEADER */}
        <div className="mb-12">
          <h2 className="text-4xl font-bold text-slate-900 tracking-tight flex items-center gap-3">
            <div className="p-2 bg-emerald-500 rounded-xl text-white">
              <Calculator size={24} />
            </div>
            Position Size Calculator
          </h2>
          <p className="text-slate-500 mt-2 text-sm">Calculate precise lot sizes based on your risk parameters.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-[3rem] border border-slate-100 shadow-xl shadow-slate-200/50">
          
          {/* LEFT COLUMN: INPUTS (Matches Image) */}
          <div className="space-y-6">
            <InputSelect 
              label="Account Currency" 
              value={accountCurrency} 
              onChange={setAccountCurrency}
              options={["USD", "EUR", "GBP", "JPY"]}
            />

            <InputNumber 
              label="Account Balance" 
              value={accountBalance} 
              onChange={setAccountBalance}
              placeholder="e.g. 10000"
            />

            <InputNumber 
              label="Risk Percentage" 
              value={riskPercent} 
              onChange={setRiskPercent}
              placeholder="e.g. 1"
              suffix="%"
            />

            <InputNumber 
              label="Stop Loss (pips)" 
              value={stopLossPips} 
              onChange={setStopLossPips}
              placeholder="e.g. 20"
            />

            <InputSelect 
              label="Currency Pair" 
              value={currencyPair} 
              onChange={setCurrencyPair}
              options={["EUR/USD", "GBP/USD", "USD/JPY", "XAU/USD"]}
            />

            <button 
              onClick={calculateRisk}
              className="w-full py-5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-2xl font-bold text-lg transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98]"
            >
              Calculate
            </button>
          </div>

          {/* RIGHT COLUMN: RESULTS (Matches Image) */}
          <div className="bg-slate-50/50 rounded-[2.5rem] p-8 md:p-10 border border-slate-100">
            <div className="flex items-center justify-between mb-10 border-b border-slate-200 pb-6">
              <h3 className="text-3xl font-bold text-slate-800">Results</h3>
              <div className="bg-slate-900 text-white p-1.5 rounded-full">
                <ChevronDown size={16} />
              </div>
            </div>

            <div className="space-y-8">
              <ResultRow label="Amount at Risk" value={`$${results.amountAtRisk}`} isBold />
              <ResultRow label="Position Size (units)" value={results.positionSize.toLocaleString()} />
              <ResultRow 
                label="Standard Lots" 
                value={results.standardLots.toString()} 
                canCopy 
                onCopy={() => copyToClipboard(results.standardLots.toString())}
              />
              <ResultRow label="Mini Lots" value={results.miniLots.toString()} />
              <ResultRow label="Micro Lots" value={results.microLots.toString()} />
            </div>

            {isCalculated && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-10 p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex items-center gap-3"
              >
                <Info size={16} className="text-emerald-600" />
                <p className="text-[11px] font-bold text-emerald-800 uppercase tracking-tight">
                  Calculated based on {currencyPair} market price.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Copy Toast */}
      <AnimatePresence>
        {copied && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 z-50"
          >
            <Check size={16} className="text-emerald-400" />
            <span className="text-sm font-bold">Lot size copied!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* UI COMPONENTS */

function InputNumber({ label, value, onChange, placeholder, suffix }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-slate-700 ml-1">{label}</label>
      <div className="relative">
        <input 
          type="number" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-slate-100 border-none rounded-2xl py-4 px-6 text-slate-900 font-semibold focus:ring-2 focus:ring-emerald-500 transition-all outline-none"
        />
        {suffix && <span className="absolute right-6 top-1/2 -translate-y-1/2 font-bold text-slate-400">{suffix}</span>}
      </div>
    </div>
  );
}

function InputSelect({ label, value, onChange, options }: any) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-bold text-slate-700 ml-1">{label}</label>
      <div className="relative">
        <select 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-full bg-slate-800 text-white border-none rounded-2xl py-4 px-6 font-bold appearance-none cursor-pointer outline-none focus:ring-2 focus:ring-emerald-500"
        >
          {options.map((opt: string) => <option key={opt} value={opt}>{opt}</option>)}
        </select>
        <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
      </div>
    </div>
  );
}

function ResultRow({ label, value, isBold = false, canCopy = false, onCopy }: any) {
  return (
    <div className="flex flex-col border-b border-slate-200 pb-3 group">
      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-1">{label}</span>
      <div className="flex justify-between items-center">
        <span className={`text-2xl ${isBold ? 'font-black text-slate-900' : 'font-bold text-slate-700'}`}>
          {value}
        </span>
        {canCopy && (
          <button onClick={onCopy} className="text-slate-300 hover:text-emerald-500 transition-colors">
            <Copy size={18} />
          </button>
        )}
      </div>
    </div>
  );
}