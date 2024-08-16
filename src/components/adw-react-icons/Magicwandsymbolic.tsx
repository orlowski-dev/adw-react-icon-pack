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
      <path d="m 6.453125 1 l -2.152344 2.316406 l -3.035156 -0.546875 l 1.433594 2.867188 l -1.433594 2.867187 l 3.035156 -0.546875 l 2.152344 2.316407 l 0.441406 -3.203126 l 2.761719 -1.433593 l -2.761719 -1.433594 z m 2.507813 6.960938 c -0.40625 0 -0.773438 0.246093 -0.925782 0.625 c -0.152344 0.375 -0.0625 0.808593 0.230469 1.089843 l 5.984375 5.984375 c 0.25 0.261719 0.621094 0.367188 0.972656 0.277344 c 0.347656 -0.089844 0.625 -0.367188 0.714844 -0.714844 c 0.089844 -0.351562 -0.015625 -0.722656 -0.273438 -0.976562 l -5.984374 -5.984375 c -0.1875 -0.191407 -0.449219 -0.300781 -0.71875 -0.300781 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMagicwandsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMagicwandsymbolic;
