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
        <path d="m 10.875 10.0625 c -0.8125 0.148438 -1.105469 1.160156 -0.5 1.71875 l 3 3 c 0.957031 0.9375 2.363281 -0.5 1.40625 -1.4375 l -3 -3 c -0.234375 -0.238281 -0.574219 -0.347656 -0.90625 -0.28125 z m 0 0"/>
        <path d="m 6.570312 0.0625 c -3.578124 0 -6.4999995 2.921875 -6.4999995 6.5 s 2.9218755 6.5 6.4999995 6.5 c 3.578126 0 6.5 -2.921875 6.5 -6.5 s -2.921874 -6.5 -6.5 -6.5 z m 0 2 c 2.5 0 4.5 2.003906 4.5 4.5 c 0 2.5 -2 4.5 -4.5 4.5 c -2.496093 0 -4.5 -2 -4.5 -4.5 c 0 -2.496094 2.003907 -4.5 4.5 -4.5 z m 0 0"/>
        <path d="m 6.570312 3.183594 l 2.828126 2.828125 h -5.65625 z m 0 0"/>
        <path d="m 6.570312 6.171875 l 2.828126 2.828125 h -5.65625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLoupeWithArrowSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLoupeWithArrowSymbolic;
