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
      <path d="m 11.964844 1.015625 c 1.664062 0 3.035156 1.367187 3.035156 3.03125 v 7.917969 c 0 1.664062 -1.371094 3.03125 -3.035156 3.03125 h -7.933594 v -2 h 7.933594 c 0.589844 0 1.035156 -0.441406 1.035156 -1.03125 v -7.917969 c 0 -0.589844 -0.445312 -1.03125 -1.035156 -1.03125 h -7.933594 v -2 z m -4.964844 2.992187 v 1 c 0 0.257813 -0.128906 0.527344 -0.3125 0.71875 l -1.28125 1.28125 h 4.59375 v 2 h -4.59375 l 1.28125 1.28125 c 0.183594 0.191407 0.3125 0.410157 0.3125 0.71875 v 1 h -1 c -0.308594 0 -0.550781 -0.089843 -0.75 -0.28125 l -3.65625 -3.71875 l 3.65625 -3.71875 c 0.199219 -0.191406 0.441406 -0.28125 0.75 -0.28125 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDecksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDecksymbolic;
