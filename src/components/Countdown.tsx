"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  // The countdown is purely for demonstration and can be updated to reflect real deadlines.
  const targetTime = new Date().getTime() + 8 * 60 * 60 * 1000; // 8 hours

  const [timeLeft, setTimeLeft] = useState(getTimeRemaining());

  function getTimeRemaining() {
    const now = new Date().getTime();
    const diff = targetTime - now;

    if (diff <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor(diff / (1000 * 60 * 60)),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeRemaining());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-black py-6">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-white">

        {/* TIMER */}
        <div className="flex gap-3 text-center">
          {[
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-slate-900 rounded-lg px-4 py-2 min-w-[70px]"
            >
              <p className="text-2xl font-extrabold text-white">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-xs text-slate-400">{item.label}</p>
            </div>
          ))}
        </div>

        {/* OFFER TEXT */}
        <div className="text-center md:text-left">
          <p className="text-sm font-bold tracking-wide uppercase text-yellow-400">Limited Site Visits Remaining</p>
          <p className="text-sm text-slate-300">
            Book a consultation within the next window to secure our next available project slot.
          </p>
        </div>

        {/* CTA */}
        <a
          href="/contact"
          className="rounded-md bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-300 transition"
        >
          Schedule a Walkthrough
        </a>
      </div>
    </section>
  );
}
