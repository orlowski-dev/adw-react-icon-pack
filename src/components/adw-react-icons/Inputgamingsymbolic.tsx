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
      <path d="m 3.5 2 c -1.660156 0 -2.800781 1 -3 3 c 0 0 -0.5 3 -0.5 5 c 0 0 0 3 3.03125 3 c 2.96875 0 2.96875 -3 2.96875 -3 c 0 -1.5 1.050781 -2.003906 2 -2 c 0.941406 0.003906 2 0.5 2.03125 2 c 0 0 -0.03125 3 2.96875 3 s 3 -3 3 -3 c 0.03125 -2 -0.5 -5 -0.5 -5 c -0.164062 -1.652344 -1.339844 -3 -3 -3 z m 0.75 2 h 0.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.75 h 0.75 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -0.75 v 0.75 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -0.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -0.75 h -0.75 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -0.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 h 0.75 v -0.75 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 5.75 0 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 3 2 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwInputgamingsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwInputgamingsymbolic;
