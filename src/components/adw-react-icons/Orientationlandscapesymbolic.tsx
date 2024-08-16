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
      <path d="m 2.15625 3 c -0.613281 0 -1.113281 0.496094 -1.113281 1.113281 v 7.84375 c 0 0.617188 0.5 1.117188 1.113281 1.117188 h 11.738281 c 0.617188 0 1.117188 -0.5 1.117188 -1.117188 v -7.84375 c 0 -0.617187 -0.5 -1.113281 -1.117188 -1.113281 z m 5.84375 3 l 4 4 h -8 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwOrientationlandscapesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwOrientationlandscapesymbolic;
