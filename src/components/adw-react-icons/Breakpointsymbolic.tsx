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
      <path d="m 2 3 c -0.832031 0 -1.523438 0.5625 -1.769531 1.050781 c -0.2421878 0.492188 -0.230469 0.949219 -0.230469 0.949219 v 6 c 0 0.832031 0.5625 1.523438 1.054688 1.769531 c 0.488281 0.246094 0.945312 0.230469 0.945312 0.230469 h 9.761719 c 0.300781 0 0.585937 -0.136719 0.777343 -0.371094 l 3.238282 -4 c 0.296875 -0.367187 0.296875 -0.890625 0 -1.257812 l -3.238282 -4 c -0.191406 -0.234375 -0.476562 -0.371094 -0.777343 -0.371094 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBreakpointsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBreakpointsymbolic;
