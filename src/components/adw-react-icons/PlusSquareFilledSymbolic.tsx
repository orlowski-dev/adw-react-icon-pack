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
      <path d="m 2.976562 1 c -1.09375 0 -1.976562 0.882812 -1.976562 1.972656 v 10.050782 c 0 1.09375 0.882812 1.976562 1.976562 1.976562 h 10.050782 c 1.089844 0 1.972656 -0.882812 1.972656 -1.976562 v -10.050782 c 0 -1.089844 -0.882812 -1.972656 -1.972656 -1.972656 z m 4.023438 2 h 2 v 4 h 4 v 2 h -4 v 4 h -2 v -4 h -4 v -2 h 4 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPlusSquareFilledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPlusSquareFilledSymbolic;
