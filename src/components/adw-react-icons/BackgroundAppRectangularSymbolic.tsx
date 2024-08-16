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
        <path d="m 3 0 c -1.652344 0 -3.0117188 1.359375 -3.0117188 3.011719 v 6.976562 c 0 1.652344 1.3593748 3.011719 3.0117188 3.011719 h 1 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 h -1 c -0.578125 0 -1.011719 -0.433594 -1.011719 -1.011719 v -6.976562 c 0 -0.578125 0.433594 -1.011719 1.011719 -1.011719 h 7.976562 c 0.578126 0 1.011719 0.433594 1.011719 1.011719 v 0.988281 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -0.988281 c 0 -1.652344 -1.359375 -3.011719 -3.011719 -3.011719 z m 0 0"/>
        <path d="m 6 9 c 0 -1.644531 1.355469 -3 3 -3 h 4 c 1.644531 0 3 1.355469 3 3 v 3 c 0 1.644531 -1.355469 3 -3 3 h -4 c -1.644531 0 -3 -1.355469 -3 -3 z m 2 0 v 3 c 0 0.570312 0.429688 1 1 1 h 4 c 0.570312 0 1 -0.429688 1 -1 v -3 c 0 -0.570312 -0.429688 -1 -1 -1 h -4 c -0.570312 0 -1 0.429688 -1 1 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwBackgroundAppRectangularSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBackgroundAppRectangularSymbolic;
