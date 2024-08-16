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
      <path d="m 2 1.5 c -0.292969 0 -0.585938 0.085938 -0.832031 0.25 c -0.6875 0.460938 -0.875 1.394531 -0.417969 2.082031 l 0.542969 0.808594 c -0.804688 0.886719 -1.292969 2.0625 -1.292969 3.359375 v 2 c 0 2.769531 2.230469 5 5 5 h 6 c 2.769531 0 5 -2.230469 5 -5 v -2 c 0 -1.296875 -0.488281 -2.472656 -1.292969 -3.359375 l 0.542969 -0.808594 c 0.457031 -0.6875 0.269531 -1.621093 -0.417969 -2.082031 c -0.332031 -0.21875 -0.738281 -0.300781 -1.125 -0.222656 c -0.390625 0.082031 -0.734375 0.308594 -0.957031 0.640625 l -0.636719 0.957031 c -0.359375 -0.082031 -0.730469 -0.125 -1.113281 -0.125 h -6 c -0.382812 0 -0.753906 0.042969 -1.113281 0.125 l -0.636719 -0.957031 c -0.222656 -0.332031 -0.566406 -0.558594 -0.957031 -0.640625 c -0.09375 -0.015625 -0.191407 -0.027344 -0.292969 -0.027344 z m 6 4.5 c 1.949219 0.335938 3.027344 3.070312 3 5 c 0 2 -2.113281 3.039062 -3 3 c -0.886719 0.039062 -3 -1 -3 -3 c -0.027344 -1.929688 1.050781 -4.664062 3 -5 z m -5 1 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 10 0 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m -5 1 c -0.828125 0 -1.5 0.214844 -1.5 0.765625 s 0.671875 1.234375 1.5 1.234375 s 1.5 -0.683594 1.5 -1.234375 s -0.671875 -0.765625 -1.5 -0.765625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBearsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBearsymbolic;
