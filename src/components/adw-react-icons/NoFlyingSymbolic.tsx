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
        <path d="m 6.496094 1 c -0.792969 0 -0.78125 0.035156 -0.53125 1.03125 l 1.625 4.96875 h -1.648438 l 3.773438 3.773438 l 1.1875 -1.773438 h 3.09375 c 0.554687 0 1 -0.445312 1 -1 s -0.445313 -1 -1 -1 h -3.09375 l -3.6875 -5.5 c -0.265625 -0.457031 -0.285156 -0.5 -0.65625 -0.5 z m -5.1875 4 c -0.425782 0 -0.28125 0.4375 -0.28125 0.4375 l 0.28125 2.5625 l -0.28125 2.5625 s -0.140625 0.4375 0.25 0.4375 h 0.25 c 0.210937 0 0.203125 -0.007812 0.34375 -0.21875 l 1.21875 -1.78125 h 2.726562 l -2 -2 h -0.726562 l -1.21875 -1.78125 c -0.140625 -0.207031 -0.121094 -0.21875 -0.34375 -0.21875 z m 5.84375 5.332031 l -1.1875 3.605469 c -0.261719 1.046875 -0.265625 1.0625 0.53125 1.0625 c 0.433594 0 0.433594 -0.011719 0.71875 -0.5 l 1.648437 -2.453125 z m 0 0"/>
        <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNoFlyingSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNoFlyingSymbolic;
