// Recurring "swell line" motif — ties the site back to the Ipanema/surf
// half of the brand instead of the generic straight section edges every
// other BJJ-gym template uses.
export function WaveDivider({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      aria-hidden
      className={className}
    >
      <path
        d="M0,64 C240,120 480,0 720,32 C960,64 1200,112 1440,48 L1440,120 L0,120 Z"
        fill="currentColor"
      />
    </svg>
  );
}
