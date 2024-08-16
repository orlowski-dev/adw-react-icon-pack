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
        <path d="m 0 6 v 7.976562 c 0 1.199219 0.980469 2 2.1875 2 h 11.625 c 1.207031 0 2.1875 -1.019531 2.1875 -2.21875 v -7.757812 s 0 -1 -1 -1 s -1 1 -1 1 v 8 h -12 v -8 s 0.070312 -1.070312 -1 -1 c -1 0 -1 1 -1 1 z m 0 0"/>
        <path d="m 7.714844 0.121094 l -7 4.839844 l 0.570312 0.824218 l 6.714844 -4.644531 l 6.714844 4.644531 l 0.570312 -0.824218 l -7 -4.839844 c -0.171875 -0.11718775 -0.398437 -0.11718775 -0.570312 0 z m 0 0"/>
        <path d="m 1.300781 4.972656 l -0.601562 0.800782 l 7 5.25 c 0.179687 0.136718 0.421875 0.136718 0.601562 0 l 7 -5.25 l -0.601562 -0.800782 l -6.699219 5.027344 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMailReadSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailReadSymbolic;
