
import { ReactNode } from "react";

export default function MonitorFrame({ children }: { children: ReactNode }) {
  return (
    <div className="w-full flex justify-center mt-10">
      <div
        className="
        bg-[#b87333]
        p-6 
        rounded-lg
        shadow-2xl
        border-4 border-[#9a5f29]
        relative
       "
        style={{
          width: "680px",
          height: "520px",
        }}
      >
        <div
          className="
            bg-[#8a4f1f]
            rounded-md
            p-3
            shadow-inner
          "
          style={{
            width: "100%",
            height: "100%",
            border: "3px inset #653b19",
          }}
        >
          <div className="bg-black w-full h-full rounded-md overflow-y-scroll shadow-lg">
            {children}
          </div>
        </div>

        <div
          className="
            absolute 
            left-1/2 
            -bottom-12 
            transform 
            -translate-x-1/2
            bg-[#b87333]
            border-4 border-[#9a5f29] 
            rounded-b-lg 
            shadow-xl 
          "
          style={{
            width: "320px",
            height: "40px",
          }}
        ></div>

        <div
          className="
            absolute 
            left-1/2 
            -bottom-20 
            transform 
            -translate-x-1/2
            bg-[#a76428]
            rounded-md 
            shadow-lg
          "
          style={{
            width: "240px",
            height: "20px",
          }}
        ></div>
      </div>
    </div>
  );
}
