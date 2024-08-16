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
        <path d="m 5 3 v 2 c 0 -0.550781 -0.449219 -1 -1 -1 h -1.074219 l 4.984375 5 h 3.089844 v -6 z m 2 1 h 3 v 1 h -3 z m 0 2 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 15 3 l -1 1 h -3 v 2 h 5 v -3 z m 0 0"/>
        <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
        <path d="m 3.550781 6.613281 c -0.839843 0.445313 -1.5625 1.117188 -2.066406 1.960938 l -0.75 1.25 c -0.460937 0.769531 -0.7070312 1.648437 -0.7070312 2.546875 v 0.628906 c 0 0.550781 0.4492182 1 1.0000002 1 h 3 c 0.550781 0 1 -0.449219 1 -1 v -3 c 0 -0.484375 0.34375 -0.886719 0.796875 -0.980469 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwViolence3NoneSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViolence3NoneSymbolic;
