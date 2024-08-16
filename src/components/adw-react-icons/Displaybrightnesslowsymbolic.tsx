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
        <path d="m 8 5 c -1.65625 0 -3 1.34375 -3 3 s 1.34375 3 3 3 s 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m 0 0"/>
        <path d="m 8 1 c -0.554688 0 -1 0.445312 -1 1 v 1 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 v -1 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4.242188 1.757812 c -0.253906 0 -0.511718 0.097657 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023438 0 1.414063 l 0.707031 0.707031 c 0.390626 0.390625 1.023438 0.390625 1.414063 0 s 0.390625 -1.023437 0 -1.414063 l -0.707031 -0.707031 c -0.195313 -0.195312 -0.449219 -0.292969 -0.707032 -0.292969 z m 8.484376 0 c -0.253907 0 -0.511719 0.097657 -0.707032 0.292969 l -0.707031 0.707031 c -0.390625 0.390626 -0.390625 1.023438 0 1.414063 s 1.023437 0.390625 1.414063 0 l 0.707031 -0.707031 c 0.390625 -0.390625 0.390625 -1.023438 0 -1.414063 c -0.195313 -0.195312 -0.449219 -0.292969 -0.707031 -0.292969 z m -10.242188 4.242188 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 z m 11 0 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 z m -8.550781 3.527344 c -0.25 0.007812 -0.5 0.109375 -0.691407 0.300781 l -0.707031 0.707031 c -0.390625 0.390625 -0.390625 1.023438 0 1.414063 s 1.023438 0.390625 1.414063 0 l 0.707031 -0.707031 c 0.390625 -0.390626 0.390625 -1.023438 0 -1.414063 c -0.011719 -0.011719 -0.023437 -0.023437 -0.035156 -0.035156 c -0.1875 -0.1875 -0.4375 -0.273438 -0.6875 -0.265625 z m 7.085937 0.007812 c -0.253906 0 -0.511718 0.097656 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414063 l 0.707031 0.707031 c 0.390625 0.390625 1.023438 0.390625 1.414063 0 s 0.390625 -1.023438 0 -1.414063 l -0.707031 -0.707031 c -0.195313 -0.195313 -0.449219 -0.292969 -0.707032 -0.292969 z m -3.585937 1.464844 c -0.53125 0 -0.949219 0.464844 -0.949219 1 v 1 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 v -1 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDisplaybrightnesslowsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDisplaybrightnesslowsymbolic;
