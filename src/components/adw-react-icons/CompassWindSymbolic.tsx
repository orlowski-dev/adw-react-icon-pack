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
        <path d="m 16 8 h -8 l 3 -2 l -3 -6 v 8 l -2 -3 l -6 3 h 8 l -3 2 l 3 6 v -8 l 2 3 z m 0 0"/>
        <path d="m 2 1 l 2 4 l 2 -2 z m 13 1 l -4 2 l 2 2 z m -12 8 l -2 4 l 4 -2 z m 9 1 l -2 2 l 4 2 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwCompassWindSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCompassWindSymbolic;
