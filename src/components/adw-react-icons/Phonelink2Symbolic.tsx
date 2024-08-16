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
        <path d="m 2 4.035156 v 6.964844 h -2 c 0 1.105469 0.894531 2 2 2 h 8 v -2 h -6 v -7 h 9 v 2 h 2 v -2.042969 c 0 -1.082031 -0.875 -1.957031 -1.957031 -1.957031 h -9.007813 c -1.125 0 -2.035156 0.910156 -2.035156 2.035156 z m 0 0"/>
        <path d="m 11 8.015625 v 5.042969 c 0 0.519531 0.421875 0.941406 0.941406 0.941406 h 3.058594 c 0.550781 0 1 -0.449219 1 -1 v -5 c 0 -0.550781 -0.449219 -1 -1 -1 h -2.984375 c -0.5625 0 -1.015625 0.453125 -1.015625 1.015625 z m 1 -0.015625 h 3 v 4 h -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPhonelink2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhonelink2Symbolic;
