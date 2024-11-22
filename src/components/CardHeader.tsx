import StarIcon from "@/assets/icons/star.svg";
import { twMerge } from "tailwind-merge";

export const CardHeader = ({
  title,
  description,
  className,
}: {
  title: string;
  description: string;
  className?: string;
}) => {
  return (
    <div className={twMerge("flex flex-col md:px-10 md:py-8 p-6", className)}>
      <div className="inline-flex items-center gap-2">
        <StarIcon className="text-emerald-300 size-9" />
        <h3 className="font-serif text-2xl">{title}</h3>
      </div>
      <p className="mt-2 max-w-xs text-sm text-white/60 lg:text-base">
        {description}
      </p>
    </div>
  );
};
