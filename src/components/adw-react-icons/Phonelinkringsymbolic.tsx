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
        <path d="m 11.800781 0 c 1.203125 0 2.199219 1 2.199219 2.199219 h -2 c 0 -0.128907 -0.074219 -0.199219 -0.199219 -0.199219 h -7.605469 c -0.125 0 -0.195312 0.070312 -0.195312 0.199219 v 9.613281 c 0 0.128906 0.070312 0.199219 0.195312 0.199219 l 7.804688 -0.011719 v 2 l 1.984375 0.0625 c -0.132813 1.082031 -1.070313 1.9375 -2.183594 1.9375 h -7.605469 c -1.203124 0 -2.195312 -1 -2.195312 -2.199219 v -11.601562 c 0 -1.199219 0.992188 -2.199219 2.195312 -2.199219 z m -3.800781 12.902344 c -0.550781 0 -1 0.382812 -1 0.933594 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -0.550782 -0.449219 -0.933594 -1 -0.933594 z m 0 0"/>
        <path d="m 16 8.0625 c 0 -2.167969 -0.738281 -4.019531 -2 -5 h -1 v 2 c 0.605469 0.789062 1 1.757812 1 3 s -0.394531 2.21875 -1 3 v 2 h 1 c 1.222656 -0.996094 2 -2.875 2 -5 z m 0 0"/>
        <path d="m 13 8.0625 c 0 -1.257812 -0.3125 -2.214844 -1 -3 h -1 v 6 h 1 c 0.671875 -0.835938 1 -1.742188 1 -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPhonelinkringsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhonelinkringsymbolic;
