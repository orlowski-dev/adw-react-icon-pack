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
      <path d="m 13.398438 2.011719 c -0.394532 0.027343 -0.765626 0.210937 -1.027344 0.507812 l -5.78125 6.609375 l -1.890625 -2.519531 c -0.496094 -0.664063 -1.4375 -0.796875 -2.101563 -0.300781 c -0.316406 0.238281 -0.527344 0.59375 -0.582031 0.988281 c -0.058594 0.394531 0.046875 0.796875 0.285156 1.113281 l 3 4 c 0.273438 0.359375 0.691407 0.582032 1.144531 0.597656 c 0.449219 0.015626 0.886719 -0.171874 1.183594 -0.511718 l 7 -8 c 0.542969 -0.625 0.480469 -1.570313 -0.140625 -2.117188 c -0.300781 -0.261718 -0.691406 -0.394531 -1.089843 -0.367187 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCheckmarksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCheckmarksymbolic;
