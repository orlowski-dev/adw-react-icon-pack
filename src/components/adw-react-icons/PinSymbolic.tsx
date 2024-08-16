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
        <path d="m 9 11 h -2 v 4 l 1 1 l 1 -1 z m 0 0"/>
        <path d="m 12.222656 0.292969 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 h -7.015625 c -0.554688 0 -1 0.449219 -1 1 s 0.445312 1 1 1 h 7.015625 c 0.550781 0 1 -0.449219 1 -1 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 z m 0 0"/>
        <path d="m 2 10 c 0 -3.3125 2.6875 -6 6 -6 s 6 2.6875 6 6 z m 0 0"/>
        <path d="m 4.441406 0.972656 l 0.894532 7.164063 h 5.375 l 0.847656 -7.109375 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPinSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPinSymbolic;
