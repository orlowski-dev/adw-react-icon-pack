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
      <path d="m 0.988281 -0.015625 v 2 c 0.554688 0 1 0.449219 1 1 c 0 0.554687 -0.445312 1 -1 1 v 1 c 0.554688 0 1 0.449219 1 1 c 0 0.554687 -0.445312 1 -1 1 v 1 c 0.554688 0 1 0.449219 1 1 c 0 0.554687 -0.445312 1 -1 1 v 1 c 0.554688 0 1 0.449219 1 1 c 0 0.554687 -0.445312 1 -1 1 v 2 h 2 c 0 -0.550781 0.449219 -1 1 -1 c 0.554688 0 1 0.449219 1 1 h 1 c 0 -0.550781 0.449219 -1 1 -1 c 0.554688 0 1 0.449219 1 1 h 1 c 0 -0.550781 0.449219 -1 1 -1 c 0.554688 0 1 0.449219 1 1 h 1 c 0 -0.550781 0.449219 -1 1 -1 c 0.554688 0 1 0.449219 1 1 h 2 v -2 c -0.550781 0 -1 -0.445313 -1 -1 c 0 -0.550781 0.449219 -1 1 -1 v -1 c -0.550781 0 -1 -0.445313 -1 -1 c 0 -0.550781 0.449219 -1 1 -1 v -1 c -0.550781 0 -1 -0.445313 -1 -1 c 0 -0.550781 0.449219 -1 1 -1 v -1 c -0.550781 0 -1 -0.445313 -1 -1 c 0 -0.550781 0.449219 -1 1 -1 v -2 h -2 c 0 0.554687 -0.445312 1 -1 1 c -0.550781 0 -1 -0.445313 -1 -1 h -1 c 0 0.554687 -0.445312 1 -1 1 c -0.550781 0 -1 -0.445313 -1 -1 h -1 c 0 0.554687 -0.445312 1 -1 1 c -0.550781 0 -1 -0.445313 -1 -1 h -1 c 0 0.554687 -0.445312 1 -1 1 c -0.550781 0 -1 -0.445313 -1 -1 z m 2 2 h 11 v 11 h -2 v -2.0625 c 0 -1.066406 -0.777343 -1.976563 -1.71875 -2.25 c -0.492187 0.480469 -1.070312 0.6875 -1.78125 0.6875 c -0.707031 0 -1.285156 -0.207031 -1.78125 -0.6875 c -0.773437 0.28125 -1.714843 0.980469 -1.71875 2.21875 v 2.09375 h -2 z m 5.5 2 c -1.273437 0 -2.304687 1.035156 -2.308593 2.308594 c 0 1.273437 1.035156 2.308593 2.308593 2.308593 c 1.277344 0 2.308594 -1.035156 2.308594 -2.308593 c 0 -1.273438 -1.03125 -2.304688 -2.308594 -2.308594 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwStampsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStampsymbolic;
