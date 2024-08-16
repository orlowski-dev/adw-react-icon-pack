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
        <path d="m 2.5 2 c -0.398438 0 -0.761719 0.15625 -1.03125 0.40625 l 2.289062 2.289062 c 0.414063 -0.386718 1.019532 -0.695312 1.742188 -0.695312 c 1.082031 0 1.898438 0.6875 2.207031 1.300781 c 0.308594 0.617188 0.292969 1.199219 0.292969 1.199219 v 0.5 h -1.9375 l 2.992188 2.992188 c -0.058594 -0.289063 -0.054688 -0.492188 -0.054688 -0.492188 v -3 s -0.015625 -0.582031 0.292969 -1.199219 c 0.308593 -0.613281 1.125 -1.300781 2.207031 -1.300781 s 1.898438 0.6875 2.207031 1.300781 c 0.308594 0.617188 0.292969 1.199219 0.292969 1.199219 v 0.5 h -2 v -1 h -1 v 4 h 1 v -1 h 2 v 0.5 s 0.015625 0.582031 -0.292969 1.199219 c -0.308593 0.613281 -1.125 1.300781 -2.207031 1.300781 c -0.171875 0 -0.332031 -0.019531 -0.488281 -0.050781 l 2.050781 2.050781 h 1.4375 c 0.832031 0 1.5 -0.667969 1.5 -1.5 v -9 c 0 -0.832031 -0.667969 -1.5 -1.5 -1.5 z m -1.5 2.0625 v 8.4375 c 0 0.832031 0.667969 1.5 1.5 1.5 h 8.4375 l -3.257812 -3.257812 c -0.320313 0.601562 -1.121094 1.257812 -2.179688 1.257812 c -1.082031 0 -1.898438 -0.6875 -2.207031 -1.300781 c -0.308594 -0.617188 -0.292969 -1.199219 -0.292969 -1.199219 v -3 s -0.003906 -0.164062 0.035156 -0.402344 z m 4.0625 1.9375 l 0.9375 0.9375 v -0.9375 z m -0.0625 2.0625 v 1.9375 h 1 v -0.9375 z m 0 0"/>
        <path d="m 0.46875 1.53125 l 14 14 l 1.0625 -1.0625 l -14 -14 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwClosedcaptioningoffsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwClosedcaptioningoffsymbolic;
