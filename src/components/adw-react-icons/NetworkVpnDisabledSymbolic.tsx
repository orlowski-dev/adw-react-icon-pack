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
        <path d="m 7.917969 1 c -1.617188 0 -2.917969 1.300781 -2.917969 2.917969 v 1.082031 c -0.246094 0.007812 -0.484375 0.105469 -0.664062 0.277344 l 5.726562 5.722656 h 0.90625 c 0.570312 0 1.03125 -0.460938 1.03125 -1.03125 v -3.9375 c 0.007812 -0.5625 -0.4375 -1.023438 -1 -1.03125 v -1.082031 c 0 -1.617188 -1.300781 -2.917969 -2.917969 -2.917969 z m 0.082031 2 c 0.554688 0 1 0.445312 1 1 v 1 h -2 v -1 c 0 -0.554688 0.445312 -1 1 -1 z m -4 4.0625 v 2.90625 c 0 0.570312 0.460938 1.03125 1.03125 1.03125 h 1.96875 v 1.21875 c -0.316406 0.179688 -0.578125 0.441406 -0.757812 0.757812 h -3.246094 c -0.550782 0 -1 0.449219 -1 1 c 0 0.550782 0.449218 1 1 1 h 3.285156 c 0.363281 0.601563 1.011719 0.972657 1.714844 0.972657 s 1.355468 -0.371094 1.71875 -0.972657 h 2.199218 l -2 -2 h -0.164062 c -0.179688 -0.3125 -0.4375 -0.574218 -0.75 -0.753906 v -0.160156 z m 3.996094 5.875 c 0.554687 0 1.007812 0.449219 1.003906 1.003906 c 0.003906 0.558594 -0.449219 1.007813 -1.003906 1.007813 c -0.554688 0 -1.007813 -0.449219 -1.007813 -1.007813 c 0 -0.554687 0.453125 -1.003906 1.007813 -1.003906 z m 4.042968 0.039062 l 1.679688 1.683594 c 0.183594 -0.183594 0.285156 -0.425781 0.289062 -0.683594 c 0 -0.550781 -0.449218 -1 -1 -1 z m 0 0"/>
        <path d="m 1.53125 0.457031 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNetworkVpnDisabledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkVpnDisabledSymbolic;
