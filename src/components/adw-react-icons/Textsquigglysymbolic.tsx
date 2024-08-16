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
        <path d="m 4.078125 12.289062 l -2.425781 2.351563 l 0.695312 0.71875 l 1.695313 -1.648437 l 1.878906 2.003906 l 2.042969 -2.007813 l 2.007812 2 l 1.972656 -2 l 1.707032 1.652344 l 0.695312 -0.71875 l -2.417968 -2.347656 l -1.964844 1.996093 l -1.992188 -1.996093 l -2.023437 1.988281 z m 0 0"/>
        <path d="m 5 4 h 5 c 0.546875 0 1 0.453125 1 1 v 3.925781 c 0 0.589844 -0.484375 1.074219 -1.074219 1.074219 h -3.917969 c -0.589843 0 -1.078124 -0.484375 -1.078124 -1.074219 v 0.035157 c 0.019531 -0.546876 0.488281 -0.980469 1.035156 -0.960938 h 0.035156 h 6 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -6 h 0.035156 c -1.660156 -0.058594 -3.046875 1.230469 -3.105468 2.890625 v 0.039063 c 0.003906 1.703124 1.375 3.070312 3.078124 3.070312 h 3.917969 c 1.703125 0 3.074219 -1.371094 3.074219 -3.074219 v -3.925781 c 0 -1.664062 -1.335938 -3 -3 -3 h -5 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTextsquigglysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTextsquigglysymbolic;
