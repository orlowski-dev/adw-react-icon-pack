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
        <path d="m 8.007812 0.00390625 v 4.20703175 l -0.679687 2.074218 c -0.132813 0.40625 -0.511719 0.6875 -0.941406 0.691406 l -2.253907 0.007813 l 1.699219 1.199219 c 0.367188 0.257812 0.515625 0.726562 0.367188 1.148437 l -0.765625 2.191407 l 1.964844 -1.304688 c 0.199218 -0.058594 0.40625 -0.109375 0.609374 -0.164062 v 2.222656 l -0.050781 -0.03125 l -3.898437 2.589844 c -0.796875 0.527343 -1.8125 -0.261719 -1.496094 -1.164063 l 1.503906 -4.289063 l -3.644531 -2.574218 c -0.792969 -0.5625 -0.3984375 -1.8125 0.574219 -1.816406 l 4.660156 -0.015626 l 1.402344 -4.285156 c 0.132812 -0.410156 0.515625 -0.68749975 0.945312 -0.68749975 z m 0 0" fill-opacity="0.35"/>
        <path d="m 8.007812 0.00390625 c 0.429688 0 0.8125 0.27343775 0.949219 0.67968775 l 1.449219 4.34375 l 4.589844 -0.019532 c 0.980468 -0.003906 1.382812 1.257813 0.582031 1.820313 l -3.628906 2.554687 l 1.5 4.289063 c 0.316406 0.898437 -0.6875 1.6875 -1.488281 1.167969 l -3.953126 -2.5625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwStaroutlinehalfrightsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStaroutlinehalfrightsymbolic;
