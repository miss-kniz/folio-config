"use client";

export default function Loading() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-primary text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.18),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.1),_transparent_30%)]" />
      <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-white/10 blur-2xl animate-pulse" />
      <div className="absolute bottom-10 right-10 h-32 w-32 rounded-full bg-white/10 blur-2xl animate-pulse [animation-delay:500ms]" />

      <div className="relative flex flex-col items-center gap-4 px-6 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.5em] text-white/70">
          Portfolio
        </p>

        <h1 className="name-sheen text-6xl font-extrabold tracking-tight sm:text-7xl md:text-8xl">
          Mehak
        </h1>

        <div className="h-1.5 w-28 overflow-hidden rounded-full bg-white/20">
          <div className="h-full w-1/2 rounded-full bg-white/85 animate-slide" />
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(-40%);
          }
          100% {
            transform: translateX(180%);
          }
        }

        @keyframes sheen {
          0%,
          100% {
            opacity: 0.96;
            transform: translateY(0);
            text-shadow: 0 0 0 rgba(255, 255, 255, 0);
          }
          50% {
            opacity: 1;
            transform: translateY(-2px);
            text-shadow: 0 0 24px rgba(255, 255, 255, 0.22);
          }
        }

        .animate-slide {
          animation: slide 1.5s ease-in-out infinite;
        }

        .name-sheen {
          animation: sheen 1.8s ease-in-out infinite;
        }
      `}</style>
    </main>
  );
}
