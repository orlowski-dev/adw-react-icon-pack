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
        <path d="m 2.625 4.4375 c -0.230469 0.046875 -0.445312 0.132812 -0.65625 0.21875 c -0.015625 0.625 0.085938 1.441406 -0.15625 1.65625 c -0.238281 0.210938 -1.039062 0.035156 -1.65625 -0.03125 c -0.1328125 0.238281 -0.234375 0.484375 -0.3125 0.75 c 0.476562 0.394531 1.140625 0.839844 1.15625 1.15625 c 0.015625 0.320312 -0.625 0.804688 -1.0625 1.25 c 0.1015625 0.257812 0.25 0.492188 0.40625 0.71875 c 0.609375 -0.125 1.367188 -0.375 1.625 -0.1875 c 0.261719 0.1875 0.265625 1.003906 0.34375 1.625 c 0.25 0.074219 0.511719 0.105469 0.78125 0.125 c 0.28125 -0.554688 0.566406 -1.320312 0.875 -1.40625 c 0.316406 -0.089844 0.964844 0.457031 1.5 0.78125 c 0.21875 -0.152344 0.414062 -0.335938 0.59375 -0.53125 c -0.253906 -0.574219 -0.722656 -1.292969 -0.59375 -1.59375 s 0.976562 -0.46875 1.5625 -0.6875 c 0.003906 -0.074219 0.03125 -0.144531 0.03125 -0.21875 c 0 -0.191406 -0.035156 -0.378906 -0.0625 -0.5625 c -0.605469 -0.160156 -1.46875 -0.242188 -1.625 -0.53125 s 0.242188 -1.0625 0.4375 -1.65625 c -0.199219 -0.179688 -0.417969 -0.335938 -0.65625 -0.46875 c -0.5 0.375 -1.085938 0.996094 -1.40625 0.9375 c -0.316406 -0.054688 -0.664062 -0.820312 -1 -1.34375 c -0.039062 0.007812 -0.085938 -0.007812 -0.125 0 z m 0.625 1.875 c 0.933594 0 1.6875 0.753906 1.6875 1.6875 s -0.753906 1.6875 -1.6875 1.6875 s -1.6875 -0.753906 -1.6875 -1.6875 s 0.753906 -1.6875 1.6875 -1.6875 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPhonelinkSetupSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhonelinkSetupSymbolic;
