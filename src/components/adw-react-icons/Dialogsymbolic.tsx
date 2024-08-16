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
        <path d="m 2 1.007812 c -0.550781 0 -1 0.449219 -1 1 v 1.984376 h 2 v -0.984376 h 9 v 0.992188 h 2 v -1.992188 c 0 -0.550781 -0.449219 -1 -1 -1 z m 10 12 v 0.992188 h -9 v -0.984375 h -2 v 1.984375 c 0 0.550781 0.449219 1 1 1 h 11 c 0.550781 0 1 -0.449219 1 -1 v -1.992188 z m 0 0" fill-opacity="0.35"/>
        <path d="m 4 4 c -0.550781 0 -1 0.449219 -1 1 v 7.007812 c 0 0.550782 0.449219 1 1 1 h 7 c 0.550781 0 1 -0.449218 1 -1 v -7.007812 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 2 h 7 v 3.992188 h -7 z m 0 4.992188 h 3 v 1.007812 h -3 z m 4 0 h 3 v 1.007812 h -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDialogsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDialogsymbolic;
