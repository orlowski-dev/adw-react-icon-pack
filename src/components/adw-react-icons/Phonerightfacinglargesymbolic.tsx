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
        <path d="m 11 16.003906 c 0.828125 0 1.5 -0.671875 1.5 -1.5 s -0.671875 -1.5 -1.5 -1.5 c -4.433594 0 -8 -3.566406 -8 -8 c 0 -0.828125 -0.671875 -1.5 -1.5 -1.5 s -1.5 0.671875 -1.5 1.5 c 0 6.054688 4.945312 11 11 11 z m 0 0"/>
        <path d="m 4 0 v 6 h -1.710938 l -2.289062 -1 v -2.5 c 0 -1.378906 1.121094 -2.5 2.5 -2.5 z m 0 0"/>
        <path d="m 6 4.503906 v -3 c 0 -0.828125 -0.671875 -1.49999975 -1.5 -1.49999975 h -1 c -0.828125 0 -1.5 0.67187475 -1.5 1.49999975 v 3 c 0 0.832032 0.671875 1.5 1.5 1.5 h 1 c 0.828125 0 1.5 -0.667968 1.5 -1.5 z m 0 0"/>
        <path d="m 16.003906 12.003906 h -6 v 1.710938 l 1 2.289062 h 2.5 c 1.382813 0 2.5 -1.121094 2.5 -2.5 z m 0 0"/>
        <path d="m 11.5 10.003906 h 3 c 0.828125 0 1.5 0.671875 1.5 1.5 v 1 c 0 0.828125 -0.671875 1.5 -1.5 1.5 h -3 c -0.828125 0 -1.5 -0.671875 -1.5 -1.5 v -1 c 0 -0.828125 0.671875 -1.5 1.5 -1.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPhonerightfacinglargesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhonerightfacinglargesymbolic;
