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
      <path d="m 8 1 v 2 h -4 c -2.199219 0 -4 1.800781 -4 4 v 2 c 0 1.019531 0.386719 1.964844 1.019531 2.671875 c 0.367188 0.410156 1 0.445313 1.410157 0.078125 c 0.414062 -0.367188 0.449218 -1 0.078124 -1.414062 c -0.316406 -0.351563 -0.507812 -0.8125 -0.507812 -1.335938 v -2 c 0 -1.125 0.875 -2 2 -2 h 4 v 2 h 1 v -0.007812 c 0.265625 0.003906 0.519531 -0.101563 0.707031 -0.285157 l 2 -2 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -2 -2 c -0.1875 -0.183594 -0.441406 -0.289063 -0.707031 -0.285157 v -0.007812 z m 6.289062 3 c -0.265624 -0.011719 -0.523437 0.078125 -0.71875 0.257812 c -0.414062 0.367188 -0.449218 1 -0.078124 1.410157 c 0.316406 0.355469 0.507812 0.816406 0.507812 1.339843 v 2 c 0 1.125 -0.875 2 -2 2 h -4 v -2.007812 h -1 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -2 2 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 2 2 c 0.1875 0.183594 0.441406 0.289063 0.707031 0.285157 v 0.007812 h 1 v -1.992188 h 4 c 2.199219 0 4 -1.804687 4 -4 v -2 c 0 -1.023437 -0.386719 -1.96875 -1.019531 -2.675781 c -0.175781 -0.199219 -0.425781 -0.316406 -0.691407 -0.332031 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPlaylistrepeatsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPlaylistrepeatsymbolic;
