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
        <path d="m 5.101562 0 c -0.265624 0 -0.519531 0.105469 -0.707031 0.292969 l -4.101562 4.097656 c -0.1875 0.1875 -0.292969 0.445313 -0.292969 0.707031 l 0.00390625 5.800782 c -0.00390625 0.265624 0.10156275 0.519531 0.29296875 0.707031 l 4.097656 4.101562 c 0.1875 0.1875 0.441407 0.292969 0.707031 0.292969 h 3.894532 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -3.480469 l -3.515625 -3.515625 l 0.003906 -4.96875 l 3.511719 -3.515625 h 4.972656 l 3.511719 3.511719 l -0.007812 3.484375 c 0 0.265625 0.105468 0.523437 0.292968 0.710937 s 0.441406 0.292969 0.707032 0.292969 c 0.554687 0 1.003906 -0.445312 1.003906 -1 l 0.003906 -3.898438 c 0 -0.265624 -0.105469 -0.519531 -0.292969 -0.710937 l -4.101562 -4.101563 c -0.1875 -0.183593 -0.441407 -0.289062 -0.703125 -0.289062 z m 1.894532 4 v 3 l 0.28125 2 h 1.46875 l 0.25 -2 v -3 z m 1 5.75 c -0.691406 0 -1.25 0.558594 -1.25 1.25 s 0.558594 1.25 1.25 1.25 s 1.25 -0.558594 1.25 -1.25 s -0.558594 -1.25 -1.25 -1.25 z m 0 0" fill-opacity="0.35"/>
        <path d="m 10.996094 11 h 1.375 l 1.125 1.09375 l 1.09375 -1.09375 h 1.40625 v 1.46875 l -1.09375 1.0625 l 1.09375 1.0625 v 1.40625 h -1.4375 l -1.0625 -1.0625 l -1.0625 1.0625 h -1.4375 v -1.40625 l 1.0625 -1.0625 l -1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNotjunksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNotjunksymbolic;
