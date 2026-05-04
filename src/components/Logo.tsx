export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      <div className="relative h-10 w-10 flex items-center justify-center rounded-xl bg-white/10 border border-white/20">
        {/* Simple construction icon: a minimal crane hook and beam */}
        <svg
          viewBox="0 0 64 64"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
        >
          <path
            d="M16 14h32v4H16z"
            fill="currentColor"
            opacity="0.75"
          />
          <path
            d="M22 18v30h4V18h12v30h4V18h4v4h4v4H18v-4h4v-4h4z"
            fill="currentColor"
          />
          <path
            d="M34 18h6v8h-6z"
            fill="currentColor"
            opacity="0.6"
          />
        </svg>
      </div>
      <div>
        <div className="text-lg font-black tracking-tight text-white leading-tight">
          Venula
        </div>
        <div className="text-[10px] uppercase tracking-widest text-white/60">
          Developers
        </div>
      </div>
    </div>
  );
}
