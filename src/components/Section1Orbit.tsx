import React, { PropsWithChildren } from "react";
import { twMerge } from "tailwind-merge";

function Section1Orbit({
  children,
  size,
  rotation,
  shouldOrbit = false,
  spinDuration,
  starShouldSpin = false,
  starSpinDuration,
}: PropsWithChildren<{
  size: number;
  rotation: number;
  spinDuration?: string;
  shouldOrbit?: boolean;
  starShouldSpin?: boolean;
  starSpinDuration?: string;
}>) {
  return (
    <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div
        className={twMerge(shouldOrbit === true && "animate-spin")}
        style={{
          animationDuration: spinDuration,
        }}
      >
        <div
          className="flex items-start justify-start"
          style={{
            rotate: `${rotation}deg`,
            height: `${size}px`,
            width: `${size}px`,
          }}
        >
          <div
            className={twMerge(starShouldSpin === true && "animate-spin")}
            style={{
              animationDuration: starSpinDuration,
            }}
          >
            <div className="inline-flex">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1Orbit;
