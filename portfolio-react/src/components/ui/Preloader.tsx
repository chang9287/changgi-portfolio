import { useState, useEffect } from "react";

type PreloaderProps = {
  finishLoading: () => void;
}

export default function Preloader({finishLoading}: PreloaderProps) {
  const [percent, setPercent] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      /* percent 증가 */
      setPercent((count) => {
        if(count >= 100) {
          clearInterval(interval);
          
          setTimeout(() => {
            finishLoading();
          }, 100);
          return 100;
        }
        /* 1씩 증가 */
        return count + 1;
      })
    }, 20);

    return () => clearInterval(interval);
  },[finishLoading]);

  const progressWidth = (percent / 100) * 380;
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-home-bg">
      {/* 로딩 바 */}
      <div className="relative w-[min(410px,80vw)]">
        <svg viewBox="0 0 410 60">
          <defs>
            <clipPath id="progressClip">
              <rect
                x={15}
                y={15}
                width={progressWidth}
                height={30}
                rx={15}
                ry={15}
              />
            </clipPath>
          </defs>

          {/* 채워지는 부분 */}
          <rect
            x={15}
            y={15}
            width={380}
            height={30}
            rx={15}
            ry={15}
            fill="var(--color-main-brown)"
            clipPath="url(#progressClip)"
          />

          {/* 테두리 */}
          <rect
            x={15}
            y={15}
            width={380}
            height={30}
            rx={15}
            ry={15}
            fill="none"
            stroke="var(--color-main-brown)"
            strokeWidth={4}
          />
          <rect 
            x={5}
            y={5}
            width={400}
            height={50}
            rx={25}
            ry={25}
            fill="none"
            stroke="var(--color-main-brown)"
            strokeWidth={4}
          />
        </svg>
        {/* 퍼센트 */}
        <div 
          className={`
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-bold
            ${percent > 50 ? "text-white" : "text-main-black"}`}
        >
          {percent}%
        </div>
      </div>
      {/* 로딩 텍스트 */}
      <div className="mt-5 flex">
        {"LOADING...".split("").map((char, index) => (
          <span
            key={`${char}-${index}`}
            className="inline-block font-bold animate-loading-wave text-4xl text-main-black"
            style={{ animationDelay: `${index * 80}ms` }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
}