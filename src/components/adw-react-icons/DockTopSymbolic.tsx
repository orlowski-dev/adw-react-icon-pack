"use client";

import { createElement, type HTMLAttributes, useId } from "react";

interface Props {
  title?: string;
  size?: number;
  wrapper?: "div" | "span";
  wrapperProps?:
    | HTMLAttributes<HTMLDivElement>
    | HTMLAttributes<HTMLSpanElement>;
}

const SvgTemplate = ({ title, size }: Props) => {
  const id = useId();
  const sizeEm = size ? `${size / 16}em` : "1.5em";

  return (
    <svg
      height={sizeEm}
      viewBox="0 0 16 16"
      width={sizeEm}
      xmlns="http://www.w3.org/2000/svg"
      aria-labelledby={title ? id : undefined}
    >
      {title ? <title id={id}>{title}</title> : undefined}
      <g fill="currentColor">
        <path d="m 3 15.019531 c -1.644531 0 -3 -1.355469 -3 -3 v -8 c 0 -1.644531 1.355469 -3 3 -3 h 10 c 1.644531 0 3 1.355469 3 3 v 8 c 0 1.644531 -1.355469 3 -3 3 z m 0 -2 h 10 c 0.570312 0 1 -0.429687 1 -1 v -8 c 0 -0.570312 -0.429688 -1 -1 -1 h -10 c -0.570312 0 -1 0.429688 -1 1 v 8 c 0 0.570313 0.429688 1 1 1 z m 0 0"/>
        <path d="m 15 6.519531 h -14 v -4.5 h 14 z m 0 0" fill-opacity="0.35"/>
        <path d="m 1 6.019531 v 1 h 14 v -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDockTopSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDockTopSymbolic;
