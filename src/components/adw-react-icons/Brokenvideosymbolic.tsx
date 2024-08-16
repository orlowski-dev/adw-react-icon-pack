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
        <path d="m 2.402344 3 c -1.328125 0 -2.39843775 1.070312 -2.39843775 2.398438 v 7.203124 c 0 1.328126 1.07031275 2.398438 2.39843775 2.398438 h 1.394531 l 1.707031 -6 h -1.5 l 1.5 -6 z m 0 0"/>
        <path d="m 8.003906 1 l -1.5 6 h 1.5 l -1.707031 6 h 3.304687 c 1.328126 0 2.402344 -1.070312 2.402344 -2.398438 v -7.203124 c 0 -1.328126 -1.074218 -2.398438 -2.402344 -2.398438 z m 4 6 l 3 3 h 1 v -6 h -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBrokenvideosymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBrokenvideosymbolic;
