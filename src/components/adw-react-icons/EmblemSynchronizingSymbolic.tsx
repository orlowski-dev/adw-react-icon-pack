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
      <path d="m 7.863281 1 c -0.269531 0.003906 -0.535156 0.027344 -0.800781 0.0625 c -2.109375 0.285156 -4.023438 1.527344 -5.125 3.4375 c -0.277344 0.476562 -0.113281 1.089844 0.367188 1.363281 c 0.476562 0.277344 1.089843 0.113281 1.363281 -0.363281 c 1.054687 -1.824219 3.128906 -2.789062 5.199219 -2.425781 c 1.679687 0.296875 3.058593 1.414062 3.714843 2.925781 h -1.582031 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 4 c 0.550781 0 1 -0.449219 1 -1 v -4 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 v 1.398438 c -1.023438 -1.703126 -2.75 -2.933594 -4.785156 -3.292969 c -0.453125 -0.078125 -0.90625 -0.113281 -1.351563 -0.105469 z m -6.863281 7 c -0.550781 0 -1 0.449219 -1 1 v 4 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -1.394531 c 1.140625 1.894531 3.132812 3.167969 5.390625 3.367187 c 2.707031 0.238282 5.3125 -1.117187 6.671875 -3.472656 c 0.277344 -0.476562 0.113281 -1.089844 -0.367188 -1.363281 c -0.226562 -0.136719 -0.5 -0.171875 -0.757812 -0.101563 c -0.257812 0.066406 -0.476562 0.234375 -0.609375 0.464844 c -0.972656 1.683594 -2.824219 2.648438 -4.765625 2.480469 c -1.832031 -0.160157 -3.414062 -1.308594 -4.144531 -2.980469 h 1.582031 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwEmblemSynchronizingSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmblemSynchronizingSymbolic;
