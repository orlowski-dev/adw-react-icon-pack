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
        <path d="m 2 6.035156 v 6.964844 h -2 c 0 1.105469 0.894531 2 2 2 h 4.984375 v -2 h -2.984375 v -7 h 3 v -2 h -2.964844 c -1.125 0 -2.035156 0.910156 -2.035156 2.035156 z m 0 0"/>
        <path d="m 8 1 v 2 h 5 c 0.554688 0 1 0.445312 1 1 v 5 c 0 0.554688 -0.445312 1 -1 1 h -5 v 2 h 5 c 1.660156 0 3 -1.339844 3 -3 v -5 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 0"/>
        <path d="m 8 10 h 3 v 4 h -3 z m 0 0"/>
        <path d="m 8 12.984375 h 3.972656 c 0.550782 0 1 0.445313 1 1 v 1.015625 h -4.972656 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwExternalDisplaySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwExternalDisplaySymbolic;
