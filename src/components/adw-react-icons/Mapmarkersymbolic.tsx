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
        <path d="m 8 0 c -3.589844 0 -6.5 2.910156 -6.5 6.5 s 2.910156 6.496094 6.5 6.496094 c 3.589844 0.003906 6.5 -2.90625 6.5 -6.496094 s -2.910156 -6.5 -6.5 -6.5 z m 0 4 c 1.378906 0 2.5 1.117188 2.5 2.5 c 0 1.378906 -1.121094 2.5 -2.5 2.496094 c -1.378906 0 -2.5 -1.117188 -2.5 -2.496094 s 1.117188 -2.5 2.5 -2.5 z m 0 0"/>
        <path d="m 14.097656 8.746094 l -5.660156 0.230468 l -6.535156 -0.230468 c 0.6875 2.152344 4.097656 5.25 6.097656 7.25 v 0.003906 v -0.003906 c 2 -2 5.410156 -5.101563 6.097656 -7.25 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMapmarkersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMapmarkersymbolic;
