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
        <path d="m 3 1 c -1.660156 0 -3 1.339844 -3 3 v 7 c 0 1.660156 1.339844 3 3 3 h 10 c 1.664062 0 3 -1.339844 3 -3 v -7 c 0 -1.660156 -1.335938 -3 -3 -3 z m 4 4 h 2 v 6 h -2 v -4 h -1 v -1 c 0.476562 -0.078125 0.820312 -0.390625 1 -1 z m 0 0"/>
        <path d="m 8 16 c 3 0 4 -1 4 -1 h -8 s 1 1 4 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSingledisplaysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSingledisplaysymbolic;
