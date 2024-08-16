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
        <path d="m 4 10 c -1.089844 0 -2 -0.910156 -2 -2 v -5 c 0 -1.089844 0.910156 -2 2 -2 h 8 c 1.089844 0 2 0.910156 2 2 v 5 c 0 1.089844 -0.910156 2 -2 2 z m 0 -2 h 8 v -5 h -8 z m 0 0"/>
        <path d="m 2 14 c -1.109375 0 -2 -0.890625 -2 -2 v -4 c 0 -1.109375 0.890625 -2 2 -2 h 1 v 2 c 0 0.554688 0.445312 1 1 1 h 8 c 0.554688 0 1 -0.445312 1 -1 v -2 h 1 c 1.109375 0 2 0.890625 2 2 v 4 c 0 1.109375 -0.890625 2 -2 2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwFaxsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFaxsymbolic;
