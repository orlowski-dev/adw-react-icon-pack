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
        <path d="m 9 2.933594 c 4.042969 0 5.890625 3.613281 5.890625 3.613281 l -1.785156 0.902344 s -1.246094 -2.515625 -4.105469 -2.515625 c -2.054688 0 -3.097656 1.394531 -3.484375 2.074218 h 0.910156 c 1.332031 0 1.574219 1.253907 1.574219 2.035157 l -6 -0.046875 l -0.046875 -6 c 1.046875 0 2.035156 0.523437 2.035156 1.667968 v 0.929688 l 0.0625 0.0625 c 0.757813 -1.089844 2.3125 -2.722656 4.949219 -2.722656 z m 0 0"/>
        <path d="m 13.617188 8.996094 c 0.683593 0 1.265624 0.582031 1.265624 1.265625 v 3.46875 c 0 0.683593 -0.582031 1.265625 -1.265624 1.265625 h -3.46875 c -0.683594 0 -1.265626 -0.582032 -1.265626 -1.265625 v -3.46875 c 0 -0.683594 0.582032 -1.265625 1.265626 -1.265625 z m -0.734376 2 h -2 v 2 h 2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwStepBackSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStepBackSymbolic;
