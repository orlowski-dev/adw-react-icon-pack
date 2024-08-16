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
        <path d="m 5 9.011719 v 1.988281 l -5 0.011719 v 2 l 5 -0.011719 v 2.007812 l 3 -3.019531 z m 0 0"/>
        <path d="m 0 0 v 7 h 7 v -7 z m 0 0" fill-opacity="0.35"/>
        <path d="m 0 0 l 8.5625 10 h 7.3125 l -8.53125 -10 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwShearsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwShearsymbolic;
