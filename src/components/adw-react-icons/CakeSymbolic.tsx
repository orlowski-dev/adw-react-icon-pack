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
        <path d="m 1.5 11 h 9 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 h -9 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 1.5 9 h 9 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 h -9 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 9.195312 1.019531 c -0.269531 -0.054687 -0.550781 0.003907 -0.777343 0.167969 l -1.855469 1.324219 l 1.164062 1.628906 l 1.386719 -0.992187 c 1.921875 0.527343 3.476563 2.050781 3.886719 4.007812 v 5.84375 h -10 v -5.484375 l 1.425781 -1.019531 l -1.160156 -1.628906 l -1.847656 1.320312 c -0.261719 0.1875 -0.417969 0.488281 -0.417969 0.8125 v 7 c 0 0.550781 0.449219 1 1 1 h 12 c 0.550781 0 1 -0.449219 1 -1 v -7 c 0 -0.066406 -0.007812 -0.132812 -0.019531 -0.195312 c -0.582031 -2.902344 -2.882813 -5.203126 -5.785157 -5.785157 z m 0 0"/>
        <path d="m 5.5 2 c -1.375 0 -2.5 1.125 -2.5 2.5 s 1.125 2.5 2.5 2.5 s 2.5 -1.125 2.5 -2.5 s -1.125 -2.5 -2.5 -2.5 z m 0 1 c 0.835938 0 1.5 0.664062 1.5 1.5 s -0.664062 1.5 -1.5 1.5 s -1.5 -0.664062 -1.5 -1.5 s 0.664062 -1.5 1.5 -1.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCakeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCakeSymbolic;
