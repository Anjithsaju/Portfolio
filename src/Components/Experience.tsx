import React, { useRef, useState, useEffect } from "react";

const experiences = [
  {
    title: "Padawan Initiation",
    image: "https://i.postimg.cc/wMFjs7nC/childd.png",
    date: "2021",
    description:
      "Embarked on my coding journey, learning the basics of HTML, CSS, and JavaScript. Like a Padawan, I was eager to absorb knowledge and master the fundamentals.",
  },
  {
    title: "Clone Wars Campaign",
    image: "https://i.postimg.cc/HnTLxQv0/knight.png",
    date: "2022",
    description:
      "Joined collaborative projects, working with teams to build full-stack applications. Faced challenges and learned the importance of teamwork and code reviews.",
  },
  {
    title: "Jedi Trials",
    image: "https://i.postimg.cc/0QYQPtn2/mas.png",
    date: "2023",
    description:
      "Took on advanced topics like TypeScript, testing, and cloud deployment. Mentored others and contributed to open source, striving for mastery like a true Jedi.",
  },
  {
    title: "Galactic Innovations",
    image: "https://starwars-visualguide.com/assets/img/vehicles/4.jpg",
    date: "2024",
    description:
      "Ventured into AI, IoT, and futuristic tech. Built innovative solutions and explored the galaxy of possibilities in software engineering.",
  },
];


