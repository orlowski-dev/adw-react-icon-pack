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
        <path d="m 7.996094 12 c -0.703125 0 -1.355469 0.371094 -1.714844 0.972656 h -3.285156 c -0.554688 0 -1 0.449219 -1 1 c 0 0.550782 0.445312 1 1 1 h 3.246094 c 0.351562 0.640625 1.023437 1.035156 1.753906 1.039063 c 0.726562 -0.003907 1.398437 -0.398438 1.75 -1.039063 h 3.261718 c 0.550782 0 1 -0.449218 1 -1 c 0 -0.550781 -0.449218 -1 -1 -1 h -3.292968 c -0.363282 -0.601562 -1.015625 -0.972656 -1.71875 -0.972656 z m 0 1 c 0.554687 0 1.003906 0.449219 1.003906 1.007812 c 0 0.554688 -0.449219 1.003907 -1.003906 1.003907 c -0.558594 0 -1.007813 -0.449219 -1.007813 -1.003907 c 0 -0.558593 0.449219 -1.007812 1.007813 -1.007812 z m 0 0"/>
        <path d="m 6.992188 10 h 2.007812 v 3 h -2.007812 z m 0 0"/>
        <path d="m 11.992188 2 c 1.113281 0 2.007812 0.894531 2.007812 2.007812 v 2.972657 c 0 1.109375 -0.894531 2.003906 -2.007812 2.003906 h -7.984376 c -1.113281 0 -2.007812 -0.894531 -2.007812 -2.003906 v -2.972657 c 0 -1.113281 0.894531 -2.007812 2.007812 -2.007812 z m -11.992188 2.007812 v 2.972657 c 0 2.21875 1.789062 4.003906 4.007812 4.003906 h 7.984376 c 2.21875 0 4.007812 -1.785156 4.007812 -4.003906 v -2.972657 c 0 -2.21875 -1.789062 -4.007812 -4.007812 -4.007812 h -7.984376 c -2.21875 0 -4.007812 1.789062 -4.007812 4.007812 z m 0 0"/>
        <path d="m 5 4 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 8 4 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNetworkServerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkServerSymbolic;
