import back from "@/assets/intro-video.mp4";

export function IntroOverlay() {
  return (
    <div className="fixed inset-0 z-[100] overflow-hidden pointer-events-none animate-fade-out">

      {/* Venetian Blinds */}
      <div className="absolute inset-0 flex">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="flex-1 h-full animate-blind"
            style={{
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative flex items-center justify-center h-full overflow-hidden bg-black animate-home-reveal">

        <video
          src={back}
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-fill opacity-80"
        />

        {/* Optional dark overlay */}
        {/* <div className="absolute inset-0 bg-black/30" /> */}

        {/* Optional content */}
        <div className="relative z-10 text-center animate-content">
          <div className="line-grow w-40 h-px mx-auto mt-6 bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        </div>

      </div>

      {/* Animation CSS */}
      <style>{`
        .animate-home-reveal {
  animation: homeReveal 8s ease forwards;
}

        @keyframes homeReveal {
          0% {
            transform: scale(1);
            opacity: 1;
          }

          70% {
            transform: scale(1);
            opacity: 1;
          }

          100% {
            transform: scale(1.08);
            opacity: 0;
          }
        }

        .animate-blind {
          transform: scaleY(1);
          transform-origin: center;
          animation: openBlinds 1.5s cubic-bezier(0.77, 0, 0.175, 1) forwards;
        }

        .animate-content {
          opacity: 0;
          transform: translateY(40px) scale(0.95);
          animation: contentReveal 1.2s ease forwards;
        }

        .animate-text {
          opacity: 0;
          letter-spacing: 0.3em;
          animation: textReveal 1s ease forwards;
          animation-delay: 0.4s;
        }

        .line-grow {
          transform: scaleX(0);
          transform-origin: center;
          animation: lineGrow 1s ease forwards;
          animation-delay: 0.8s;
        }

        .animate-fade-out {
  animation: overlayFade 8s ease forwards;
}

        @keyframes openBlinds {
          0% {
            transform: scaleY(1);
          }

          100% {
            transform: scaleY(0);
          }
        }

        @keyframes contentReveal {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }

          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes textReveal {
          0% {
            opacity: 0;
            letter-spacing: 0.5em;
          }

          100% {
            opacity: 1;
            letter-spacing: 0.08em;
          }
        }

        @keyframes lineGrow {
          0% {
            transform: scaleX(0);
            opacity: 0;
          }

          100% {
            transform: scaleX(1);
            opacity: 1;
          }
        }

        @keyframes overlayFade {
  0% {
    opacity: 1;
    visibility: visible;
  }

  80% {
    opacity: 1;
    visibility: visible;
  }

  100% {
    opacity: 0;
    visibility: hidden;
  }
}
      `}</style>
    </div>
  );
}

export default IntroOverlay;