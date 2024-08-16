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
        <path d="m 2.5 11 c -1.367188 0 -2.5 1.132812 -2.5 2.5 s 1.132812 2.5 2.5 2.5 s 2.5 -1.132812 2.5 -2.5 s -1.132812 -2.5 -2.5 -2.5 z m 0 2 c 0.289062 0 0.5 0.210938 0.5 0.5 s -0.210938 0.5 -0.5 0.5 s -0.5 -0.210938 -0.5 -0.5 s 0.210938 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 8.5 11 c -1.367188 0 -2.5 1.132812 -2.5 2.5 s 1.132812 2.5 2.5 2.5 s 2.5 -1.132812 2.5 -2.5 s -1.132812 -2.5 -2.5 -2.5 z m 0 2 c 0.289062 0 0.5 0.210938 0.5 0.5 s -0.210938 0.5 -0.5 0.5 s -0.5 -0.210938 -0.5 -0.5 s 0.210938 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 7 1 c -2.199219 0 -4 1.800781 -4 4 v 8.5 h 2 v -8.5 c 0 -0.722656 0.4375 -1.238281 1 -1.589844 v 10.089844 h 2 v -12.5 z m 0 0"/>
        <path d="m 4 10 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 10 1 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 2.425781 c 0.328125 0 0.574219 0.246094 0.574219 0.574219 v 11.425781 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -11.425781 c 0 -1.410157 -1.164062 -2.574219 -2.574219 -2.574219 z m 0 0"/>
        <path d="m 10 4 h 3 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 h -3 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 10 7 h 3 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 h -3 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBarberSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBarberSymbolic;
