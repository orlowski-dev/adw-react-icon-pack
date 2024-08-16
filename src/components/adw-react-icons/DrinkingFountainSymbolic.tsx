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
        <path d="m 15.207031 3.03125 c 0.257813 0.070312 0.476563 0.238281 0.609375 0.46875 c 0.132813 0.230469 0.167969 0.503906 0.097656 0.757812 l -2.945312 11.003907 c -0.121094 0.433593 -0.515625 0.738281 -0.96875 0.738281 h -8.050781 c -0.453125 0 -0.847657 -0.304688 -0.964844 -0.738281 l -2.953125 -11.003907 c -0.0664062 -0.253906 -0.03125 -0.527343 0.101562 -0.757812 c 0.132813 -0.230469 0.351563 -0.398438 0.605469 -0.46875 c 0.257813 -0.066406 0.53125 -0.03125 0.761719 0.101562 c 0.230469 0.132813 0.398438 0.351563 0.46875 0.609376 l 2.746094 10.257812 h 6.519531 l 2.75 -10.257812 c 0.140625 -0.535157 0.6875 -0.851563 1.222656 -0.710938 z m 0 0"/>
        <path d="m 2 8 h 12 v 1 h -12 z m 0 0"/>
        <path d="m 7.546875 0.203125 c -1.3125 1.355469 -2.265625 2.949219 -2.265625 3.964844 c 0 1.78125 1.117188 2.832031 2.71875 2.832031 s 2.71875 -1.046875 2.71875 -2.832031 c 0 -1.050781 -0.886719 -2.585938 -2.265625 -3.964844 c -0.453125 -0.453125 -0.90625 0 -0.90625 0 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDrinkingFountainSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDrinkingFountainSymbolic;
