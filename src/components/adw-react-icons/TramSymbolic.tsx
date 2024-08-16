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
        <path d="m 10 5 c 0.554688 0 1 0.445312 1 1 v 5.996094 c 0 0.554687 -0.445312 1 -1 1 h -4.03125 c -0.554688 0 -1 -0.445313 -1 -1 v -5.996094 c 0 -0.554688 0.445312 -1 1 -1 z m -7.03125 1 v 5.996094 c 0 1.660156 1.339844 3 3 3 h 4.03125 c 1.660156 0 3 -1.339844 3 -3 v -5.996094 c 0 -1.660156 -1.339844 -3 -3 -3 h -4.03125 c -1.660156 0 -3 1.339844 -3 3 z m 0 0"/>
        <path d="m 5.410156 2.339844 c 1.695313 -0.453125 3.484375 -0.453125 5.179688 0 c 0.53125 0.144531 1.082031 -0.171875 1.222656 -0.707032 c 0.144531 -0.53125 -0.171875 -1.082031 -0.707031 -1.222656 c -2.035157 -0.546875 -4.175781 -0.546875 -6.210938 0 c -0.535156 0.140625 -0.851562 0.691406 -0.707031 1.222656 c 0.140625 0.535157 0.691406 0.851563 1.222656 0.707032 z m 0 0"/>
        <path d="m 4 9 h 8 v 1 h -8 z m 0 0" fill-rule="evenodd"/>
        <path d="m 9 11.492188 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 c 0 -0.550782 0.449219 -1 1 -1 s 1 0.449218 1 1 z m 0 0" fill-rule="evenodd"/>
        <path d="m 7 1 v 3 h 2 v -3 z m 0 0"/>
        <path d="m 11.507812 12.992188 c -0.132812 0 -0.261718 0.050781 -0.355468 0.148437 c -0.191406 0.191406 -0.191406 0.511719 0 0.703125 l 1.984375 1.984375 c 0.195312 0.195313 0.511719 0.195313 0.707031 0 s 0.195312 -0.511719 0 -0.707031 l -1.984375 -1.980469 c -0.09375 -0.097656 -0.21875 -0.148437 -0.351563 -0.148437 z m 0 0"/>
        <path d="m 4.503906 12.992188 c 0.132813 0 0.257813 0.050781 0.351563 0.148437 c 0.195312 0.191406 0.195312 0.511719 0 0.703125 l -1.980469 1.984375 c -0.195312 0.195313 -0.511719 0.195313 -0.707031 0 c -0.195313 -0.195313 -0.195313 -0.511719 0 -0.707031 l 1.980469 -1.980469 c 0.097656 -0.097656 0.222656 -0.148437 0.355468 -0.148437 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTramSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTramSymbolic;
