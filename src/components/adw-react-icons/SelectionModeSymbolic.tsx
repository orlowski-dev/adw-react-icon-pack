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
        <path d="m 11.453125 5.414062 c 0.789063 0.050782 1.144531 1.007813 0.585937 1.566407 l -3.988281 4.121093 c -0.359375 0.359376 -0.941406 0.359376 -1.300781 0 l -2.382812 -2.300781 c -0.867188 -0.867187 0.433593 -2.167969 1.300781 -1.300781 l 1.730469 1.652344 l 3.339843 -3.472656 c 0.1875 -0.191407 0.449219 -0.285157 0.714844 -0.265626 z m 0 0"/>
        <path d="m 7.996094 0 c -4.402344 0 -7.996094 3.59375 -7.996094 8 s 3.59375 8 7.996094 8 c 4.40625 0 7.996094 -3.59375 7.996094 -8 s -3.589844 -8 -7.996094 -8 z m 0 2 c 3.324218 0 5.996094 2.675781 5.996094 6 s -2.671876 6 -5.996094 6 c -3.324219 0 -5.996094 -2.675781 -5.996094 -6 s 2.671875 -6 5.996094 -6 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSelectionModeSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSelectionModeSymbolic;
