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
        <path d="m 5 5 h 6 v 6 h -6 z m 0 0"/>
        <path d="m 13 5 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 13 7 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 13 9 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 0 6 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 0 8 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 0 10 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 5 0 h 1 v 3 h -1 z m 0 0"/>
        <path d="m 7 0 h 1 v 3 h -1 z m 0 0"/>
        <path d="m 9 0 h 1 v 3 h -1 z m 0 0"/>
        <path d="m 10 13 h 1 v 3 h -1 z m 0 0"/>
        <path d="m 8 13 h 1 v 3 h -1 z m 0 0"/>
        <path d="m 6 13 h 1 v 3 h -1 z m 0 0"/>
        <path d="m 5 2 c -1.644531 0 -3 1.355469 -3 3 v 6 c 0 1.644531 1.355469 3 3 3 h 6 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 6 c 0.570312 0 1 0.429688 1 1 v 6 c 0 0.570312 -0.429688 1 -1 1 h -6 c -0.570312 0 -1 -0.429688 -1 -1 v -6 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwProcessorSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwProcessorSymbolic;
