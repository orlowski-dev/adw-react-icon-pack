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
      <path d="m 14 0 l -0.824219 1.644531 c -0.664062 -0.429687 -1.445312 -0.660156 -2.246093 -0.644531 c -0.082032 0 -0.152344 0.003906 -0.21875 0.011719 c -0.957032 0.066406 -1.859376 0.480469 -2.539063 1.160156 l -6 6 c -1.351563 1.351563 -1.527344 3.457031 -0.527344 5.003906 l -1.644531 0.824219 l 2 2 l 0.824219 -1.644531 c 1.546875 1 3.652343 0.824219 5.003906 -0.527344 l 6 -6 c 1.351563 -1.351563 1.527344 -3.457031 0.527344 -5.003906 l 1.644531 -0.824219 z m -3.035156 3 c 0.539062 -0.007812 1.0625 0.199219 1.449218 0.585938 c 0.789063 0.789062 0.789063 2.039062 0 2.828124 l -6 6 c -0.789062 0.789063 -2.039062 0.789063 -2.828124 0 c -0.789063 -0.789062 -0.789063 -2.039062 0 -2.828124 l 1 -1 l 1.414062 1.414062 l 4 -4 l -1.414062 -1.414062 l 1 -1 c 0.339843 -0.339844 0.792968 -0.546876 1.273437 -0.578126 c 0.042969 -0.003906 0.078125 -0.007812 0.105469 -0.007812 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSalamiSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSalamiSymbolic;
