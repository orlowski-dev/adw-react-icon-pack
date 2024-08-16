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
      <path d="m 11 2 c 0.265625 0 0.519531 0.105469 0.707031 0.292969 l 4 4 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 l -4 4 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 s -0.390625 -1.023437 0 -1.414062 l 2.292969 -2.292969 h -8.585938 c -1.117188 0 -2 0.882812 -2 2 s 0.882812 2 2 2 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 c -2.195312 0 -4 -1.800781 -4 -4 s 1.804688 -4 4 -4 h 8.585938 l -2.292969 -2.292969 c -0.390625 -0.390625 -0.390625 -1.023437 0 -1.414062 c 0.1875 -0.1875 0.441406 -0.292969 0.707031 -0.292969 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrowturnrighthorizontalsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowturnrighthorizontalsymbolic;
