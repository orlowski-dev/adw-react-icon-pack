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
      <path d="m 3.015625 1.011719 c -0.96875 0.027343 -2.011719 0.585937 -2.011719 1.988281 v 10 c 0 1.375 1.019532 2.023438 1.96875 2.011719 c 0.285156 -0.003907 0.535156 -0.042969 0.769532 -0.113281 l 1.761718 -6.898438 h -1.5 l 1.5 -6 h 0.042969 l -0.539063 -0.304688 c -0.746093 -0.433593 -1.28125 -0.703124 -1.992187 -0.683593 z m 4.679687 0.21875 l -1.191406 4.769531 h 1.5 l -1.371094 5.375 l 7.265626 -4.15625 c 0.433593 -0.238281 0.65625 -0.730469 0.65625 -1.222656 c 0 -0.492188 -0.222657 -0.984375 -0.65625 -1.226563 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBrokenplaybacksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBrokenplaybacksymbolic;
