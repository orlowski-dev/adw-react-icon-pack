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
        <path d="m 8 0 l -2 6 l -6 2 l 6 2 l 2 6 l 2 -6 l 6 -2 l -6 -2 z m 0 6 c 1.105469 0 2 0.894531 2 2 s -0.894531 2 -2 2 s -2 -0.894531 -2 -2 s 0.894531 -2 2 -2 z m 0 0"/>
        <path d="m 2.5 2.5 l 1.5 3.5 l 1.5 -0.5 l 0.5 -1.5 z m 11 0 l -3.5 1.5 l 0.5 1.5 l 1.5 0.5 z m -9.5 7.5 l -1.5 3.5 l 3.5 -1.5 l -0.5 -1.5 z m 8 0 l -1.5 0.5 l -0.5 1.5 l 3.5 1.5 z m 0 0" fill-opacity="0.35"/>
        <path d="m 9 8 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCompassAltSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCompassAltSymbolic;
