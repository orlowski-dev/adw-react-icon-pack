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
      <g fill="currentColor">
        <path d="m 7.5 7 c -0.5 0 -0.5 -0.5 -0.5 -0.5 v -4.5 c 0 -0.554688 -0.445312 -1 -1 -1 s -1 0.445312 -1 1 v 8.5 c 0 0.5 -0.5 0.5 -0.5 0.5 l -1.792969 -1.707031 c -0.1875 -0.195313 -0.445312 -0.300781 -0.714843 -0.304688 c -1.085938 0.085938 -1.148438 1.269531 -0.699219 1.71875 l 3 3 c 0.707031 0.792969 1.757812 1.289063 2.707031 1.292969 h 4 c 3 0 3 -3 3 -3 l 0.015625 -2.929688 v -0.054687 c 0 -2 -1.445313 -2 -2 -2 h -1 s -3.015625 -0.015625 -3.515625 -0.015625 z m 0 0"/>
        <path d="m 10 1 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m -7 0.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 10 0 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 z m -10 2.5 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 7 0 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 3 0.5 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 z m -10 3 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBrailleSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBrailleSymbolic;
