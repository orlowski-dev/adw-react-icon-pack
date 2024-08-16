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
        <path d="m 10.902344 0 h -5.800782 c -0.265624 0 -0.519531 0.105469 -0.707031 0.292969 l -4.101562 4.101562 c -0.1875 0.1875 -0.292969 0.441407 -0.292969 0.707031 v 5.796876 c 0 0.265624 0.105469 0.523437 0.292969 0.710937 l 4.101562 4.101563 c 0.1875 0.183593 0.441407 0.289062 0.707031 0.289062 h 5.796876 c 0.265624 0 0.523437 -0.105469 0.710937 -0.292969 l 4.101563 -4.101562 c 0.183593 -0.183594 0.289062 -0.441407 0.289062 -0.703125 v -5.800782 c 0 -0.265624 -0.105469 -0.519531 -0.292969 -0.707031 l -4.097656 -4.101562 c -0.1875 -0.1875 -0.445313 -0.292969 -0.707031 -0.292969 z m -0.417969 2 l 3.515625 3.515625 v 4.96875 l -3.515625 3.515625 h -4.96875 l -3.515625 -3.515625 v -4.96875 l 3.515625 -3.515625 z m 0 0"/>
        <path d="m 6.996094 4 h 2 v 3 l -0.25 2 h -1.46875 l -0.28125 -2 z m 1 5.75 c 0.6875 0 1.25 0.558594 1.25 1.25 s -0.5625 1.25 -1.25 1.25 c -0.691406 0 -1.25 -0.558594 -1.25 -1.25 s 0.558594 -1.25 1.25 -1.25 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwJunksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwJunksymbolic;
