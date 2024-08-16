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
      <path d="m 13.097656 13 s 0.90625 0.003906 0.90625 -1.070312 v -7.859376 c 0 -1.070312 -0.90625 -1.070312 -0.90625 -1.070312 h -0.09375 c -0.175781 -0.003906 -0.347656 0.035156 -0.5 0.125 l -7 4 c -0.3125 0.171875 -0.46875 0.523438 -0.46875 0.875 s 0.15625 0.703125 0.46875 0.875 l 7 4 c 0.152344 0.085938 0.324219 0.125 0.5 0.125 z m -9.5625 0 c 0.277344 0 0.5 -0.226562 0.5 -0.5 v -9 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 h -1 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 9 c 0 0.273438 0.222656 0.5 0.5 0.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSkipBackwardLargeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSkipBackwardLargeSymbolic;
