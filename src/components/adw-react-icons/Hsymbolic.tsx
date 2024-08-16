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
      <path d="m 3 1 c -0.550781 0 -1 0.449219 -1 1 v 13 c 0 0.550781 0.449219 1 1 1 h 10 c 0.550781 0 1 -0.449219 1 -1 v -9.5 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 l -3.5 -3.5 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 2 3 c 0.550781 0 1 0.449219 1 1 v 2.535156 c 1.234375 -0.714844 2.765625 -0.714844 4 0 c 1.214844 0.703125 1.972656 1.996094 2 3.394532 v 0.003906 v 0.003906 v 0.0625 v 2 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 v -2 c 0 -0.714844 -0.378906 -1.375 -1 -1.730469 c -0.621094 -0.359375 -1.378906 -0.359375 -2 0 c -0.621094 0.355469 -1 1.015625 -1 1.730469 v 2 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 v -8 c 0 -0.550781 0.449219 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwHsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHsymbolic;