const Experience: React.FC = () => {
  const trackRef = useRef<HTMLDivElement>(null);
  const shipRef = useRef<HTMLDivElement>(null);

  const progressRef = useRef(0); // 0 to 1
  const draggingRef = useRef(false);

  const [activeIndex, setActiveIndex] = useState(0);
  const [isFlicker, setIsFlicker] = useState(false);
  const [paused, setPaused] = useState(false);

  const updateShipPosition = (progress: number) => {
    if (!trackRef.current || !shipRef.current) return;
    const trackWidth = trackRef.current.clientWidth;
    const shipWidth = shipRef.current.clientWidth;
    // Clamp progress to [0, 1]
    const clamped = Math.min(Math.max(progress, 0), 1);
    const x = clamped * (trackWidth - shipWidth);
    shipRef.current.style.transform = `translateX(${x}px)`;
  };

  const getStageIndexFromProgress = (progress: number) => {
    const count = experiences.length;
    // Use round so the last slide is reachable
    return Math.min(count - 1, Math.round(progress * (count - 1)));
  };

  // Drag handlers
  const onPointerDown = (e: React.PointerEvent) => {
    e.preventDefault();
    draggingRef.current = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    if (!trackRef.current || !shipRef.current) return;

    const trackRect = trackRef.current.getBoundingClientRect();
    const shipWidth = shipRef.current.clientWidth;

    let x = e.clientX - trackRect.left - shipWidth / 2;
    x = Math.max(0, Math.min(x, trackRect.width - shipWidth));

    const progress = x / (trackRect.width - shipWidth);
    progressRef.current = progress;
    
    updateShipPosition(progress);
    setActiveIndex(getStageIndexFromProgress(progress));
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  };

  // Animate ship automatically if not dragging and not paused
  useEffect(() => {
    let animationFrameId: number;
    let pauseTimeout: ReturnType<typeof setTimeout> | null = null;

    const animate = () => {
      if (!draggingRef.current && !paused) {
        let progress = progressRef.current + 0.001;
        if (progress >= 1) {
          progress = 1;
          progressRef.current = progress;
          updateShipPosition(progress);
          setActiveIndex(getStageIndexFromProgress(progress));
          // Pause at the last slide for 1 second, then reset
          if (!pauseTimeout) {
            pauseTimeout = setTimeout(() => {
              progressRef.current = 0;
              pauseTimeout = null;
              animationFrameId = requestAnimationFrame(animate);
            }, 1000); // 1000ms pause at last slide
          }
          return; // Stop animating until timeout resets progress
        }
        progressRef.current = progress;
        updateShipPosition(progress);
        setActiveIndex(getStageIndexFromProgress(progress));
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      if (pauseTimeout) clearTimeout(pauseTimeout);
    };
  }, [paused]); // <-- add paused as a dependency

  useEffect(() => {
    // Set initial position on mount and activeIndex changes
    const progress = activeIndex / (experiences.length - 1);
    progressRef.current = progress;
    updateShipPosition(progress);
  }, [activeIndex]);

  // Flicker effect on experience change
  useEffect(() => {
    setIsFlicker(true);
    const timeout = setTimeout(() => setIsFlicker(false), 400);
    return () => clearTimeout(timeout);
  }, [activeIndex]);

  return (
    <div
      className="scale-100 md:scale-120 min-h-screen bg-gradient-to-b from-black via-[#0a1a2f] to-black flex flex-col items-center justify-center p-2 md:p-8 relative font-mono select-text text-cyan-300 overflow-hidden"
     style={{
              background: "linear-gradient(328deg, rgb(0 0 0), rgb(0 0 0 / 31%)) center center / cover, url(./src/Images/sky3.jpg)",
              minHeight: "100vh",
              backgroundSize: "cover",
     }}
    >
      {/* Starfield background */}
      <div className="pointer-events-none fixed inset-0 z-0">
        {/*  */}
      </div>
      <h1 className="text-2xl md:text-5xl  mb-6 md:mb-12 text-yellow-400 text-left tracking-widest  z-10 w-full pl-4 md:pl-[20vw]">
        <span className="text-yellow-400">Experience Log</span>
      </h1>

      <section className="flex flex-col-reverse md:flex-row-reverse h-auto md:h-[65vh] justify-center gap-6 md:gap-12 w-full max-w-6xl px-2 md:px-8 z-10">
        {/* Droid with subtle flickering + scanline overlay */}
        <div className="relative w-[180px] h-[180px] md:w-[300px] md:h-[300px] mx-auto md:mx-0">
          <img
            src={experiences[activeIndex].image}
            alt="BB-8 droid rolling on a metallic floor in a futuristic sci-fi environment"
            className={`w-full h-full object-contain hologram-flicker ${isFlicker ? "flicker-transition" : ""}`}
            draggable={false}
          />
          {/* <img
            src="./src/Images/holo.png"
            alt="BB-8 droid rolling on a metallic floor in a futuristic sci-fi environment"
            className={`w-full h-full object-contain hologram-flicker`}
            draggable={false}
          /> */}
        </div>

        {/* Hologram container with flicker transition */}
        <div
          className={`relative w-full max-w-[95vw] md:w-[600px] min-h-[40%] bg-black/60 border border-cyan-500 rounded-lg p-4 md:p-8 shadow-glow-blue drop-shadow-lg hologram-flicker overflow-hidden backdrop-blur-md mx-auto transition-all duration-300 ${
            isFlicker ? "flicker-transition" : ""
          }`}
           onMouseEnter={() => setPaused(true)}
           onMouseLeave={() => setPaused(false)}
        >
          <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-20 md:w-32 h-2 bg-cyan-300/40 rounded-full blur-lg animate-pulse" />
          <h2 className="text-xl md:text-3xl font-bold mb-2 drop-shadow-glow uppercase tracking-wide flicker-text text-cyan-100">
            {experiences[activeIndex].title}
          </h2>
          <span className="font-digital tracking-widest text-cyan-400 flicker-text mb-4 md:mb-6 block text-base md:text-lg">
            {experiences[activeIndex].date}
          </span>
          <p className="text-cyan-200 text-base md:text-lg !mt-12 leading-relaxed tracking-wide">
            {experiences[activeIndex].description}
          </p>
          {/* overlays */}
          <div className="pointer-events-none absolute inset-0 bg-scanlines mix-blend-screen opacity-30" />
          <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-cyan-600/30 via-cyan-400/10 to-transparent animate-scanlines mix-blend-screen" />
        </div>
      </section>

      {/* Track and Ship */}
      <div
        ref={trackRef}
        className="relative w-full max-w-[98vw] md:max-w-4xl h-16 md:h-24 mt-10 md:mt-20 bg-black/20 rounded-lg shadow-glow-blue cursor-pointer z-10"
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* Track line */}
        <div className="absolute top-1/2 left-4 right-4 h-1 bg-cyan-400 opacity-50 -translate-y-1/2 rounded" />

        {/* Stage dots */}
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            style={{ left: `${(idx / (experiences.length - 1)) * 100}%` }}
            className={`absolute top-1/2 w-5 h-5 md:w-6 md:h-6 border-2 border-cyan-400 bg-black rounded-full shadow-glow-cyan -translate-y-1/2 -translate-x-1/2 hover:scale-125 transition-transform cursor-pointer flex items-center justify-center
              ${activeIndex === idx ? "bg-cyan-400 scale-125 ring-4 ring-cyan-200/40" : ""}
            `}
            onClick={() => setActiveIndex(idx)}
          >
            <img
              src="https://img.freepik.com/free-psd/isolated-dark-grey-asteroid-3d-render-space-rock_191095-85682.jpg?semt=ais_items_boosted&w=740"
              alt={exp.title}
              className="w-3 h-3 md:w-4 md:h-4 rounded-full object-cover"
              draggable={false}
            />
          </div>
        ))}

        {/* Ship */}
        <div
          ref={shipRef}
          className="absolute top-1/2 w-10 h-10 md:w-16 md:h-16 -translate-y-1/2 cursor-grab active:cursor-grabbing transition-transform duration-150 z-20"
          title="Starship navigator"
          onPointerDown={onPointerDown}
        >
          <img
            src="https://i.postimg.cc/hjPTcywc/rock.png"
            alt="Ship"
            className="w-full h-full object-contain drop-shadow-lg animate-spin-slow"
            style={{ filter: "drop-shadow(0 0 12px #0ff)" }}
            draggable={false}
          />
        </div>
      </div>

      {/* Extra styles */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&display=swap');

        .font-digital {
          font-family: 'Share Tech Mono', monospace;
        }
        .shadow-glow-blue {
          box-shadow:
            0 0 5px #0ff,
            0 0 15px #0ff,
            0 0 30px #0ffaa,
            0 0 60px #0ffcc,
            inset 0 0 10px #0ffcc;
        }
        .shadow-glow-cyan {
          box-shadow:
            0 0 8px #0ff,
            0 0 25px #0ffcc,
            inset 0 0 15px #0ffcc;
        }
        .drop-shadow-glow {
          text-shadow:
            0 0 5px #0ff,
            0 0 10px #0ff,
            0 0 15px #0ffaa;
        }
        .drop-shadow-cyan {
          filter: drop-shadow(0 0 6px #0ff);
        }
        .flicker-text {
          animation: flicker 3s infinite alternate;
        }
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.85; }
          25%, 75% { opacity: 0.9; }
        }
        .flicker-3d img, .flicker-3d {
          animation: flicker3d 6s infinite alternate ease-in-out;
        }
        @keyframes flicker3d {
          0%   { filter: drop-shadow(0 0 10px #0ff); transform: rotateY(0deg) rotateZ(0deg); }
          50%  { filter: drop-shadow(0 0 15px #0ff); transform: rotateY(2deg) rotateZ(1deg); }
          100% { filter: drop-shadow(0 0 10px #0ff); transform: rotateY(0deg) rotateZ(0deg); }
        }
        .hologram-flicker {
          animation: hologramFlicker 2s infinite;
        }
        @keyframes hologramFlicker {
          0%, 100% { opacity: 1; }
          40% { opacity: 0.85; }
          60% { opacity: 0.9; }
        }
        .animate-scanlines {
          background-size: 100% 4px;
          animation: scanlineAnim 0.5s linear infinite;
        }
        @keyframes scanlineAnim {
          0% { background-position: 0 0; }
          100% { background-position: 0 4px; }
        }
        .bg-scanlines {
          background-image:
            linear-gradient(rgba(0, 255, 255, 0.1) 50%, transparent 50%);
          background-size: 100% 2px;
          pointer-events: none;
        }
        .starwars-crawl {
          letter-spacing: 0.15em;
          text-shadow:
            0 0 8px #ffe066,
            0 0 24px #ffe066,
            0 0 48px #ffe066;
          animation: crawl 6s cubic-bezier(.25,.1,.25,1) 1;
        }
        @keyframes crawl {
          0% { opacity: 0; transform: scale(1.5) translateY(60px); }
          20% { opacity: 1; }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
        @keyframes spin {
          100% { transform: rotate(360deg); }
        }
        .flicker-transition {
          animation: flickerTransition 0.4s linear;
        }
        @keyframes flickerTransition {
          0% { opacity: 1; filter: blur(0px); }
          20% { opacity: 0.7; filter: blur(2px); }
          40% { opacity: 0.4; filter: blur(4px); }
          60% { opacity: 0.7; filter: blur(2px);}
          80% { opacity: 1; filter: blur(0px);}
          100% { opacity: 1; filter: blur(0px);}
        }
      `}</style>
    </div>
  );
};

// Simple starfield background component

export default Experience;
