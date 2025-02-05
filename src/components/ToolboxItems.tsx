import React, { Fragment } from "react";
import { twMerge } from "tailwind-merge";

function ToolboxItems({
  items,
  className,
}: {
  items: { icon: React.ElementType; title: string }[];
  className?: string;
}) {
  return (
    <div className={"flex mt-6 overflow-hidden"}>
      <div className={twMerge("flex flex-none py-0.5 gap-6 pr-6", className)}>
        {[...new Array(2)].fill(0).map((_, idx) => (
          <Fragment key={idx}>
            {items.map((item, index) => (
              <div
                key={index}
                className="inline-flex items-center gap-4 py-2 px-3 outline outline-2 outline-white/10 rounded-lg"
              >
                <span>
                  {<item.icon className="size-10 fill-[url(#tech-icon)]" />}
                </span>
                <svg className="size-0 absolute">
                  <linearGradient id="tech-icon">
                    <stop offset="0%" stopColor="rgb(110 231 183)" />
                    <stop offset="100%" stopColor="rgb(56 189 248)" />
                  </linearGradient>
                </svg>
                <span className="font-semibold">{item.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
}

export default ToolboxItems;
