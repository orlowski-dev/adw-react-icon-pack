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
        <path d="m 2 0 c -1.214844 0 -2 0.828125 -2 2 v 2.027344 h 13.984375 v 9.972656 h -8.054687 v 2 h 8.054687 c 0.996094 0 1.996094 -1 2 -2 v -12 c 0 -1.238281 -0.828125 -2 -2 -2 z m 0 0"/>
        <path d="m 3 13 v -1 c 0 -0.257812 0.128906 -0.527344 0.3125 -0.71875 l 1.28125 -1.28125 h -4.59375 v -2 h 4.59375 l -1.28125 -1.28125 c -0.183594 -0.191406 -0.3125 -0.460938 -0.3125 -0.71875 v -1 h 1 c 0.308594 0 0.550781 0.089844 0.75 0.28125 l 3.65625 3.71875 l -3.65625 3.71875 c -0.199219 0.191406 -0.441406 0.28125 -0.75 0.28125 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMovetowindowsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMovetowindowsymbolic;
