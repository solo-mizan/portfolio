import React, { ElementType } from "react";

interface ToolsIconProps {
  component: ElementType;
}

const ToolsIcon: React.FC<ToolsIconProps> = ({ component: Component }) => {
  return (
    <>
      <Component className="fill-[url(#tool-icon-gradient)] size-10" />
      <svg className="absolute size-0">
        <linearGradient id="tool-icon-gradient">
          <stop offset="0%" stopColor="rgb(110 231 183)" />
          <stop offset="100%" stopColor="rgb(14 165 233)" />
        </linearGradient>
      </svg>
    </>
  );
};
export default ToolsIcon;
