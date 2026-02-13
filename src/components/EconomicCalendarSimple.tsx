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
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-light mb-8">Economic Calendar</h2>
        <div className="bg-white rounded-3xl shadow-xl p-4">
          <div ref={container} />
        </div>
      </div>
    </section>
  );
}
