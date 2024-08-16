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
      <path d="m 4.492188 1 c -0.621094 0 -1.199219 0.363281 -1.519532 0.957031 l -2.710937 5 c -0.3476565 0.640625 -0.3476565 1.445313 0 2.085938 l 2.710937 5 c 0.320313 0.59375 0.898438 0.957031 1.519532 0.957031 h 7.082031 c 0.625 0 1.207031 -0.371094 1.527343 -0.976562 l 2.648438 -5 c 0.332031 -0.628907 0.332031 -1.417969 0 -2.046876 l -2.648438 -5 c -0.320312 -0.605468 -0.902343 -0.976562 -1.527343 -0.976562 z m 0.75 3 h 5.644531 c 0.191406 0 0.371093 0.113281 0.476562 0.304688 l 1.777344 3.277343 c 0.113281 0.214844 0.117187 0.492188 0.003906 0.707031 l -1.777343 3.394532 c -0.101563 0.195312 -0.285157 0.316406 -0.480469 0.316406 h -5.644531 c -0.199219 0 -0.382813 -0.125 -0.484376 -0.324219 l -1.714843 -3.394531 c -0.109375 -0.210938 -0.109375 -0.480469 0.003906 -0.6875 l 1.71875 -3.28125 c 0.101563 -0.195312 0.28125 -0.3125 0.476563 -0.3125 z m 0.4375 1 l -1.496094 2.949219 l 1.566406 3.050781 h 4.699219 l 1.550781 -3.050781 l -1.609375 -2.949219 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwInversefastfouriertransformsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwInversefastfouriertransformsymbolic;
