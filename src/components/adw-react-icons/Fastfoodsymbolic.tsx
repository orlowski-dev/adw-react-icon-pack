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
      <path d="m 4.914062 2 l 0.25 3 h 2.003907 l -0.082031 -1 h 6.828124 l -0.835937 10 h -1.078125 v 2 h 1 c 2 0 2 -1 2.074219 -1.871094 l 1.011719 -12.128906 z m -0.914062 4 c -4 0 -4 2 -4 2 v 1 h 11 v -1 s 0 -2 -4 -2 z m 0.601562 4 c -0.832031 0 -1.292968 0.507812 -1.570312 0.757812 c -0.128906 0.113282 -0.210938 0.171876 -0.257812 0.203126 c -0.101563 -0.046876 -0.355469 -0.144532 -0.566407 -0.285157 c -0.300781 -0.207031 -0.539062 -0.417969 -0.539062 -0.417969 c -0.410157 -0.371093 -1.042969 -0.335937 -1.410157 0.074219 c -0.371093 0.410157 -0.335937 1.042969 0.074219 1.414063 c 0 0 0.320313 0.285156 0.746094 0.578125 c 0.421875 0.292969 0.894531 0.675781 1.722656 0.675781 s 1.289063 -0.503906 1.566407 -0.753906 c 0.109374 -0.101563 0.183593 -0.152344 0.234374 -0.1875 c 0.046876 0.035156 0.121094 0.085937 0.230469 0.1875 c 0.277344 0.25 0.738281 0.753906 1.570313 0.753906 c 0.828125 0 1.289062 -0.503906 1.566406 -0.753906 c 0.128906 -0.117188 0.214844 -0.175782 0.261719 -0.207032 c 0.101562 0.046876 0.355469 0.144532 0.5625 0.285157 c 0.300781 0.207031 0.539062 0.421875 0.539062 0.421875 c 0.410157 0.367187 1.042969 0.332031 1.414063 -0.078125 c 0.367187 -0.410157 0.332031 -1.042969 -0.078125 -1.410157 c 0 0 -0.320313 -0.289062 -0.742188 -0.582031 c -0.425781 -0.292969 -0.898437 -0.675781 -1.726562 -0.675781 s -1.289063 0.507812 -1.566407 0.757812 c -0.109374 0.097657 -0.183593 0.152344 -0.234374 0.1875 c -0.046876 -0.035156 -0.121094 -0.089843 -0.230469 -0.1875 c -0.277344 -0.25 -0.738281 -0.757812 -1.566407 -0.757812 z m -4.601562 4 v 1 c 0 1 1 1 1 1 h 9 s 1 0 1 -1 v -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFastfoodsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFastfoodsymbolic;
