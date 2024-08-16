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
      <path d="m 5.03125 0 s -0.710938 -0.015625 -1.449219 0.355469 c -0.738281 0.371093 -1.550781 1.3125 -1.550781 2.644531 v 10 s -0.015625 0.707031 0.355469 1.449219 c 0.367187 0.738281 1.308593 1.550781 2.644531 1.550781 h 6 s 0.707031 0.015625 1.445312 -0.355469 c 0.738282 -0.371093 1.554688 -1.3125 1.554688 -2.644531 v -10 c 0 -1.332031 -0.816406 -2.273438 -1.554688 -2.644531 c -0.738281 -0.371094 -1.445312 -0.355469 -1.445312 -0.355469 z m 0 2 h 6 c 0.550781 0 1 0.445312 1 1 v 10 c 0 0.554688 -0.449219 1 -1 1 h -6 c -0.554688 0 -1 -0.445312 -1 -1 v -10 c 0 -0.554688 0.445312 -1 1 -1 z m 0 1 v 1 h 4 v -1 z m 5.472656 0 c -0.265625 0.011719 -0.472656 0.230469 -0.472656 0.5 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 c -0.011719 0 -0.019531 0 -0.027344 0 z m -1.597656 1.992188 c -0.042969 0 -0.085938 0.003906 -0.125 0.007812 c -0.179688 0.050781 -0.34375 0.148438 -0.46875 0.28125 l -3.03125 3 c -0.238281 0.230469 -0.347656 0.582031 -0.28125 0.90625 v 0.8125 h 2.46875 l -1.1875 1.273438 c -0.214844 0.21875 -0.320312 0.539062 -0.28125 0.84375 v 0.09375 v 0.78125 h 1 c 0.265625 0.003906 0.527344 -0.097657 0.71875 -0.28125 l 3 -2.992188 c 0.183594 -0.191406 0.289062 -0.453125 0.28125 -0.71875 c 0.003906 -0.042969 0.003906 -0.082031 0 -0.125 v -0.875 h -2.5625 l 1.3125 -1.28125 c 0.214844 -0.21875 0.320312 -0.539062 0.28125 -0.84375 c 0 -0.03125 0 -0.0625 0 -0.09375 v -0.78125 h -0.9375 c -0.023438 0 -0.042969 0 -0.0625 0 c -0.042969 -0.003906 -0.085938 -0.007812 -0.125 -0.007812 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwUpssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwUpssymbolic;
