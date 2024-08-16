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
        <path d="m 9.492188 0.140625 c -0.851563 -0.1640625 -1.722657 -0.1835938 -2.574219 -0.0664062 c -1.699219 0.2304692 -3.328125 1.0078122 -4.601563 2.2929692 c -2.546875 2.566406 -3.050781 6.539062 -1.230468 9.664062 c 1.824218 3.121094 5.53125 4.636719 9.019531 3.683594 c 3.488281 -0.949219 5.90625 -4.132813 5.890625 -7.75 c 0 -0.550782 -0.453125 -1 -1.003906 -0.996094 c -0.550782 0.003906 -0.996094 0.453125 -0.996094 1.003906 c 0.015625 2.722656 -1.792969 5.097656 -4.417969 5.816406 c -2.625 0.714844 -5.390625 -0.417968 -6.761719 -2.765624 c -1.371094 -2.351563 -0.996094 -5.316407 0.921875 -7.25 c 1.914063 -1.929688 4.875 -2.335938 7.238281 -0.984376 c 0.476563 0.273438 1.089844 0.109376 1.363282 -0.371093 c 0.273437 -0.480469 0.109375 -1.089844 -0.371094 -1.367188 c -0.785156 -0.445312 -1.621094 -0.75 -2.476562 -0.910156 z m 0 0"/>
        <path d="m 15.753906 3.65625 c 0.175782 -0.199219 0.261719 -0.460938 0.246094 -0.722656 c -0.019531 -0.265625 -0.140625 -0.511719 -0.339844 -0.6875 c -0.199218 -0.175782 -0.460937 -0.265625 -0.726562 -0.246094 c -0.265625 0.015625 -0.511719 0.140625 -0.6875 0.339844 l -6.296875 7.195312 l -2.242188 -2.246094 c -0.390625 -0.390624 -1.023437 -0.390624 -1.414062 0 c -0.1875 0.1875 -0.292969 0.445313 -0.292969 0.710938 s 0.105469 0.519531 0.292969 0.707031 l 3 3 c 0.195312 0.195313 0.464843 0.300781 0.742187 0.292969 c 0.277344 -0.011719 0.535156 -0.132812 0.71875 -0.34375 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCheckRoundOutline2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCheckRoundOutline2Symbolic;
