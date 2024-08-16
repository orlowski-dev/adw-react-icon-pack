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
        <path d="m 6 11.972656 v -8 h -3 v 8 z m 0 0" fill-opacity="0.35"/>
        <path d="m 8 2 h 1 v 12 h -1 z m -5 -0.003906 c -1.089844 0 -2 0.910156 -2 2 v 7.976562 c 0 1.089844 0.910156 2 2 2 h 4 v -11.976562 z m 7 0 v 11.976562 h 1 v -11.976562 z m 1.96875 0 v 2 h 1.03125 v 7.976562 h -1.03125 v 2 h 1.03125 c 0.96875 0 2 -0.925781 2 -2 v -7.976562 c 0 -1.089844 -0.910156 -2 -2 -2 z m -8.96875 2 h 3 v 7.976562 h -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwFlapSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFlapSymbolic;
