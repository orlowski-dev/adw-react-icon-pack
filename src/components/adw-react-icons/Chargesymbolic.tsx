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
      <path d="m 2 9 h 2 c 0.429688 0 0.8125 -0.277344 0.949219 -0.683594 l 2 -6 l -1.914063 -0.054687 l 3 11 c 0.113282 0.417969 0.480469 0.710937 0.90625 0.738281 c 0.429688 0.023438 0.828125 -0.230469 0.988282 -0.628906 l 2 -5 l -0.929688 0.628906 h 3 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -3 c -0.410156 0 -0.777344 0.25 -0.929688 0.628906 l -2 5 l 1.894532 0.109375 l -3 -11 c -0.117188 -0.425781 -0.496094 -0.726562 -0.9375 -0.738281 s -0.835938 0.265625 -0.976563 0.683594 l -2 6 l 0.949219 -0.683594 h -2 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwChargesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwChargesymbolic;
