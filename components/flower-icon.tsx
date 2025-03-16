export function FlowerIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M12 3a3 3 0 0 0-3 3c0 1.1.6 2.1 1.5 2.6C9.6 9.1 8.7 9 8 9c-1.7 0-3 1.3-3 3s1.3 3 3 3c.7 0 1.6-.1 2.5-.5C9.9 15 9 16 9 17c0 1.7 1.3 3 3 3s3-1.3 3-3c0-1-.6-2-1.5-2.5 1-.4 1.9-.5 2.5-.5 1.7 0 3-1.3 3-3s-1.3-3-3-3c-.7 0-1.5.1-2.5.5.9-.5 1.5-1.5 1.5-2.5 0-1.7-1.3-3-3-3z" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  )
}

