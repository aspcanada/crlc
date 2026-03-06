export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      {/* Book + leaf mark (edu + nature) */}
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="shrink-0"
      >
        {/* Open book: left page */}
        <path
          d="M6 9 L6 24 C6 26 10 26 14 25 L14 8 C10 7 6 8 6 9 Z"
          strokeWidth="0.6"
          className="fill-zinc-200 stroke-zinc-400 dark:fill-zinc-700 dark:stroke-zinc-600"
        />
        {/* Right page */}
        <path
          d="M18 8 L18 25 C22 26 26 26 26 24 L26 9 C26 8 22 7 18 8 Z"
          strokeWidth="0.6"
          className="fill-zinc-200 stroke-zinc-400 dark:fill-zinc-700 dark:stroke-zinc-600"
        />
        {/* Spine */}
        <path
          d="M14 8 L16 7 L18 8 L18 25 L16 26 L14 25 Z"
          className="fill-zinc-300 dark:fill-zinc-600"
        />
        {/* Leaf from spine */}
        <path
          d="M16 12 C11 9 9 14 13 18 C16 16 19 18 23 14 C27 11 21 8 16 12 Z"
          fill="#059669"
        />
        <path
          d="M16 12 C21 9 23 14 19 18 C16 16 13 18 9 14 C5 11 11 8 16 12 Z"
          fill="#10b981"
        />
        <line
          x1="16"
          y1="18"
          x2="16"
          y2="24"
          stroke="#059669"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </svg>

      {/* Wordmark */}
      <span className="flex flex-col leading-none">
        <span className="text-[13px] font-bold tracking-wide text-zinc-900 dark:text-zinc-50">
          Cottonwood Rose
        </span>
        <span className="text-[8.5px] font-medium uppercase tracking-[0.2em] text-emerald-600 dark:text-emerald-400">
          Learning Community
        </span>
      </span>
    </span>
  );
}
