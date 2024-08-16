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
        <path d="m 9 4.5 c 0 0.828125 -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 s 1.5 0.671875 1.5 1.5 z m 0 0"/>
        <path d="m 7 0 c -2.199219 0 -4 1.800781 -4 4 v 7 c 0 2.199219 1.800781 4 4 4 h 1 c 2.199219 0 4 -1.800781 4 -4 v -7 c 0 -2.199219 -1.800781 -4 -4 -4 z m 0 2 h 1 c 1.125 0 2 0.875 2 2 v 7 c 0 1.125 -0.875 2 -2 2 h -1 c -1.125 0 -2 -0.875 -2 -2 v -7 c 0 -1.125 0.875 -2 2 -2 z m 0 0"/>
        <path d="m 9 7.5 c 0 0.828125 -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 s 1.5 0.671875 1.5 1.5 z m 0 0"/>
        <path d="m 9 10.5 c 0 0.828125 -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 s 1.5 0.671875 1.5 1.5 z m 0 0"/>
        <path d="m 11 3 c -0.550781 0 -1 0.449219 -1 1 v 2 c 0 0.40625 0.242188 0.769531 0.617188 0.921875 c 0.375 0.15625 0.804687 0.070313 1.089843 -0.214844 l 2 -2 c 0.285157 -0.285156 0.371094 -0.714843 0.214844 -1.089843 c -0.152344 -0.375 -0.515625 -0.617188 -0.921875 -0.617188 z m 0 0"/>
        <path d="m 11 6 c -0.550781 0 -1 0.449219 -1 1 v 2 c 0 0.40625 0.242188 0.769531 0.617188 0.921875 c 0.375 0.15625 0.804687 0.070313 1.089843 -0.214844 l 2 -2 c 0.285157 -0.285156 0.371094 -0.714843 0.214844 -1.089843 c -0.152344 -0.375 -0.515625 -0.617188 -0.921875 -0.617188 z m 0 0"/>
        <path d="m 11 9 c -0.550781 0 -1 0.449219 -1 1 v 2 c 0 0.40625 0.242188 0.769531 0.617188 0.921875 c 0.375 0.15625 0.804687 0.070313 1.089843 -0.214844 l 2 -2 c 0.285157 -0.285156 0.371094 -0.714843 0.214844 -1.089843 c -0.152344 -0.375 -0.515625 -0.617188 -0.921875 -0.617188 z m 0 0"/>
        <path d="m 2 3 c -0.40625 0 -0.769531 0.242188 -0.921875 0.617188 c -0.15625 0.375 -0.070313 0.804687 0.214844 1.089843 l 2 2 c 0.285156 0.285157 0.714843 0.371094 1.089843 0.214844 c 0.375 -0.152344 0.617188 -0.515625 0.617188 -0.921875 v -2 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 2 6 c -0.40625 0 -0.769531 0.242188 -0.921875 0.617188 c -0.15625 0.375 -0.070313 0.804687 0.214844 1.089843 l 2 2 c 0.285156 0.285157 0.714843 0.371094 1.089843 0.214844 c 0.375 -0.152344 0.617188 -0.515625 0.617188 -0.921875 v -2 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 2 9 c -0.40625 0 -0.769531 0.242188 -0.921875 0.617188 c -0.15625 0.375 -0.070313 0.804687 0.214844 1.089843 l 2 2 c 0.285156 0.285157 0.714843 0.371094 1.089843 0.214844 c 0.375 -0.152344 0.617188 -0.515625 0.617188 -0.921875 v -2 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTrafficLightsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTrafficLightsSymbolic;
