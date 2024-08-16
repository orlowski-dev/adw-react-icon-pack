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
        <path d="m 3 1 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.664062 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.335938 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 7 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -7 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0"/>
        <path d="m 8 16 c 3 0 4 -1 4 -1 h -8 s 1 1 4 1 z m 0 0"/>
        <path d="m 8 4 c -1.097656 0 -2 0.902344 -2 2 v 1 h -0.453125 c -0.3125 0 -0.546875 0.171875 -0.546875 0.5 v 3.5 h 6 v -3.5 c 0 -0.257812 -0.210938 -0.5 -0.5 -0.5 h -0.5 v -1 c 0 -1.097656 -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 v 1 h -2 v -1 c 0 -0.558594 0.441406 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwScreenPrivacy2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScreenPrivacy2Symbolic;
