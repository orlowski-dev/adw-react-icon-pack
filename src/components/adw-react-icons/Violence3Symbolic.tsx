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
        <path d="m 5 3 v 6 h 6 v -6 z m 2 1 h 3 v 1 h -3 z m 0 2 h 3 v 1 h -3 z m 0 0"/>
        <path d="m 6 6 c -1.859375 0 -3.585938 0.976562 -4.542969 2.574219 l -0.75 1.25 c -0.464843 0.769531 -0.707031 1.648437 -0.707031 2.546875 v 0.628906 c 0 0.550781 0.449219 1 1 1 h 3 c 0.550781 0 1 -0.449219 1 -1 v -3 c 0 -0.550781 0.449219 -1 1 -1 h 1 l -0.886719 -1.328125 c -0.074219 -0.113281 -0.113281 -0.242187 -0.113281 -0.378906 z m 0 0"/>
        <path d="m 4 7 v -1 c 0 -0.550781 -0.449219 -1 -1 -1 h -2 v -1 h 3 c 0.550781 0 1 0.449219 1 1 h 1 v 2 z m 0 0"/>
        <path d="m 15 3 l -1 1 h -3 v 2 h 5 v -3 z m 0 0"/>
        <path d="m 8 8 v 3 c -1.378906 -0.277344 -2.277344 -1.621094 -2 -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwViolence3Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViolence3Symbolic;
