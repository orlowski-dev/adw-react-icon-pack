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
      <path d="m 8 1 l -4.5 4.5 h 0.027344 c -0.984375 1.101562 -1.527344 2.523438 -1.527344 4 c 0 3.3125 2.6875 6 6 6 s 6 -2.6875 6 -6 c 0 -1.476562 -0.542969 -2.898438 -1.53125 -4 h 0.03125 z m 4 8 c 0.277344 0 0.5 0.222656 0.5 0.5 c 0 2.480469 -2.019531 4.5 -4.5 4.5 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 c 1.9375 0 3.5 -1.5625 3.5 -3.5 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBluraltsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBluraltsymbolic;
