"use client";

import { useEffect, useRef } from "react";

export default function EconomicCalendarSimple() {
  const container = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!container.current) return;

    container.current.innerHTML = "";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-events.js";
    script.async = true;

    script.innerHTML = JSON.stringify({
      colorTheme: "light",
      isTransparent: false,
      width: "100%",
      height: "600",
      locale: "en",
      importanceFilter: "-1,0,1",
      currencyFilter: "USD,EUR,GBP,JPY,AUD,CAD,CHF,NZD",
    });

    container.current.appendChild(script);
  }, []);

  return (
    <section className="bg-[#FCFCFC] py-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <h2 className="text-4xl md:text-5xl font-light tracking-tight text-slate-900 mb-6">
          Economic Calendar
        </h2>

        <p className="text-slate-500 mb-10 max-w-xl">
          Track real-time macroeconomic events affecting global markets.
        </p>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-slate-200">
          <div ref={container} />
        </div>

      </div>
    </section>
  );
}
