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
      <path d="m 12 1 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 1.292969 1.292969 h -7.585938 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 7.585938 l -1.03125 1.03125 c 0.148437 -0.015625 0.296874 -0.027344 0.445312 -0.03125 c 0.6875 0 1.367188 0.144531 1.996094 0.417969 l 1.710937 -1.710938 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -3 -3 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m -8 6 c -0.257812 0 -0.511719 0.097656 -0.707031 0.292969 l -3 3 c -0.3906252 0.390625 -0.3906252 1.023437 0 1.414062 l 3 3 c 0.1875 0.1875 0.441406 0.292969 0.707031 0.292969 s 0.519531 -0.105469 0.707031 -0.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -1.292969 -1.292969 h 3.585938 c 0.003906 -0.6875 0.144531 -1.371094 0.425781 -2 h -4.011719 l 1.292969 -1.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 c -0.195312 -0.195313 -0.449219 -0.292969 -0.707031 -0.292969 z m 0 0" fill="#2e3436" fill-opacity="0.35"/>
    <path class="error" d="m 12 8 c -2.210938 0 -4 1.789062 -4 4 s 1.789062 4 4 4 s 4 -1.789062 4 -4 s -1.789062 -4 -4 -4 z m -2 3 h 4 c 0.554688 0 1 0.445312 1 1 s -0.445312 1 -1 1 h -4 c -0.554688 0 -1 -0.445312 -1 -1 s 0.445312 -1 1 -1 z m 0 0" fill="#e01b24"/>
    </svg>
  );
};

const AdwNetworkerrorsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkerrorsymbolic;
