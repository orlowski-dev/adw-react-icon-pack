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
      <path d="m 11.992188 3 v 4 c 0.003906 0.667969 -0.179688 0.726562 -0.441407 0.855469 c -0.265625 0.128906 -0.558593 0.144531 -0.558593 0.144531 h -5.589844 l 0.285156 -0.28125 c 0.183594 -0.191406 0.3125 -0.460938 0.3125 -0.71875 v -1 h -1 c -0.308594 0 -0.550781 0.089844 -0.75 0.28125 l -2.65625 2.699219 l 2.65625 2.738281 c 0.199219 0.191406 0.441406 0.28125 0.75 0.28125 h 1 v -1 c 0 -0.257812 -0.128906 -0.527344 -0.3125 -0.71875 l -0.277344 -0.28125 h 5.582032 s 0.710937 0.015625 1.453124 -0.355469 c 0.738282 -0.367187 1.550782 -1.3125 1.546876 -2.644531 v -4 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwKeyboardentersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyboardentersymbolic;
