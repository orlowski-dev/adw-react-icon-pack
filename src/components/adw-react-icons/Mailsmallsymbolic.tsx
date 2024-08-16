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
        <path d="m 3 6.9375 v 5.042969 c 0 0.550781 0.449219 1 1 1 h 8 c 0.550781 0 1 -0.449219 1 -1 v -5.042969 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 v 5.042969 l 1 -1 h -8 l 1 1 v -5.042969 c 0 -0.550781 -0.449219 -1 -1 -1 s -1 0.449219 -1 1 z m 0 0"/>
        <path d="m 4.289062 7.34375 l 4.148438 -2.980469 h -0.875 l 4.148438 2.980469 l 0.875 -1.21875 l -4.148438 -2.980469 c -0.261719 -0.1875 -0.613281 -0.1875 -0.875 0 l -4.148438 2.980469 z m 0 0"/>
        <path d="m 3.5 7.027344 l 4.207031 3.027344 c 0.175781 0.128906 0.410157 0.128906 0.582031 0 l 4.210938 -3.027344 c 0.222656 -0.160156 0.273438 -0.472656 0.113281 -0.699219 c -0.160156 -0.222656 -0.472656 -0.273437 -0.699219 -0.113281 l -4.207031 3.03125 h 0.582031 l -4.207031 -3.03125 c -0.144531 -0.105469 -0.335937 -0.125 -0.496093 -0.050782 c -0.164063 0.074219 -0.277344 0.230469 -0.292969 0.40625 c -0.019531 0.179688 0.058593 0.351563 0.207031 0.457032 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMailsmallsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailsmallsymbolic;
