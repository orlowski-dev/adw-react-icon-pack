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
        <path d="m 2 3 v 11 h 11 v -2 h -9 v -9 z m 0 0"/>
        <path d="m 3 -0.0234375 l -3 3.9999995 h 6 z m 0 0"/>
        <path d="m 16 12.976562 l -4 3 v -6 z m 0 0"/>
        <path d="m 5 6.839844 v 6.160156 h 4 l 0.09375 -2.511719 l -1.09375 -0.648437 l -1 -3 z m 0 0" fill-opacity="0.33"/>
    </g>
    </svg>
  );
};

const AdwIntegralsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwIntegralsymbolic;
