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
      <path d="m 4 1 c -0.574219 0 -1.148438 0.167969 -1.625 0.484375 c -0.480469 0.316406 -0.863281 0.773437 -1.097656 1.296875 s -0.320313 1.109375 -0.292969 1.679688 c 0.027344 0.574218 0.160156 1.136718 0.300781 1.695312 l 0.714844 2.84375 h 4 l 0.710938 -3.011719 c 0.128906 -0.542969 0.253906 -1.089843 0.269531 -1.648437 c 0.019531 -0.558594 -0.074219 -1.125 -0.308594 -1.632813 c -0.234375 -0.503906 -0.613281 -0.945312 -1.085937 -1.246093 c -0.46875 -0.300782 -1.027344 -0.460938 -1.585938 -0.460938 z m 8 2 c -0.574219 0 -1.148438 0.167969 -1.625 0.484375 c -0.480469 0.316406 -0.863281 0.773437 -1.097656 1.296875 s -0.320313 1.109375 -0.292969 1.679688 c 0.027344 0.574218 0.160156 1.136718 0.300781 1.695312 l 0.714844 2.84375 h 4 l 0.710938 -3.011719 c 0.128906 -0.542969 0.253906 -1.089843 0.269531 -1.648437 c 0.019531 -0.558594 -0.074219 -1.125 -0.308594 -1.632813 c -0.234375 -0.503906 -0.613281 -0.945312 -1.085937 -1.246093 c -0.46875 -0.300782 -1.027344 -0.460938 -1.585938 -0.460938 z m -10 7 v 1 h 0.003906 c 0 0.710938 0.382813 1.367188 1 1.726562 c 0.617188 0.355469 1.375 0.355469 1.996094 0 c 0.613281 -0.359374 0.996094 -1.015624 0.996094 -1.726562 h 0.003906 v -1 z m 8 2 v 1 h 0.003906 c 0 0.710938 0.382813 1.367188 1 1.726562 c 0.617188 0.355469 1.375 0.355469 1.996094 0 c 0.613281 -0.359374 0.996094 -1.015624 0.996094 -1.726562 h 0.003906 v -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFeetSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFeetSymbolic;
