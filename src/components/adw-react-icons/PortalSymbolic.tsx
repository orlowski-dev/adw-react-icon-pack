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
      <path d="m 12 0 c -1.46875 0 -2.765625 0.808594 -3.457031 2 h -7.542969 l 2 2 l -2 2 h 7.542969 c 0.691406 1.191406 1.988281 2 3.457031 2 c 2.199219 0 4 -1.800781 4 -4 s -1.800781 -4 -4 -4 z m 0 2 c 1.117188 0 2 0.882812 2 2 s -0.882812 2 -2 2 s -2 -0.882812 -2 -2 s 0.882812 -2 2 -2 z m -8 6 c -2.199219 0 -4 1.800781 -4 4 s 1.800781 4 4 4 c 1.46875 0 2.765625 -0.808594 3.457031 -2 h 5.542969 l 2 -2 l -2 -2 h -5.542969 c -0.691406 -1.191406 -1.988281 -2 -3.457031 -2 z m 0 2 c 1.117188 0 2 0.882812 2 2 s -0.882812 2 -2 2 s -2 -0.882812 -2 -2 s 0.882812 -2 2 -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPortalSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPortalSymbolic;
