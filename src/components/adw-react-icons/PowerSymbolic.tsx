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
      <path d="m 4 0 v 3 h -1.023438 c -1.09375 0 -1.976562 0.882812 -1.976562 1.976562 v 2.050782 c 0 0.128906 0.011719 0.253906 0.035156 0.375 c -0.023437 0.195312 -0.035156 0.398437 -0.035156 0.597656 c 0 2.773438 2.230469 5 5 5 c 0 1.644531 1.355469 3 3 3 h 2 c 1.09375 0 2 -0.90625 2 -2 h 1 v 2 h 2 v -2 c 0 -1.09375 -0.90625 -2 -2 -2 h -1 c -1.09375 0 -2 0.90625 -2 2 h -2 c -0.5625 0 -1 -0.433594 -1 -1 c 2.769531 0 5 -2.226562 5 -5 c 0 -0.199219 -0.011719 -0.402344 -0.035156 -0.597656 c 0.023437 -0.121094 0.035156 -0.246094 0.035156 -0.375 v -2.050782 c 0 -1.09375 -0.882812 -1.976562 -1.976562 -1.976562 h -1.023438 v -3 h -2 v 3 h -2 v -3 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPowerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPowerSymbolic;
