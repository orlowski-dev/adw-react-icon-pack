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
        <path d="m 7 7.90625 v 6.09375 l 1 0.996094 l 1 -0.996094 v -6.09375 z m 0 0" fill-opacity="0.35"/>
        <path d="m 12 6 c 0 2.210938 -1.789062 4 -4 4 s -4 -1.789062 -4 -4 s 1.789062 -4 4 -4 s 4 1.789062 4 4 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPinlocationsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPinlocationsymbolic;
