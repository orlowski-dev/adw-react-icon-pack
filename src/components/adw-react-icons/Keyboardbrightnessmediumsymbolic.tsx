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
        <path d="m 8 4 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m -4.398438 1.601562 c -0.554687 0 -1 0.445313 -1 1 c 0 0.550782 0.445313 1 1 1 c 0.550782 0 1 -0.449218 1 -1 c 0 -0.554687 -0.449218 -1 -1 -1 z m 9 0 c -0.554687 0 -1 0.445313 -1 1 c 0 0.550782 0.445313 1 1 1 c 0.550782 0 1 -0.449218 1 -1 c 0 -0.554687 -0.449218 -1 -1 -1 z m -10.601562 4.398438 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 12 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 5.5 10 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 1.5 h 6 v -1.5 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 h -0.5 s -1.332031 0 -2 0 s -2 0 -2 0 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwKeyboardbrightnessmediumsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyboardbrightnessmediumsymbolic;
