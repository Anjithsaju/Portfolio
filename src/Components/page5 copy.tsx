import HologramCard from './hologram';



export default function Transmission() {
  return (
    <section
      style={{
        background:
          "linear-gradient(151deg, rgb(0, 0, 0), rgba(0, 0, 0, 0.26)) center center / cover no-repeat, url(./src/Images/darthvader.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
        minHeight: "100vh",
      }}
      className="text-white py-10 px-5 overflow-hidden"
      id="transmission"
    >
      {/* <div
        className="max-w-xl mx-auto bg-black/60 backdrop-blur-md rounded-2xl p-6  shadow-lg shadow-cyan-500/30 relative overflow-hidden hologram-flicker
        transition-all duration-500"
        style={{
          // Default mobile/tablet: centered
        }}
      > */}
  

<div className="flex flex-column items-center justify-center mt-8">
  
    <HologramCard />
    <img
      className="w-[30vw] min-w-80 relative z-1 opacity-30 holo-flicker"
      style={{ top: '-18vw' }}
      src="./src/Images/holo.png"
      alt=""
    />
  
  <style>{`
    .holo-flicker {
      animation: holoFlicker 1.3s infinite;
    }
    @keyframes holoFlicker {
      0%, 100% { opacity: 0.3; filter: blur(0.5px) brightness(1.1);}
      10% { opacity: 0.4; filter: blur(0.7px) brightness(1.2);}
      20% { opacity: 0.25; filter: blur(0.3px) brightness(1);}
      30% { opacity: 0.35; filter: blur(0.6px) brightness(1.15);}
      50% { opacity: 0.2; filter: blur(0.2px) brightness(0.95);}
      70% { opacity: 0.32; filter: blur(0.5px) brightness(1.1);}
      90% { opacity: 0.28; filter: blur(0.4px) brightness(1);}
    }
  `}</style>
</div>
        {/* Hologram scanlines
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,255,255,0.08)_50%,transparent_50%)] bg-[length:100%_3px] opacity-40 mix-blend-screen z-10" />
        <h2 className="text-3xl font-starwars text-center mb-6 text-cyan-300 drop-shadow-glow tracking-widest floating-force">📡 Transmission</h2>
        <div className="space-y-4 text-center relative z-20">
          <div className="flex flex-col items-center gap-2 floating-force">
            <span className="text-cyan-400 text-lg font-mono">👤 <span className="font-bold">Anjith Saju</span></span>
            <span className="text-cyan-300 text-base font-mono">🌍 Kerala, India</span>
          </div>
          <div className="flex flex-col items-center gap-2 floating-force" style={{ animationDelay: "0.2s" }}>
            <a href="mailto:anjith@example.com" className="text-cyan-200 hover:text-cyan-400 underline transition-all duration-200">
              📧 anjith@example.com
            </a>
            <span className="text-cyan-200 font-mono">📱 +91 98765 43210</span>
          </div>
          <div className="flex justify-center gap-6 mt-4 floating-force" style={{ animationDelay: "0.4s" }}>
            <a
              href="https://github.com/Anjithsaju"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              title="GitHub"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="GitHub" className="w-8 h-8" />
            </a>
            <a
              href="https://linkedin.com/in/anjithsaju"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:scale-110 transition-transform duration-200"
              title="LinkedIn"
            >
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg" alt="LinkedIn" className="w-8 h-8" />
            </a>
          </div>
        </div> */}
      {/* </div> */}
      <style>{`
        .font-starwars {
          font-family: 'Share Tech Mono', 'Consolas', monospace;
        }
        .drop-shadow-glow {
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 15px #0ffaa;
        }
        .hologram-flicker {
          animation: hologramFlicker 2s infinite;
        }
        @keyframes hologramFlicker {
          0%, 100% { opacity: 1; }
          40% { opacity: 0.85; }
          60% { opacity: 0.9; }
        }
        .floating-force {
          animation: floatingForce 3.5s ease-in-out infinite alternate;
        }
        @keyframes floatingForce {
          0%   { transform: translateY(0) scale(1) rotate(-1deg); filter: blur(0.2px) brightness(1.1);}
          20%  { transform: translateY(-6px) scale(1.03) rotate(1deg); filter: blur(0.5px) brightness(1.15);}
          50%  { transform: translateY(-12px) scale(1.04) rotate(-2deg); filter: blur(0.7px) brightness(1.2);}
          80%  { transform: translateY(-6px) scale(1.03) rotate(1deg); filter: blur(0.5px) brightness(1.15);}
          100% { transform: translateY(0) scale(1) rotate(-1deg); filter: blur(0.2px) brightness(1.1);}
        }
        @media (min-width: 1280px) {
          /* xl and up */
          #transmission > div {
            position: relative !important;
            top: 15vw !important;
            right: 23vw !important;
            scale: 1.5 !important;
          }
        }
      `}</style>
    </section>
  );
}