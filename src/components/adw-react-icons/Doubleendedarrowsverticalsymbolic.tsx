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
      <path d="m 12 3.984375 c -0.003906 -0.261719 -0.113281 -0.515625 -0.300781 -0.703125 l -3 -2.917969 c -0.390625 -0.3749998 -1.007813 -0.3749998 -1.394531 0 l -3 2.917969 c -0.398438 0.386719 -0.40625 1.019531 -0.019532 1.414062 c 0.382813 0.398438 1.015625 0.40625 1.414063 0.019532 l 1.300781 -1.265625 v 9.183593 l -1.300781 -1.269531 c -0.398438 -0.382812 -1.03125 -0.375 -1.414063 0.019531 c -0.386718 0.398438 -0.378906 1.03125 0.019532 1.414063 l 3 2.917969 c 0.386718 0.378906 1.003906 0.378906 1.394531 0 l 3 -2.917969 c 0.1875 -0.183594 0.296875 -0.4375 0.300781 -0.703125 c 0.003906 -0.261719 -0.097656 -0.519531 -0.28125 -0.710938 c -0.386719 -0.394531 -1.019531 -0.402343 -1.414062 -0.019531 l -1.304688 1.269531 v -9.183593 l 1.304688 1.265625 c 0.394531 0.386718 1.027343 0.378906 1.414062 -0.019532 c 0.183594 -0.1875 0.285156 -0.445312 0.28125 -0.710937 z m 0 0" fill="currentColor" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwDoubleendedarrowsverticalsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDoubleendedarrowsverticalsymbolic;
