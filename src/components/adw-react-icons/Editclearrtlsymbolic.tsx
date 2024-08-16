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
      <path d="m 9 2 c 0.832031 0 1.558594 0.34375 2.292969 0.78125 s 1.464843 1.003906 2.128906 1.597656 c 0.660156 0.597656 1.253906 1.222656 1.707031 1.796875 c 0.226563 0.289063 0.417969 0.5625 0.570313 0.835938 c 0.152343 0.277343 0.300781 0.53125 0.300781 0.988281 s -0.148438 0.710938 -0.300781 0.984375 c -0.152344 0.277344 -0.34375 0.550781 -0.570313 0.835937 c -0.453125 0.578126 -1.046875 1.203126 -1.707031 1.796876 c -0.664063 0.597656 -1.394531 1.164062 -2.128906 1.601562 s -1.460938 0.78125 -2.292969 0.78125 h -6 c -1.644531 0 -3 -1.355469 -3 -3 v -6 c 0 -1.644531 1.355469 -3 3 -3 z m -1 3 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 l -1.292969 1.292969 l -1.292969 -1.292969 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 s -0.519531 0.105469 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 1.292969 1.292969 l -1.292969 1.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 s 1.023437 0.390625 1.414062 0 l 1.292969 -1.292969 l 1.292969 1.292969 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -1.292969 -1.292969 l 1.292969 -1.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwEditclearrtlsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEditclearrtlsymbolic;
