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
        <path d="m 8 3 c -0.554688 0 -1 0.445312 -1 1 v 1 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 v -1 c 0 -0.554688 -0.445312 -1 -1 -1 z m -5 2.050781 c -0.238281 0.007813 -0.476562 0.105469 -0.660156 0.292969 c -0.390625 0.390625 -0.390625 1.019531 0 1.410156 l 0.71875 0.71875 c 0.390625 0.394532 1.023437 0.394532 1.414062 0 c 0.390625 -0.390625 0.390625 -1.019531 0 -1.410156 l -0.71875 -0.71875 c -0.207031 -0.210938 -0.480468 -0.308594 -0.753906 -0.292969 z m 9.949219 0 c -0.253907 0 -0.511719 0.097657 -0.707031 0.292969 l -0.71875 0.71875 c -0.390626 0.390625 -0.390626 1.023438 0 1.414062 c 0.390624 0.390626 1.023437 0.390626 1.414062 0 l 0.71875 -0.71875 c 0.390625 -0.390624 0.390625 -1.023437 0 -1.414062 c -0.195312 -0.195312 -0.449219 -0.292969 -0.707031 -0.292969 z m -11.949219 4.949219 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 h 0.972656 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 z m 12.984375 0 c -0.554687 0 -1 0.445312 -1 1 s 0.445313 1 1 1 h 1.015625 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 z m 0 0"/>
        <path d="m 5.5 10 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 1.5 h 6 v -1.5 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 h -0.5 s -1.332031 0 -2 0 s -2 0 -2 0 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwKeyboardbrightnesshighsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyboardbrightnesshighsymbolic;
