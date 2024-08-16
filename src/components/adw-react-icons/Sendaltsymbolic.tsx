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
      <path d="m 14.839844 0.0117188 c -0.117188 0.0195312 -0.230469 0.0585937 -0.335938 0.1171872 l -14 8 c -0.734375 0.417969 -0.652344 1.503906 0.136719 1.804688 l 4.359375 1.675781 v 3.390625 c 0 0.890625 1.078125 1.335938 1.707031 0.707031 l 2.484375 -2.484375 l 4.449219 1.710938 c 0.625 0.238281 1.304687 -0.191406 1.355469 -0.859375 l 1 -13 c 0.039062 -0.5 -0.300782 -0.949219 -0.796875 -1.0546878 c -0.117188 -0.02343745 -0.238281 -0.0273437 -0.359375 -0.0078124 z m -0.980469 2.7929692 l -0.753906 9.777343 l -4.441407 -1.707031 l 3.335938 -4.875 l -5.058594 4.210938 l -3.617187 -1.390626 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSendaltsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSendaltsymbolic;
