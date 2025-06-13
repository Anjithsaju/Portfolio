import React from "react";
import { useTorch } from "./TorchContext";

export default function Transmission() {
  const [copied, setCopied] = React.useState(false);
  const { setTorchOn } = useTorch();

  return (
    <section
      style={{
        background: 'linear-gradient(197deg, rgb(0 0 0 / 80%), rgba(0, 0, 0, 0.5)), url(https://i.postimg.cc/0Nv7H206/darthvader.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
      }}
      className="text-white overflow-hidden flex items-center justify-start px-10 md:px-20 py-20"
      id="transmission"
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes fade-in-left {
              from { opacity: 0; transform: translateX(-50px); }
              to { opacity: 1; transform: translateX(0); }
            }
            .animate-fade-in-left {
              animation: fade-in-left 1s ease-out forwards;
            }
          `,
        }}
      />

      <div className="max-w-3xl animate-fade-in-left ">
        <img
          className="absolute md:top-[5vw] top-[22vw] left-[-15px] opacity-70 cursor-pointer"
          src="https://i.postimg.cc/fRndJTFH/lightsaber.png"
          alt=""
          onClick={() => setTorchOn(true)}
        />
     <img
       style={{
         position: "absolute",
         width: "7vw",
         mixBlendMode: "color-dodge",
         top: "8vw"
       }}
       src="https://i.postimg.cc/7Z0gVT08/click.png"
       alt="click on lightsaber"
     />
        {/* Large Main Heading */}
        <h2
          style={{ fontSize: "clamp(2rem, 3.7vw, 24rem)" ,color:"#ffffffa6"}}
          className=" koulen-regular text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold uppercase leading-tight tracking-wide"
        >
          I FIND YOUR LACK OF CONTACT…
          <br />
          <span className="koulen-regular     relative
        left-[27vw] text-red-600 text-[2.2rem] sm:text-[3rem] md:text-[5rem] lg:text-[5rem] block mt-2">
        DISTURBING
          </span>
        </h2>

        {/* Paragraph */}
        <p className="text-xl !mt-20 sm:text-2xl md:text-2xl text-gray-400 leading-relaxed font-medium">
          Use the Force or the contact below
          <br />
          <span className="text-red-500 font-bold">Join the Dark Side</span> 
        </p>

        {/* Buttons */}
        <div className="flex flex-row sm:justify-start justify-around sm:flex-row sm:space-x-6 space-y-4 sm:space-y-0 pt-2 items-start sm:items-center">
          <button
            className={`bg-red-600 hover:bg-red-700 transition px-5 py-2 !rounded-[40px] text-white text-lg font-semibold shadow-xl relative overflow-hidden ${
              copied ? "animate-pop" : ""
            }`}
            onClick={async () => {
              await navigator.clipboard.writeText("anjithsaju123@gmail.com");
              setCopied(true);
              setTimeout(() => setCopied(false), 5000);
            }}
          >
            <span className="relative z-10">{copied ? "Mail Copied!" : "Copy mail"}</span>
            {/* Cool burst animation */}
            {copied && (
              <span className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <svg width="60" height="60" viewBox="0 0 60 60" className="animate-burst">
            <circle cx="30" cy="30" r="10" fill="none" stroke="#fff" strokeWidth="4" />
            <circle cx="30" cy="30" r="20" fill="none" stroke="#fff" strokeWidth="2" />
          </svg>
              </span>
            )}
          </button>
          <a
            href="mailto:anjithsaju123@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-[80px] w-8 h-8 sm:w-[80px] sm:h-auto flex items-center"
          >
            <img
              src="https://pngcore.com/files/preview/901x583/117271575499ldpsm2hwtirlhlblpay91ptqz91akkfesgz5xujnqegpyzyutnb0jr9vrnt0gfhkfblo6pfyu5isot53qxb67mdhmyetfdshzqj.png"
              alt="Mail"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://github.com/Anjithsaju"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-[50px] w-8 h-8 sm:w-[50px] sm:h-auto md:mr-10 scale-90 flex items-center"
          >
            <img
              src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-512.png"
              alt="GitHub"
              className="w-full h-full"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/anjithsaju"
            target="_blank"
            rel="noopener noreferrer"
            className="md:w-[50px] w-8 h-8 sm:w-[50px] sm:h-auto flex items-center"
          >
            <img
              src="https://img.icons8.com/m_rounded/512/FFFFFF/linkedin--v2.png"
              alt="LinkedIn"
              className="w-full h-full"
            />
          </a>
        </div>
        <style>{`
        
@import url('https://fonts.googleapis.com/css2?family=Koulen&display=swap');
.koulen-regular {
  font-family: "Koulen", sans-serif;
  font-weight: 400;
  font-style: normal;
}

          @keyframes pop {
        0% { transform: scale(1);}
        20% { transform: scale(1.15);}
        40% { transform: scale(0.95);}
        60% { transform: scale(1.05);}
        80% { transform: scale(0.98);}
        100% { transform: scale(1);}
          }
          .animate-pop {
        animation: pop 0.6s cubic-bezier(.36,1.56,.64,1) both;
          }
          @keyframes burst {
        0% { opacity: 1; transform: scale(0.5);}
        60% { opacity: 0.7; transform: scale(1.2);}
        100% { opacity: 0; transform: scale(2);}
          }
          .animate-burst {
        animation: burst 0.7s cubic-bezier(.36,1.56,.64,1) both;
          }
        `}</style>
      </div>
    </section>
  );
}
