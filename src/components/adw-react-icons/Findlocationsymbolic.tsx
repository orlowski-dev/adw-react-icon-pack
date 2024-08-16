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
      <path d="m 8 0 c -0.554688 0 -1 0.445312 -1 1 v 1 c 0 0.03125 0 0.058594 0.003906 0.085938 c -2.507812 0.421874 -4.492187 2.410156 -4.914062 4.917968 c -0.03125 -0.003906 -0.058594 -0.003906 -0.089844 -0.003906 h -1 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 h 1 c 0.03125 0 0.058594 0 0.089844 -0.003906 c 0.421875 2.507812 2.40625 4.496094 4.914062 4.917968 c 0 0.027344 -0.003906 0.054688 -0.003906 0.085938 v 1 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 v -1 c 0 -0.03125 0 -0.058594 -0.003906 -0.085938 c 2.507812 -0.421874 4.496094 -2.410156 4.917968 -4.917968 c 0.03125 0 0.058594 0.003906 0.085938 0.003906 h 1 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 h -1 c -0.027344 0 -0.054688 0 -0.085938 0.003906 c -0.421874 -2.507812 -2.410156 -4.496094 -4.917968 -4.917968 c 0 -0.027344 0.003906 -0.058594 0.003906 -0.085938 v -1 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0.003906 4 c 2.199219 0 4 1.796875 4 4 s -1.800781 4 -4 4 c -2.203125 0 -4 -1.796875 -4 -4 s 1.796875 -4 4 -4 z m -0.003906 2 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFindlocationsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFindlocationsymbolic;
