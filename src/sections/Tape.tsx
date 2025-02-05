import Starcon from "@/assets/icons/star.svg";
import { Fragment } from "react";
const ScrollWords = [
  "Performat",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Responsive",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-14 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -rotate-3">
        <div className="flex [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
          <div
            className="flex flex-none gap-4 pr-4 py-3 animate-move-left
          "
          >
            {[...new Array(2)].fill(0).map((_, idx) => (
              <Fragment key={idx}>
                {ScrollWords.map((words: string, index: number) => (
                  <div key={index} className="inline-flex gap-4 items-center">
                    <span className="text-gray-900 uppercase font-extrabold text-sm">
                      {words}
                    </span>
                    <Starcon className="size-6 text-gray-900 -rotate-12" />
                  </div>
                ))}
              </Fragment>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
