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
      <path d="m 4.5 1 c -0.257812 0 -0.511719 0.097656 -0.707031 0.292969 l -2.5 2.5 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 2.5 2.5 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 2.5 -2.5 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -2.5 -2.5 c -0.195312 -0.195313 -0.449219 -0.292969 -0.707031 -0.292969 z m 7.515625 1 c -0.023437 0 -0.046875 0 -0.070313 0.003906 c -0.335937 0.015625 -0.640624 0.203125 -0.808593 0.496094 l -2.320313 4 c -0.386718 0.664062 0.089844 1.5 0.863282 1.5 h 4.644531 c 0.769531 0 1.246093 -0.835938 0.863281 -1.5 l -2.320312 -4 c -0.179688 -0.308594 -0.503907 -0.496094 -0.851563 -0.5 z m -5.015625 7 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwEmojiSymbolsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmojiSymbolsSymbolic;
