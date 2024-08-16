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
        <path d="m 4 1 c -1.644531 0 -3 1.355469 -3 3 v 8 c 0 1.644531 1.355469 3 3 3 h 4 v -2 h -1 v -10 h 6 c -0.417969 -1.15625 -1.519531 -2 -2.8125 -2 z m 12 0 l -6 6 l 0.035156 4 l -1.0625 1.058594 v 2.941406 h 3.015625 l 1.011719 -1.019531 l 3 0.019531 z m -12 2 h 2 v 10 h -2 c -0.570312 0 -1 -0.429688 -1 -1 v -8 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/>
        <path d="m 3 2 h 3 v 12 h -3 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwAnnotationSidebarSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAnnotationSidebarSymbolic;
