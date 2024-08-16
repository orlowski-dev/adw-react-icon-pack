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
        <path d="m 12 9 v 1 c 0 0.265625 0.09375 0.53125 0.28125 0.71875 l 0.28125 0.28125 h -11.625 v 2 h 11.625 l -0.28125 0.28125 c -0.1875 0.1875 -0.28125 0.453125 -0.28125 0.71875 v 1 h 1 c 0.265625 0 0.53125 -0.09375 0.71875 -0.28125 l 2.28125 -2.28125 v -0.875 l -2.28125 -2.28125 c -0.1875 -0.1875 -0.453125 -0.28125 -0.71875 -0.28125 z m 0 0"/>
        <path d="m 3 2 h 5 c 0.546875 0 1 0.453125 1 1 v 3.925781 c 0 0.589844 -0.484375 1.074219 -1.074219 1.074219 h -3.917969 c -0.589843 0 -1.074218 -0.484375 -1.078124 -1.074219 v 0.035157 c 0.019531 -0.546876 0.488281 -0.980469 1.035156 -0.960938 h 0.035156 h 6 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -6 h 0.035156 c -1.660156 -0.058594 -3.046875 1.230469 -3.105468 2.894531 v 0.035157 c 0.003906 1.703124 1.375 3.070312 3.078124 3.070312 h 3.917969 c 1.703125 0 3.074219 -1.371094 3.074219 -3.074219 v -3.925781 c 0 -1.664062 -1.335938 -3 -3 -3 h -5 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTextDirectionLtrSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTextDirectionLtrSymbolic;
