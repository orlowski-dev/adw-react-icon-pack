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
      <path d="m 2.5 2 c -0.832031 0 -1.5 0.667969 -1.5 1.5 v 9 c 0 0.832031 0.667969 1.5 1.5 1.5 h 12 c 0.832031 0 1.5 -0.667969 1.5 -1.5 v -9 c 0 -0.832031 -0.667969 -1.5 -1.5 -1.5 z m 3 2 c 1.082031 0 1.898438 0.6875 2.207031 1.300781 c 0.308594 0.617188 0.292969 1.199219 0.292969 1.199219 v 0.5 h -2 v -1 h -1 v 4 h 1 v -1 h 2 v 0.5 s 0.015625 0.582031 -0.292969 1.199219 c -0.308593 0.613281 -1.125 1.300781 -2.207031 1.300781 s -1.898438 -0.6875 -2.207031 -1.300781 c -0.308594 -0.617188 -0.292969 -1.199219 -0.292969 -1.199219 v -3 s -0.015625 -0.582031 0.292969 -1.199219 c 0.308593 -0.613281 1.125 -1.300781 2.207031 -1.300781 z m 6 0 c 1.082031 0 1.898438 0.6875 2.207031 1.300781 c 0.308594 0.617188 0.292969 1.199219 0.292969 1.199219 v 0.5 h -2 v -1 h -1 v 4 h 1 v -1 h 2 v 0.5 s 0.015625 0.582031 -0.292969 1.199219 c -0.308593 0.613281 -1.125 1.300781 -2.207031 1.300781 s -1.898438 -0.6875 -2.207031 -1.300781 c -0.308594 -0.617188 -0.292969 -1.199219 -0.292969 -1.199219 v -3 s -0.015625 -0.582031 0.292969 -1.199219 c 0.308593 -0.613281 1.125 -1.300781 2.207031 -1.300781 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwClosedCaptioningSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwClosedCaptioningSymbolic;
