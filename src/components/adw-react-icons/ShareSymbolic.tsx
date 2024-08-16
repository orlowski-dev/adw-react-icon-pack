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
        <path d="m 4 6 h 1 c 0.257812 0 0.527344 -0.128906 0.71875 -0.3125 l 1.28125 -1.28125 v 6.59375 h 2 v -6.59375 l 1.28125 1.28125 c 0.191406 0.183594 0.410156 0.3125 0.71875 0.3125 h 1 v -1 c 0 -0.308594 -0.089844 -0.550781 -0.28125 -0.75 l -3.71875 -3.65625 l -3.71875 3.65625 c -0.191406 0.199219 -0.28125 0.441406 -0.28125 0.75 z m 0 0"/>
        <path d="m 1.007812 11.972656 c 0 1.664063 1.367188 3.035156 3.03125 3.035156 h 7.917969 c 1.664063 0 3.03125 -1.371093 3.03125 -3.035156 v -1.972656 h -2 v 1.972656 c 0 0.589844 -0.441406 1.035156 -1.03125 1.035156 h -7.917969 c -0.589843 0 -1.03125 -0.445312 -1.03125 -1.035156 v -1.972656 h -2 z m 0 0"/>
        <path d="m 4.039062 6.96875 c -1.664062 0 -3.03125 1.367188 -3.03125 3.03125 v 1.976562 h 2 v -1.976562 c 0 -0.589844 0.441407 -1.03125 1.03125 -1.03125 h 0.960938 v -2 z m 6.960938 0 v 2 h 0.957031 c 0.589844 0 1.03125 0.441406 1.03125 1.03125 v 1.976562 h 2 v -1.976562 c 0 -1.664062 -1.367187 -3.03125 -3.03125 -3.03125 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwShareSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwShareSymbolic;
