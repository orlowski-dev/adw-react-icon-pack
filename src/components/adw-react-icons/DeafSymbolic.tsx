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
      <path d="m 2.03125 1 c -0.277344 -0.007812 -0.542969 0.097656 -0.738281 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 12 12 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -3.484375 -3.484375 c 1.511719 -1.285156 2.164063 -3.375 1.539063 -5.335938 c -0.65625 -2.015625 -2.511719 -3.40625 -4.636719 -3.460937 c -1.570312 -0.035157 -2.988281 0.65625 -3.929688 1.769531 l -1.488281 -1.488281 c -0.179687 -0.179688 -0.421875 -0.285157 -0.675781 -0.292969 z m 6.046875 2.007812 c 1.253906 0.027344 2.382813 0.847657 2.777344 2.082032 c 0.402343 1.230468 -0.039063 2.554687 -1.042969 3.3125 l -4.195312 -4.199219 c 0.453124 -0.605469 1.125 -1.035156 1.917968 -1.15625 c 0.183594 -0.03125 0.363282 -0.042969 0.542969 -0.039063 z m -4.078125 6.992188 c -0.550781 0 -1 0.449219 -1 1 v 0.007812 v 1 c 0 1.429688 1.054688 2.527344 2.238281 2.753907 c 1.183594 0.226562 2.53125 -0.289063 3.304688 -1.496094 c 0.195312 -0.304687 0.324219 -0.597656 0.433593 -0.875 l -1.558593 -1.5625 c -0.226563 0.574219 -0.363281 1.058594 -0.554688 1.359375 c -0.359375 0.558594 -0.863281 0.683594 -1.25 0.609375 c -0.378906 -0.074219 -0.613281 -0.21875 -0.613281 -0.789063 v -1 c 0 -0.003906 0 -0.003906 0 -0.007812 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDeafSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDeafSymbolic;
