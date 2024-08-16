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
      <path d="m 13.027344 11 c 0.324218 0 0.625 -0.15625 0.816406 -0.417969 c 0.1875 -0.265625 0.234375 -0.601562 0.128906 -0.90625 l -0.371094 -1.078125 c -0.398437 -1.15625 -0.601562 -2.375 -0.601562 -3.597656 h -1 h 1 c 0 -2.765625 -2.234375 -5 -5 -5 s -5 2.234375 -5 5 h 1 h -1 c 0 1.222656 -0.203125 2.441406 -0.601562 3.597656 l -0.371094 1.078125 c -0.105469 0.304688 -0.058594 0.640625 0.128906 0.90625 c 0.191406 0.261719 0.492188 0.417969 0.816406 0.417969 z m -8.738282 -1.75 c 0.46875 -1.367188 0.710938 -2.804688 0.710938 -4.25 h -1 h 1 c 0 -1.652344 1.347656 -3 3 -3 s 3 1.347656 3 3 h 1 h -1 c 0 1.445312 0.242188 2.882812 0.710938 4.25 l 0.371093 1.074219 l 0.945313 -1.324219 h -10.054688 l 0.945313 1.324219 z m 0 0"/>
    <path d="m 9.1875 12.417969 c -0.289062 0.371093 -0.738281 0.589843 -1.210938 0.582031 c -0.46875 -0.007812 -0.910156 -0.234375 -1.1875 -0.617188 c -0.328124 -0.445312 -0.953124 -0.542968 -1.398437 -0.21875 c -0.445313 0.328126 -0.542969 0.953126 -0.21875 1.398438 c 0.648437 0.890625 1.675781 1.421875 2.777344 1.4375 c 1.101562 0.015625 2.144531 -0.488281 2.816406 -1.355469 c 0.339844 -0.4375 0.261719 -1.066406 -0.175781 -1.40625 c -0.4375 -0.335937 -1.066406 -0.257812 -1.402344 0.179688 z m 0 0"/>
    </svg>
  );
};

const AdwPreferencessystemnotificationssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencessystemnotificationssymbolic;
