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
      <path d="m 1.8125 0 c -1.003906 0 -1.8125 1.011719 -1.8125 2.265625 v 0.46875 c 0 0.890625 0.40625 1.65625 1 2.027344 v 5.238281 c 0 2.199219 1.800781 4 4 4 h 5.183594 c 0.421875 1.195312 1.550781 1.996094 2.816406 2 c 1.65625 0 3 -1.34375 3 -3 v -9 c 0 -1.65625 -1.34375 -3 -3 -3 h -4.519531 l -0.679688 0.960938 c -0.460937 0.660156 -1.214843 1.050781 -2.019531 1.050781 h -1.792969 c 0.007813 -0.09375 0.011719 -0.183594 0.011719 -0.277344 v -0.46875 c 0 -1.253906 -0.808594 -2.265625 -1.8125 -2.265625 z m 7.707031 3 h 0.480469 v 9 h -5 c -1.117188 0 -2 -0.882812 -2 -2 v -4.988281 h 2.78125 c 1.453125 0 2.816406 -0.707031 3.65625 -1.898438 z m -1.613281 2 c -0.503906 0 -0.90625 0.402344 -0.90625 0.90625 v 0.1875 c 0 0.503906 0.402344 0.90625 0.90625 0.90625 h 0.1875 c 0.503906 0 0.90625 -0.402344 0.90625 -0.90625 v -0.1875 c 0 -0.503906 -0.402344 -0.90625 -0.90625 -0.90625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDogSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDogSymbolic;
