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
        <path d="m 8 16 v -2 h 5 v 2 z m 0 0"/>
        <path d="m 9 1 v 2 s -2 2 -2 6 c 1 1.644531 1 2.464844 1 3 v 1 h 5 v -1 c 0 -0.515625 0 -1.417969 1 -3 c 0 -4 -2 -6 -2 -6 v -2 h -1 v 4.96875 c 0.617188 0.207031 1.0625 0.78125 1.0625 1.46875 c 0 0.859375 -0.703125 1.5625 -1.5625 1.5625 s -1.5625 -0.703125 -1.5625 -1.5625 c 0 -0.679688 0.453125 -1.257812 1.0625 -1.46875 v -4.96875 z m 0 0"/>
        <path d="m 2 1 v 3 h 1 v 2.726562 c -0.675781 0.230469 -1.132812 0.871094 -1.132812 1.59375 c 0 0.71875 0.457031 1.359376 1.132812 1.589844 v 3.089844 h -1 v 3 h 3 v -3 h -1 v -3.066406 c 0.710938 -0.210938 1.199219 -0.867188 1.199219 -1.613282 c 0 -0.75 -0.488281 -1.40625 -1.199219 -1.613281 v -2.707031 h 1 v -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPathToolSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPathToolSymbolic;
