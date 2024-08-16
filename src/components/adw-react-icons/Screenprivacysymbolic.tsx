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
        <path d="m 6.226562 1.171875 c -1.425781 0.019531 -2.246093 1.3125 -2.570312 2.609375 v 0.039062 l -0.640625 2.179688 h -1 c -0.554687 0 -1 0.445312 -1 1 s 0.445313 1 1 1 h 12 c 0.554687 0 1 -0.445312 1 -1 s -0.445313 -1 -1 -1 h -1 l -0.640625 -2.207031 c -0.195312 -0.847657 -1.046875 -1.738281 -2.140625 -1.738281 c -0.597656 0 -1.167969 0.246093 -1.574219 0.679687 c -0.417968 -0.949219 -1.355468 -1.5625 -2.390625 -1.5625 c -0.015625 0 -0.027343 0 -0.042969 0 z m 0 0"/>
        <path d="m 4.515625 8.984375 c -1.378906 0 -2.5 1.117187 -2.5 2.5 c 0 1.378906 1.121094 2.5 2.5 2.5 c 1.382813 0 2.5 -1.121094 2.5 -2.5 c 0 -1.382813 -1.117187 -2.5 -2.5 -2.5 z m 0 1 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.496094 -1.5 1.496094 s -1.496094 -0.667969 -1.496094 -1.496094 s 0.667969 -1.5 1.496094 -1.5 z m 0 0"/>
        <path d="m 11.515625 8.984375 c -1.378906 0 -2.5 1.117187 -2.5 2.5 c 0 1.378906 1.121094 2.5 2.5 2.5 c 1.382813 0 2.5 -1.121094 2.5 -2.5 c 0 -1.382813 -1.117187 -2.5 -2.5 -2.5 z m 0 1 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.496094 -1.5 1.496094 s -1.496094 -0.667969 -1.496094 -1.496094 s 0.667969 -1.5 1.496094 -1.5 z m 0 0"/>
        <path d="m 6.449219 12.542969 c -0.277344 0 -0.5 -0.222657 -0.5 -0.5 c 0 -0.734375 0.394531 -1.414063 1.035156 -1.78125 c 0.636719 -0.363281 1.425781 -0.363281 2.0625 0 c 0.640625 0.367187 1.039063 1.046875 1.039063 1.78125 c 0 0.277343 -0.222657 0.5 -0.5 0.5 c -0.277344 0 -0.5 -0.222657 -0.5 -0.5 c 0 -0.375 -0.203126 -0.722657 -0.535157 -0.910157 c -0.332031 -0.191406 -0.738281 -0.191406 -1.070312 0 c -0.332031 0.1875 -0.53125 0.535157 -0.53125 0.910157 c 0 0.277343 -0.222657 0.5 -0.5 0.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwScreenprivacysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScreenprivacysymbolic;
