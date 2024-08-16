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
      <path d="m 3.992188 3 s -0.707032 -0.011719 -1.445313 0.355469 c -0.738281 0.371093 -1.554687 1.3125 -1.554687 2.644531 v 7 h -1.0000005 l -0.0039063 2 h 0.0039063 l 3.0000005 0.011719 v -0.011719 h 13 v -2 h 0.011718 v -7.308594 c 0 -1.429687 -1.171875 -2.632812 -2.625 -2.648437 l -2.378906 -0.019531 s 1 0.824218 1 1.964843 l 1.046875 0.042969 c 0.539063 0.023438 0.941406 0.496094 0.941406 0.976562 v 6.992188 h -2.988281 v -7 s 0.011719 -0.710938 -0.355469 -1.449219 c -0.371093 -0.738281 -1.3125 -1.550781 -2.644531 -1.550781 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwTabSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTabSymbolic;
