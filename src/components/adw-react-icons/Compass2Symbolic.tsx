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
      <path d="m 8 0 c -4.40625 0 -7.99609375 3.59375 -7.99609375 8 s 3.58984375 8 7.99609375 8 s 7.996094 -3.59375 7.996094 -8 s -3.589844 -8 -7.996094 -8 z m 0 2 c 3.324219 0 5.996094 2.675781 5.996094 6 s -2.671875 6 -5.996094 6 s -5.996094 -2.675781 -5.996094 -6 s 2.671875 -6 5.996094 -6 z m 3.40625 2 c -0.089844 -0.003906 -0.191406 0.015625 -0.289062 0.058594 l -4.507813 2.0625 c -0.21875 0.097656 -0.394531 0.273437 -0.496094 0.492187 l -2.058593 4.511719 c -0.238282 0.519531 0.296874 1.054688 0.816406 0.816406 l 4.511718 -2.058594 c 0.21875 -0.101562 0.394532 -0.277343 0.492188 -0.496093 l 2.0625 -4.507813 c 0.191406 -0.425781 -0.125 -0.859375 -0.53125 -0.878906 z m -3.410156 3 c 0.253906 0 0.511718 0.101562 0.703125 0.292969 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 c -0.386719 0.386719 -1.019531 0.386719 -1.40625 0 c -0.390625 -0.390625 -0.390625 -1.023437 0 -1.414062 c 0.191406 -0.191407 0.449219 -0.292969 0.703125 -0.292969 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCompass2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCompass2Symbolic;
