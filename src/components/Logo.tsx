export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Leaf mark */}
      <svg
        width="28"
        height="32"
        viewBox="0 0 28 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Left leaf */}
        <path
          d="M14 27 C7 20 4 10 13 5 C11 13 13 21 20 25 Z"
          fill="#059669"
        />
        {/* Right leaf */}
        <path
          d="M14 27 C21 20 24 10 15 5 C17 13 15 21 8 25 Z"
          fill="#10b981"
        />
        {/* Stem */}
        <line
          x1="14"
          y1="27"
          x2="14"
          y2="31"
          stroke="#059669"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        {/* Ground seeds */}
        <circle cx="10" cy="31.5" r="0.9" fill="#6ee7b7" />
        <circle cx="14" cy="32" r="1" fill="#6ee7b7" />
        <circle cx="18" cy="31.5" r="0.9" fill="#6ee7b7" />
      </svg>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className="text-[13px] font-bold tracking-wide text-zinc-900 dark:text-zinc-50">
          Cottonwood Rose
        </span>
        <span className="text-[8.5px] font-medium tracking-[0.2em] text-emerald-600 dark:text-emerald-400 uppercase">
          Learning Community
        </span>
      </span>
    </span>
  );
}
