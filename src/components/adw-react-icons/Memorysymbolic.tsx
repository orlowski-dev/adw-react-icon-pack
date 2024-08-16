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
        <path d="m 3 2 c -1.660156 0 -3 1.339844 -3 3 v 4 c 0 1.660156 1.339844 3 3 3 h 10 c 1.660156 0 3 -1.339844 3 -3 v -4 c 0 -1.660156 -1.339844 -3 -3 -3 z m 0 2 h 10 c 0.554688 0 1 0.445312 1 1 v 4 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -4 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0"/>
        <path d="m 2 10 h 12 v 4 h -12 z m 0 0"/>
        <g fill-opacity="0.5">
            <path d="m 4 5 h 2 v 4 h -2 z m 0 0"/>
            <path d="m 7 5 h 2 v 4 h -2 z m 0 0"/>
            <path d="m 10 5 h 2 v 4 h -2 z m 0 0"/>
        </g>
    </g>
    </svg>
  );
};

const AdwMemorysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMemorysymbolic;
