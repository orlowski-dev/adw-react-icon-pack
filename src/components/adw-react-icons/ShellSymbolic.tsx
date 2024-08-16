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
        <path d="m -0.0195312 0.0078125 v 15.9687495 h 15.9687502 v -15.9687495 z m 2.0312502 2.9921875 h 12 v 11.007812 h -12 v -2.007812 h 0.003906 h 0.984375 c 0.5625 0 1.015625 -0.453125 1.015625 -1.015625 v -4.96875 c 0 -0.5625 -0.453125 -1.015625 -1.015625 -1.015625 h -0.984375 h -0.003906 z m 0 0"/>
        <path d="m 9.042969 4 h 0.65625 h 0.023437 c 0.167969 0.007812 0.335938 0.085938 0.453125 0.207031 l 0.84375 0.84375 l 0.867188 -0.84375 c 0.175781 -0.152343 0.292969 -0.203125 0.453125 -0.207031 h 0.660156 v 0.660156 c 0 0.1875 -0.023438 0.363282 -0.164062 0.496094 l -0.847657 0.84375 l 0.828125 0.824219 c 0.121094 0.125 0.183594 0.300781 0.183594 0.476562 v 0.65625 h -0.660156 c -0.175782 0 -0.351563 -0.058593 -0.472656 -0.183593 l -0.847657 -0.84375 l -0.84375 0.84375 c -0.125 0.125 -0.300781 0.183593 -0.476562 0.183593 h -0.65625 v -0.65625 c 0 -0.175781 0.058593 -0.351562 0.183593 -0.476562 l 0.84375 -0.824219 l -0.84375 -0.84375 c -0.140624 -0.128906 -0.199218 -0.3125 -0.183593 -0.496094 z m 0 0"/>
        <path d="m 6.050781 5 c -0.582031 0 -1.050781 0.46875 -1.050781 1.046875 v 4.902344 c 0 0.582031 0.46875 1.050781 1.050781 1.050781 h 4.898438 c 0.582031 0 1.050781 -0.46875 1.050781 -1.050781 v -1.949219 h -2.949219 c -0.582031 0 -1.050781 -0.46875 -1.050781 -1.050781 v -2.949219 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwShellSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwShellSymbolic;
