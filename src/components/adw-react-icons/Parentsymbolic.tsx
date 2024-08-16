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
      <path d="m 5.5 -0.00390625 c -1.378906 0 -2.5 1.12109425 -2.5 2.50000025 c 0 1.382812 1.121094 2.5 2.5 2.5 s 2.5 -1.117188 2.5 -2.5 c 0 -1.378906 -1.121094 -2.50000025 -2.5 -2.50000025 z m 7 5.00000025 c -1.386719 0 -2.5 1.117187 -2.5 2.5 c 0 1.386718 1.113281 2.5 2.5 2.5 s 2.5 -1.113282 2.5 -2.5 c 0 -1.382813 -1.113281 -2.5 -2.5 -2.5 z m -8.5 1 c -0.265625 0.003906 -0.519531 0.105468 -0.707031 0.292968 l -3 3 c -0.3906252 0.390626 -0.3906252 1.027344 0 1.414063 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 1.542969 -1.542969 l -0.25 1.765625 v 4.070313 c 0 0.554687 0.449219 1 1 1 s 1 -0.445313 1 -1 v -2.5 s 0 -0.5 0.5 -0.5 s 0.5 0.5 0.5 0.5 v 2.5 c 0 0.554687 0.449219 1 1 1 s 1 -0.445313 1 -1 v -3.285156 l 0.085938 0.191406 c 0.179687 0.402344 0.597656 0.640625 1.035156 0.585937 c 0.152344 0.292969 0.433594 0.515625 0.878906 0.507813 h 1 v 2 c 0 0.773437 0.835938 1.253906 1.5 0.867187 c 0.667969 0.382813 1.5 -0.097656 1.5 -0.867187 v -0.132813 c 0.867188 0.5 1.847656 -0.441406 1.386719 -1.328125 l -0.949219 -1.8125 c -0.351562 -0.609375 -0.59375 -0.726562 -1.4375 -0.726562 h -3 c -0.042969 0 -0.074219 0.019531 -0.117188 0.023437 l -1.96875 -4.425781 c -0.160156 -0.363281 -0.519531 -0.597656 -0.914062 -0.597656 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwParentsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwParentsymbolic;
