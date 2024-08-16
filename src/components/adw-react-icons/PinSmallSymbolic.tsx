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
        <path d="m 9 10 h -2 v 2 l 1 1 l 1 -1 z m 0 0"/>
        <path d="m 10.707031 3.292969 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 h -4 c -0.554688 0 -1 0.449219 -1 1 s 0.445312 1 1 1 h 4 c 0.550781 0 1 -0.449219 1 -1 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 z m 0 0"/>
        <path d="m 4 8.988281 c 0 -2.207031 1.792969 -4 4 -4 s 4 1.792969 4 4 z m 0 0"/>
        <path d="m 6 2.972656 l 0.222656 4.773438 h 3.585938 l 0.191406 -4.738282 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPinSmallSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPinSmallSymbolic;
