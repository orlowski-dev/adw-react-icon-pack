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
        <path d="m 0.84375 15.363281 l 10.5 -10 c 0.199219 -0.191406 0.207031 -0.507812 0.019531 -0.707031 c -0.191406 -0.199219 -0.507812 -0.207031 -0.707031 -0.019531 l -10.5 10 c -0.1992188 0.191406 -0.2070312 0.507812 -0.019531 0.707031 c 0.191406 0.199219 0.507812 0.207031 0.707031 0.019531 z m 0 0"/>
        <path d="m 5.5 11 h 4 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 h -4 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 z m 0 0"/>
        <path d="m 8 8.425781 v -2.925781 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 s -0.5 0.222656 -0.5 0.5 v 2.925781 c 0 0.273438 0.222656 0.5 0.5 0.5 s 0.5 -0.226562 0.5 -0.5 z m 0 0"/>
        <path d="m 1 16 h 7 c 4.421875 0 8 -3.578125 8 -8 v -7 c 0 -0.550781 -0.449219 -1 -1 -1 h -7 c -4.421875 0 -8 3.578125 -8 8 v 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -3 c 0 -3.308594 2.691406 -6 6 -6 h 7 l -1 -1 v 7 c 0 3.308594 -2.691406 6 -6 6 h -7 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLeafSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLeafSymbolic;
