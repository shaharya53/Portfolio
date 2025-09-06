import React from "react";

const STRIP_ITEMS = [
  "BUILDER",
  "CODER",
  "ENGINEER",
  "TECH ENTHUSIAST",
  "EXPLORER",
  "DEVELOPER",
  "DESIGNER",
  "CREATOR",
  "INNOVATOR",
  "PROBLEM SOLVER",
];

const MovingStrips = () => {
  return (
    <div className="relative w-full h-[300px] overflow-hidden">
      {/* Top Strip */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-14 -rotate-3 z-10">
        <div className="w-full h-full bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 flex items-center shadow-2xl">
          <div className="marquee-left flex whitespace-nowrap gap-12 font-extrabold text-white text-xl px-8 animate-marquee-left">
            {STRIP_ITEMS.concat(STRIP_ITEMS).map((t, i) => (
              <span key={`top-${i}`}>
                ✦ {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250%] h-14 rotate-6 z-20">
        <div className="w-full h-full bg-gradient-to-r from-purple-400 via-purple-500 to-purple-700 flex items-center shadow-2xl">
          <div className="marquee-right flex whitespace-nowrap gap-12 font-extrabold text-white text-xl px-8 animate-marquee-right">
            {STRIP_ITEMS.concat(STRIP_ITEMS).map((t, i) => (
              <span key={`bottom-${i}`}>
                ✦ {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovingStrips;
