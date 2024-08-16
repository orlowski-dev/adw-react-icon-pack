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
        <path d="m 6.507812 1 c -3.027343 0 -5.507812 2.472656 -5.507812 5.5 s 2.480469 5.5 5.507812 5.5 c 3.027344 0 5.503907 -2.472656 5.503907 -5.5 s -2.476563 -5.5 -5.503907 -5.5 z m 0 2 c 1.945313 0 3.503907 1.554688 3.503907 3.5 s -1.558594 3.5 -3.503907 3.5 c -1.949218 0 -3.503906 -1.554688 -3.503906 -3.5 s 1.554688 -3.5 3.503906 -3.5 z m 0 0"/>
        <path d="m 10 8.988281 c -0.40625 0.003907 -0.773438 0.25 -0.925781 0.625 c -0.152344 0.378907 -0.0625 0.808594 0.230469 1.09375 l 4.003906 4 c 0.25 0.261719 0.625 0.367188 0.972656 0.273438 c 0.351562 -0.089844 0.625 -0.363281 0.714844 -0.714844 c 0.09375 -0.347656 -0.011719 -0.722656 -0.273438 -0.972656 l -4.003906 -4 c -0.1875 -0.195313 -0.449219 -0.304688 -0.71875 -0.304688 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLoupesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLoupesymbolic;
