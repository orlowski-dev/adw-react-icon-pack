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
        <path d="m 13.949219 8.359375 s 0 0.019531 0.003906 0.011719 l -5.003906 4.914062 l 0.699219 -0.285156 h -4.621094 l 0.707031 0.292969 l -3.683594 -3.683594 v -0.019531 l 6.554688 -6.554688 h 0.019531 l -0.292969 -0.707031 c 0 0.265625 0.105469 0.519531 0.292969 0.707031 z m -3.617188 -6.03125 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 c -0.789062 -0.789063 -2.058593 -0.789063 -2.847656 0 l -6.554687 6.554687 c -0.789063 0.789063 -0.789063 2.058594 0 2.847657 l 3.683593 3.683593 c 0.1875 0.1875 0.441407 0.292969 0.707032 0.292969 h 4.621094 c 0.261718 0 0.511718 -0.101562 0.699218 -0.285156 l 5.015625 -4.921875 c 0.789063 -0.789063 0.789063 -2.058594 0 -2.847657 l -5.324219 -5.324218 z m 0 0"/>
        <path d="m 8.539062 1.832031 l -5.292968 4.121094 l 7.800781 7.800781 l 4.117187 -5.296875 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwEraserSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEraserSymbolic;
