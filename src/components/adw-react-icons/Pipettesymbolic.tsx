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
        <path d="m 10.613281 5.40625 l -4.222656 5.660156 l -1.691406 1.496094 l -0.699219 -0.5625 l 0.996094 -2.054688 l 4.21875 -5.660156 z m 0 0"/>
        <path d="m 4 12.574219 s -1.476562 0.667969 -1.464844 2.078125 c 0.015625 1.761718 2.660156 1.84375 2.742188 0.285156 c 0.046875 -0.890625 -1.277344 -2.363281 -1.277344 -2.363281 z m 0 0"/>
        <path d="m 6.644531 4.429688 l 4.652344 3.527343 l 0.703125 -0.925781 l -1.394531 -1.058594 c 2.804687 -0.792968 4.71875 -4.171875 2.859375 -5.585937 c -1.859375 -1.410157 -4.703125 1.265625 -4.71875 4.175781 l -1.394532 -1.058594 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPipettesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPipettesymbolic;
