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
      <g fill="#2e3436">
        <path d="m 3 6 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 5 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 5 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 0 0"/>
        <path d="m 7.917969 1 c -1.617188 0 -2.917969 1.300781 -2.917969 2.917969 v 1.082031 h 2 v -1 c 0 -0.554688 0.445312 -1 1 -1 s 1 0.445312 1 1 v 1 h 2 v -1.082031 c 0 -1.617188 -1.300781 -2.917969 -2.917969 -2.917969 z m -0.917969 10 v 1.21875 c -0.316406 0.179688 -0.578125 0.441406 -0.757812 0.757812 h -3.246094 c -0.550782 0 -1 0.449219 -1 1 c 0 0.550782 0.449218 1 1 1 h 3.285156 c 0.363281 0.601563 1.011719 0.972657 1.714844 0.972657 s 1.355468 -0.371094 1.71875 -0.972657 h 3.292968 c 0.550782 0 1 -0.449218 1 -1 c 0 -0.550781 -0.449218 -1 -1 -1 h -3.257812 c -0.179688 -0.3125 -0.4375 -0.574218 -0.75 -0.753906 v -1.222656 z m 0.996094 1.9375 c 0.554687 0 1.007812 0.449219 1.003906 1.007812 c 0.003906 0.554688 -0.449219 1.003907 -1.003906 1.003907 c -0.554688 0 -1.007813 -0.449219 -1.007813 -1.003907 c 0 -0.558593 0.453125 -1.007812 1.007813 -1.007812 z m 0 0" fill-opacity="0.34902"/>
    </g>
    </svg>
  );
};

const AdwNetworkvpnacquiringsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkvpnacquiringsymbolic;
