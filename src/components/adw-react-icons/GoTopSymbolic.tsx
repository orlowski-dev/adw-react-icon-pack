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
      <path d="m 1 3 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 14 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 6.84375 2.011719 c -0.207031 0.03125 -0.402344 0.128906 -0.550781 0.28125 l -6 6 c -0.1875 0.1875 -0.292969 0.441406 -0.292969 0.707031 s 0.105469 0.519531 0.292969 0.707031 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 5.292969 -5.292969 l 5.292969 5.292969 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 c 0.1875 -0.1875 0.292969 -0.441406 0.292969 -0.707031 s -0.105469 -0.519531 -0.292969 -0.707031 l -6 -6 c -0.226562 -0.226563 -0.546875 -0.332031 -0.863281 -0.28125 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwGoTopSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGoTopSymbolic;
