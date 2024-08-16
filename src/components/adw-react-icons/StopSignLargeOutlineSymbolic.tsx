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
        <path d="m 5.308594 0.0195312 c -0.398438 0 -0.777344 0.1601568 -1.058594 0.4414068 l -3.8125 3.804687 c -0.28125 0.28125 -0.4375 0.664063 -0.4375 1.0625 v 5.382813 c 0 0.398437 0.15625 0.78125 0.4375 1.0625 l 3.808594 3.808593 c 0.28125 0.28125 0.664062 0.4375 1.0625 0.4375 h 5.382812 c 0.398438 0 0.777344 -0.15625 1.058594 -0.4375 l 3.8125 -3.808593 c 0.28125 -0.28125 0.4375 -0.664063 0.4375 -1.0625 v -5.382813 c 0 -0.394531 -0.15625 -0.777344 -0.4375 -1.058594 l -3.808594 -3.808593 c -0.28125 -0.28125 -0.664062 -0.4414068 -1.0625 -0.4414068 z m 0.207031 1.9999998 h 4.96875 l 3.515625 3.515625 v 4.96875 l -3.515625 3.515625 h -4.96875 l -3.515625 -3.515625 v -4.96875 z m 0 0"/>
        <path d="m 6.34375 4 l -2.34375 2.34375 v 3.3125 l 2.34375 2.34375 h 3.3125 l 2.34375 -2.34375 v -3.3125 l -2.34375 -2.34375 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwStopSignLargeOutlineSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStopSignLargeOutlineSymbolic;
