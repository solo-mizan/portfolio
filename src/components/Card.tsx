import grainImage from "@/assets/images/grain.jpg";
import { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

export const Card = ({
  className,
  children,
}: PropsWithChildren<{ className?: string }>) => {
  return (
    <div>
      <div
        className={twMerge(
          "relative z-0 after:z-10 after:absolute after:inset-0 after:content-[''] bg-gray-800 mx-auto p-6 rounded-3xl overflow-hidden after:outline-2 after:outline after:-outline-offset-2 after:rounded-3xl after:outline-white/30 after:pointer-events-none",
          className
        )}
      >
        <div
          className="-z-10 absolute inset-0 opacity-5"
          style={{ backgroundImage: `url(${grainImage.src})` }}
        ></div>
        {children}
      </div>
    </div>
  );
};
