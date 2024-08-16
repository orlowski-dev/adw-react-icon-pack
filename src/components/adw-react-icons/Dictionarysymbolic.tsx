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
        <path d="m 4.273438 1.0625 c -0.855469 0.003906 -2.359376 0.914062 -2.359376 2.523438 v 9.851562 c 0 0.855469 0.707032 1.5625 1.5625 1.5625 h 9.4375 c 1.125 0.03125 0.933594 -0.988281 0.933594 -0.988281 l -9.335937 0.023437 c -2.28125 0.007813 -2.082031 -2.988281 -0.035157 -2.992187 l 9.40625 -0.011719 l 0.03125 -10 z m 0.636718 1.875 h 2.6875 c 3.316406 0 4.273438 1.261719 4.25 3.03125 c -0.027344 2.46875 -2.1875 3.011719 -4.8125 3.101562 c -0.621094 0.023438 -1.507812 0.023438 -2.125 0.023438 z m 2.03125 1.0625 v 4.03125 c 1.945313 0.023438 3 -0.683594 3 -2.0625 c 0.003906 -1.769531 -1.238281 -1.9375 -3 -1.96875 z m 0 0"/>
        <path d="m 2.40625 11.0625 h 10.445312 c -1.183593 0.492188 -1.292968 2.457031 0 3 h -10.445312 z m 0 0" fill-opacity="0.35"/>
    </g>
    </svg>
  );
};

const AdwDictionarysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDictionarysymbolic;
