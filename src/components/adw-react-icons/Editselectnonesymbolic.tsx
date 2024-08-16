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
        <path d="m 0 0 v 1.0625 l 1.9375 1.9375 h 1.0625 v -3 z m 4 0 v 2 h 3 v -2 z m 4 0 v 2 h 4 v -2 z m 5 0 v 3 h 3 v -3 z m -13 4 v 4 h 2 v -2.8125 l -1.1875 -1.1875 z m 14 0 v 3 h 2 v -3 z m 0 4 v 4 h 2 v -4 z m -14 1 v 3 h 2 v -3 z m 0 4 v 3 h 3 v -3 z m 13 0 v 1.0625 l 1.9375 1.9375 h 1.0625 v -3 z m -9 1 v 2 h 4 v -2 z m 5 0 v 2 h 3 v -0.8125 l -1.1875 -1.1875 z m 0 0"/>
        <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwEditselectnonesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEditselectnonesymbolic;
