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
        <path d="m 0 1 v 2 h 2 v 2.46875 l 3 2.5 v 0.0625 l -3 2.5 v 2.46875 h -2 v 2 h 15 v -2 h -2 v -2.46875 l -3 -2.5 v -0.0625 l 3 -2.5 v -2.46875 h 2 v -2 z m 4 2 h 7 v 1.53125 l -3 2.5 v 1.9375 l 3 2.5 v 1.53125 h -1 l -2.5 -2.1875 l -2.5 2.1875 h -1 v -1.53125 l 3 -2.5 v -1.9375 l -3 -2.5 z m 0 0"/>
        <path d="m 6 5 h 3 l -1.5 1.3125 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTimerSandSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTimerSandSymbolic;
