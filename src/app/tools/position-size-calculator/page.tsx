"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calculator,
  ChevronDown,
  Copy,
  Check,
  Info,
  DollarSign
} from "lucide-react";

export default function ForexPositionCalculator() {
  // --- Input States ---
  const [accountCurrency, setAccountCurrency] = useState("USD");
  const [balance, setBalance] = useState("");
  const [riskPercent, setRiskPercent] = useState("");
  const [stopLoss, setStopLoss] = useState("");
  const [currencyPair, setCurrencyPair] = useState("EUR/USD");

  // --- Result States ---
  const [results, setResults] = useState({
    amountAtRisk: 0,
    positionSize: 0,
    standardLots: 0,
    miniLots: 0,
    microLots: 0,
  });

  const [copied, setCopied] = useState(false);

  const calculatePosition = () => {
    const bal = parseFloat(balance) || 0;
    const risk = parseFloat(riskPercent) || 0;
    const pips = parseFloat(stopLoss) || 0;

    if (bal > 0 && risk > 0 && pips > 0) {
      const moneyAtRisk = (bal * risk) / 100;
      
      // Standard Forex Unit Logic (1 Lot = 100k Units)
      // Standard Pip Value for USD-based pairs is $10 per 1 Lot
      const pipValuePerUnit = 0.0001; 
      const units = moneyAtRisk / (pips * 0.0001 * 100000 / 100000 * 10); // Simplified for UI
      const totalUnits = (moneyAtRisk / pips) * 10000;

      setResults({
        amountAtRisk: Number(moneyAtRisk.toFixed(2)),
        positionSize: Math.floor(totalUnits),
        standardLots: Number((totalUnits / 100000).toFixed(2)),
        miniLots: Number((totalUnits / 10000).toFixed(2)),
        microLots: Number((totalUnits / 1000).toFixed(2)),
      });
    }
  };

  const copyToClipboard = (val: string | number) => {
    navigator.clipboard.writeText(String(val));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="min-h-screen bg-[#FDFDFD] pt-32 pb-24 px-6 font-sans">
      <div className="max-w-4xl mx-auto">
        
        {/* WEALTH WISDOM HEADER */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">
            Position Size <span className="text-emerald-500">Calculator.</span>
          </h1>
          <p className="text-slate-500 mt-3 text-sm font-medium uppercase tracking-widest">
            Institutional Risk Management Tool
          </p>
        </div>

        <div className="bg-white rounded-[2rem] border border-slate-100 shadow-2xl shadow-slate-200/60 p-8 md:p-12 grid md:grid-cols-2 gap-16 relative overflow-hidden">
          
          {/* LEFT SIDE: INPUTS (Exactly like your image) */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-800 uppercase tracking-tighter">Account Currency</label>
              <div className="relative">
                <select 
                  value={accountCurrency}
                  onChange={(e) => setAccountCurrency(e.target.value)}
                  className="w-full bg-[#474D57] text-white rounded-2xl py-4 px-6 font-bold appearance-none cursor-pointer outline-none ring-offset-2 focus:ring-2 focus:ring-emerald-500"
                >
                  <option>USD</option>
                  <option>EUR</option>
                  <option>GBP</option>
                </select>
                <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
              </div>
            </div>

            <InputBox label="Account Balance" value={balance} onChange={setBalance} placeholder="0" />
            <InputBox label="Risk Percentage" value={riskPercent} onChange={setRiskPercent} placeholder="0" />
            <InputBox label="Stop Loss (pips)" value={stopLoss} onChange={setStopLoss} placeholder="0" />

            <div className="space-y-2">
              <label className="text-[11px] font-black text-slate-800 uppercase tracking-tighter">Currency Pair</label>
              <div className="relative">
                <select 
                   value={currencyPair}
                   onChange={(e) => setCurrencyPair(e.target.value)}
                   className="w-full bg-[#474D57] text-white rounded-2xl py-4 px-6 font-bold appearance-none cursor-pointer outline-none ring-offset-2 focus:ring-2 focus:ring-emerald-500"
                >
                  <option>EUR/USD</option>
                  <option>GBP/USD</option>
                  <option>USD/JPY</option>
                  <option>XAU/USD</option>
                </select>
                <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300 pointer-events-none" />
              </div>
            </div>

            <button 
              onClick={calculatePosition}
              className="w-full py-5 bg-[#22C55E] hover:bg-[#1DA850] text-white rounded-full font-bold text-xl transition-all shadow-lg shadow-emerald-500/20 active:scale-[0.98] mt-4"
            >
              Calculate
            </button>
          </div>

          {/* RIGHT SIDE: RESULTS (Exactly like your image) */}
          <div className="relative">
            <div className="flex items-center gap-2 mb-8">
              <h2 className="text-4xl font-bold text-slate-800">Results</h2>
              <div className="bg-slate-800 text-white rounded-full p-1">
                <ChevronDown size={14} />
              </div>
            </div>

            <div className="space-y-6">
              <ResultLine label="Amount at Risk" value={results.amountAtRisk} prefix="$" />
              <ResultLine label="Position Size (units)" value={results.positionSize.toLocaleString()} />
              <ResultLine label="Standard Lots" value={results.standardLots} canCopy onCopy={() => copyToClipboard(results.standardLots)} />
              <ResultLine label="Mini Lots" value={results.miniLots} />
              <ResultLine label="Micro Lots" value={results.microLots} />
            </div>

            <div className="mt-12 flex items-start gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <Info size={16} className="text-slate-400 mt-0.5" />
              <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                Ensure your broker’s pip decimal alignment matches this calculation for <span className="font-bold text-slate-900">{currencyPair}</span>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* COPY TOAST */}
      <AnimatePresence>
        {copied && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-3 rounded-full shadow-2xl flex items-center gap-2 z-50"
          >
            <Check size={16} className="text-emerald-400" />
            <span className="text-sm font-bold tracking-tight">Standard Lot Copied</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

// --- Helper Components ---

interface InputBoxProps {
  label: string;
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
}

function InputBox({ label, value, onChange, placeholder }: InputBoxProps) {
  return (
    <div className="space-y-2">
      <label className="text-[11px] font-black text-slate-800 uppercase tracking-tighter">{label}</label>
      <input 
        type="number" 
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-[#E9EAEB] border-none rounded-2xl py-4 px-6 text-slate-900 font-bold placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 outline-none transition-all"
      />
    </div>
  );
}

interface ResultLineProps {
  label: string;
  value: string | number;
  prefix?: string;
  canCopy?: boolean;
  onCopy?: () => void;
}

function ResultLine({ label, value, prefix = "", canCopy = false, onCopy = () => {} }: ResultLineProps) {
  return (
    <div className="border-b border-slate-100 pb-3">
      <p className="text-[13px] font-bold text-slate-800 mb-1">{label}</p>
      <div className="flex justify-between items-center">
        <span className="text-3xl font-black text-slate-900 tracking-tighter">
          {prefix}{value}
        </span>
        {canCopy && (
          <button onClick={onCopy} className="text-slate-300 hover:text-emerald-500 transition-colors">
            <Copy size={20} />
          </button>
        )}
      </div>
    </div>
  );
}