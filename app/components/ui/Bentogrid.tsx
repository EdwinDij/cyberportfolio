import React from "react";
import { BentoGridProps, BentoGridItemProps } from "../../types";

export const BentoGrid = ({ className, children }: BentoGridProps) => {
  return (
    <div
      className={
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto" +
        (className ? ` ${className}` : "")
      }
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
}: BentoGridItemProps) => {
  return (
    <div
      className={
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4 project-card" +
        (className ? ` ${className}` : "")
      }
    >
      <div className="project-card-glow"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center">
        {header}
        <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200 mb-2 mt-2">
          {title}
        </div>
        <div className="font-sans font-normal text-neutral-600 text-xs dark:text-neutral-300">
          {description}
        </div>
      </div>
    </div>
  );
};
