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
        <path d="m 4 0 v 3.535156 c 1.097656 -0.988281 2.523438 -1.53125 4 -1.535156 v -2 z m 8 0 v 3.53125 c 0.164062 0.144531 0.324219 0.304688 0.46875 0.46875 h 3.53125 v -4 z m -12 4 v 4 h 2 c 0.003906 -1.476562 0.546875 -2.902344 1.535156 -4 z m 14 4 c -0.003906 1.476562 -0.546875 2.902344 -1.535156 4 h 3.535156 v -4 z m -14 4 v 4 h 4 v -3.535156 c -0.164062 -0.144532 -0.320312 -0.300782 -0.464844 -0.464844 z m 12 0.464844 c -1.097656 0.988281 -2.523438 1.53125 -4 1.535156 v 2 h 4 z m 0 0" fill-opacity="0.35"/>
        <path d="m 14 8 c 0 3.3125 -2.6875 6 -6 6 s -6 -2.6875 -6 -6 s 2.6875 -6 6 -6 s 6 2.6875 6 6 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTransparentBackgroundSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTransparentBackgroundSymbolic;
