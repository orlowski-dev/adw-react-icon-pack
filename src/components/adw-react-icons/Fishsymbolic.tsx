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
      <path d="m 10.109375 0.0078125 c -0.113281 -0.015625 -0.230469 -0.0078125 -0.339844 0.0195313 c -0.335937 0.0781252 -0.609375 0.3281252 -0.71875 0.6562502 l -0.835937 2.515625 c -1.714844 0.546875 -3.589844 0.957031 -5.210938 2.050781 c -1.761718 1.191406 -3.003906 3.308594 -3.003906 6.75 v 2 s -0.015625 0.457031 0.230469 0.949219 c 0.246093 0.488281 0.9375 1.050781 1.769531 1.050781 h 2 c 2.726562 0 4.738281 -1.011719 6.09375 -2.628906 c 1.25 -1.496094 1.984375 -3.445313 2.679688 -5.574219 l 2.542968 -0.847656 c 0.328125 -0.109375 0.578125 -0.382813 0.65625 -0.71875 c 0.082032 -0.335938 -0.019531 -0.691407 -0.265625 -0.9375 l -5 -5 c -0.160156 -0.160157 -0.371093 -0.261719 -0.597656 -0.2851565 z m 0.328125 2.8437495 l 2.710938 2.710938 l -1.464844 0.488281 c -0.304688 0.101563 -0.539063 0.339844 -0.636719 0.648438 c -0.605469 1.902343 -1.222656 3.53125 -2.011719 4.734375 c -0.375 -0.785156 -1.058594 -1.992188 -2.160156 -3.261719 c -0.179688 -0.207031 -0.496094 -0.230469 -0.703125 -0.046875 c -0.207031 0.179688 -0.230469 0.496094 -0.050781 0.703125 c 1.3125 1.511719 1.972656 2.890625 2.226562 3.5 c -0.992187 1.078125 -2.226562 1.671875 -4.347656 1.671875 h -2 v -2 c 0 -3.011719 0.84375 -4.226562 2.125 -5.09375 c 1.277344 -0.867188 3.195312 -1.265625 5.203125 -1.960938 c 0.292969 -0.101562 0.523437 -0.332031 0.621094 -0.628906 z m -6.4375 7.148438 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFishsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFishsymbolic;
