import { twMerge } from "tailwind-merge";
import ToolsIcon from "./ToolsIcon";
import { Fragment } from "react";

type Items = {
  title: string;
  icon: React.ElementType;
}[];

export const ToolboxItems = ({
  items,
  className,
  itemsWrapperClassName,
}: {
  items: Items;
  className?: string;
  itemsWrapperClassName?: string;
}) => {
  return (
    <div
      className={twMerge(
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] flex",
        className
      )}
    >
      <div
        className={twMerge(
          "flex flex-none gap-6 py-0.5 pr-6",
          itemsWrapperClassName
        )}
      >
        {[...new Array(2)].map((_, index) => (
          <Fragment key={index}>
            {items.map((tool) => (
              <div
                key={tool.title}
                className="inline-flex items-center gap-4 px-3 py-2 rounded-lg outline outline-2 outline-white/10"
              >
                <ToolsIcon component={tool.icon} />
                <span>{tool.title}</span>
              </div>
            ))}
          </Fragment>
        ))}
      </div>
    </div>
  );
};
