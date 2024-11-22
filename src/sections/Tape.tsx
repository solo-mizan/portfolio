import StarIcon from "@/assets/icons/star.svg";

const WORDS = [
  "Performant",
  "Accessible",
  "Secure",
  "Interactive",
  "Scalable",
  "User Friendly",
  "Maintainable",
  "Search Optimized",
  "Usable",
  "Reliable",
];

export const TapeSection = () => {
  return (
    <div className="py-16 lg:py-24 overflow-x-clip">
      <div className="bg-gradient-to-r from-emerald-300 to-sky-400 -mx-1 -rotate-3">
        <div className="[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] flex">
          <div className="flex flex-none gap-4">
            {WORDS.map((word) => (
              <div key={word} className="inline-flex items-center gap-4 py-3">
                <span className="font-extrabold text-gray-900 text-sm uppercase">
                  {word}
                </span>
                <span className="-rotate-6">
                  <StarIcon className="text-gray-900 size-6" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
