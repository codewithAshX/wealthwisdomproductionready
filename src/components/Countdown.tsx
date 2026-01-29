"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  // Set offer end time (change date if needed)
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
    <section className="bg-emerald-500 py-4">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">

        {/* TIMER */}
        <div className="flex gap-3 text-center">
          {[
            { label: "Hours", value: timeLeft.hours },
            { label: "Minutes", value: timeLeft.minutes },
            { label: "Seconds", value: timeLeft.seconds },
          ].map((item) => (
            <div
              key={item.label}
              className="bg-black rounded-lg px-4 py-2 min-w-[70px]"
            >
              <p className="text-2xl font-extrabold text-white">
                {String(item.value).padStart(2, "0")}
              </p>
              <p className="text-xs text-gray-300">{item.label}</p>
            </div>
          ))}
        </div>

        {/* OFFER TEXT */}
        <div className="text-black font-semibold text-center md:text-left">
          <span className="block text-lg">
            TRADING IN THE ZONE – ELITE
          </span>
          <span className="text-sm">
            in just <span className="font-bold">₹10,000</span>{" "}
            <span className="line-through opacity-70 ml-1">₹20,000</span>{" "}
            <span className="ml-2 font-bold">50% OFF</span>
          </span>
        </div>

        {/* CTA */}
        <a
          href="https://wa.me/91XXXXXXXX"
          className="rounded-md bg-yellow-400 px-6 py-3 font-bold text-black hover:bg-yellow-300 transition"
        >
          Subscribe Now
        </a>
      </div>
    </section>
  );
}
