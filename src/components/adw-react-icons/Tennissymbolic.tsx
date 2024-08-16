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
        <path d="m 8.703125 0.0234375 c -0.550781 0.0039063 -1.109375 0.1679685 -1.617187 0.4414065 c -0.902344 0.484375 -1.714844 1.308594 -2.3125 2.375 c -0.601563 1.066406 -0.882813 2.191406 -0.828126 3.214844 c 0.023438 0.476562 0.128907 1.082031 0.324219 1.496093 c 0.398438 0.535157 0.273438 0.664063 -0.082031 1.21875 l -3.304688 5.414063 l 1.320313 0.839844 l 3.125 -5.519532 c 0.375 -0.648437 0.65625 -0.679687 1.332031 -0.660156 c 0.46875 -0.039062 1.082032 -0.160156 1.515625 -0.390625 c 0.902344 -0.484375 1.714844 -1.308594 2.3125 -2.375 c 0.601563 -1.066406 0.882813 -2.191406 0.828125 -3.21875 c -0.054687 -1.023437 -0.480468 -2.015625 -1.371094 -2.519531 c -0.390624 -0.222656 -0.8125 -0.3164065 -1.242187 -0.3164065 z m 0.476563 1.6796875 c 0.3125 0.179687 0.542968 0.574219 0.578124 1.238281 c 0.035157 0.664063 -0.164062 1.53125 -0.628906 2.363282 c -0.46875 0.832031 -0.984375 1.355468 -1.570312 1.671874 c -0.582032 0.3125 -1.230469 0.320313 -1.542969 0.144532 c -0.3125 -0.179688 -0.5 -0.671875 -0.535156 -1.335938 c -0.035157 -0.667968 0.1875 -1.34375 0.652343 -2.171875 c 0.46875 -0.832031 1.105469 -1.449219 1.691407 -1.765625 c 0.550781 -0.328125 0.851562 -0.242187 1.355469 -0.144531 z m 0 0"/>
        <path d="m 12 10 c -1.09375 0 -2 0.90625 -2 2 s 0.90625 2 2 2 s 2 -0.90625 2 -2 s -0.90625 -2 -2 -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTennissymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTennissymbolic;
