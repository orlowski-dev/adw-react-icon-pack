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
        <path d="m 9.847656 2.3125 l -4.082031 0.925781 c -2.15625 0.488281 -3.792969 2.265625 -3.792969 4.480469 v 3.484375 c 0 1.125 1.042969 2.007813 2.148438 1.824219 l 8.027344 -1.582032 c 1.046874 -0.175781 1.824218 -1.09375 1.824218 -2.152343 v -3.484375 c 0 -2.171875 -2.007812 -3.976563 -4.125 -3.496094 z m 0.328125 1.976562 c 0.949219 -0.214843 1.796875 0.546876 1.796875 1.519532 v 3.484375 c 0 0.09375 -0.058594 0.164062 -0.152344 0.179687 l -7.847656 1.550782 v -3.304688 c 0 -1.25 0.902344 -2.230469 2.121094 -2.507812 z m 0 0" fill-rule="evenodd"/>
        <path d="m 0 14.957031 v 1.042969 h 16 v -4 z m 0 0"/>
        <path d="m 2.972656 8.796875 l 10 -2.089844 v 0.628907 l -10 2.089843 z m 0 0" fill-rule="evenodd"/>
    </g>
    </svg>
  );
};

const AdwCablecarsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCablecarsymbolic;
