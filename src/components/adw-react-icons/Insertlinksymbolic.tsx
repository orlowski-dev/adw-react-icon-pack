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
      <g fill="#2e3436">
        <path d="m 5 12.003906 v 1 h 0.007812 c -0.003906 0.261719 0.101563 0.515625 0.285157 0.707032 l 2 1.996093 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 2 -1.996093 c 0.1875 -0.191407 0.289063 -0.445313 0.289063 -0.707032 h 0.003906 v -1 z m 0 0"/>
        <path d="m 7 2 c -1.296875 0 -2.40625 0.839844 -2.824219 2 h 7.652344 c -0.417969 -1.160156 -1.53125 -2 -2.828125 -2 z m -5.996094 3 c -0.558594 0 -1.003906 0.445312 -1.003906 1 s 0.445312 1 1.003906 1 h 4.996094 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 z m 9 0 c -0.558594 0 -1.003906 0.445312 -1.003906 1 s 0.445312 1 1.003906 1 h 4.996094 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 z m -5.828125 3 c 0.414063 1.160156 1.527344 1.996094 2.824219 1.996094 h 2 c 1.296875 0 2.414062 -0.835938 2.828125 -1.996094 h -2.792969 c -0.011718 0 -0.023437 0.003906 -0.035156 0.003906 h -2 c -0.011719 0 -0.023438 -0.003906 -0.035156 -0.003906 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwInsertlinksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwInsertlinksymbolic;
