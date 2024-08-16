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
        <path d="m 3.980469 1 v 4 c 0 1.554688 0.308593 2.789062 0.898437 3.847656 c 0.398438 0.710938 0.902344 1.328125 1.488282 1.957032 l 0.667968 -2.308594 c -0.15625 -0.210938 -0.292968 -0.417969 -0.410156 -0.625 c -0.425781 -0.757813 -0.644531 -1.566406 -0.644531 -2.871094 v -4 z m 0 0"/>
        <path d="m 9.21875 2 l -3.21875 13 h 2 l 0.78125 -3 h 4.4375 l 0.78125 3 h 2 l -3.21875 -13 z m 1.5625 2 h 0.4375 l 1.5 6 h -3.4375 z m 0 0"/>
        <path d="m 4 1 v 4 c 0 1.304688 -0.222656 2.113281 -0.644531 2.871094 c -0.425781 0.757812 -1.101563 1.488281 -2.0625 2.449218 l 1.414062 1.414063 c 0.980469 -0.980469 1.804688 -1.832031 2.394531 -2.886719 c 0.589844 -1.058594 0.898438 -2.292968 0.898438 -3.847656 v -4 z m 0 0"/>
        <path d="m 1 4 v 2 h 6.5625 l 0.511719 -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLanguagesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLanguagesymbolic;
