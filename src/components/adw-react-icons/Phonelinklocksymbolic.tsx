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
        <path d="m 4.199219 0 c -1.203125 0 -2.199219 1 -2.199219 2.199219 v 1.808593 h 2 v -1.808593 c 0 -0.128907 0.074219 -0.199219 0.199219 -0.199219 h 7.605469 c 0.125 0 0.195312 0.070312 0.195312 0.199219 v 9.613281 c 0 0.128906 -0.070312 0.199219 -0.195312 0.199219 l -9.804688 -0.011719 v 1.800781 c 0 1.199219 0.996094 2.199219 2.199219 2.199219 h 7.605469 c 1.203124 0 2.195312 -1 2.195312 -2.199219 v -11.601562 c 0 -1.199219 -0.992188 -2.199219 -2.195312 -2.199219 z m 3.800781 12.902344 c 0.550781 0 1 0.382812 1 0.933594 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 c 0 -0.550782 0.449219 -0.933594 1 -0.933594 z m 0 0"/>
        <path d="m 4 5 c -1.097656 0 -2 0.902344 -2 2 v 1 h -0.453125 c -0.3125 0 -0.546875 0.171875 -0.546875 0.5 v 2.5 h 6 v -2.5 c 0 -0.257812 -0.210938 -0.5 -0.5 -0.5 h -0.5 v -1 c 0 -1.097656 -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 v 1 h -2 v -1 c 0 -0.558594 0.441406 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPhonelinklocksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhonelinklocksymbolic;
