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
      <path d="m 4 1 c -0.410156 0 -0.773438 0.25 -0.925781 0.625 l -2 5 c -0.050781 0.121094 -0.074219 0.246094 -0.074219 0.375 v 7 s 0 2 2 2 h 10 s 2 0 2 -2 l 0.003906 -6.9375 c 0 -0.148438 -0.003906 -0.296875 -0.074218 -0.4375 l -2 -5 c -0.152344 -0.378906 -0.519532 -0.625 -0.929688 -0.625 z m 0.675781 2 h 6.644531 l 1.203126 3 h -9.050782 z m 2.324219 5 h 2 v 3 h 2 c 0 0.265625 -0.105469 0.519531 -0.292969 0.707031 l -2 2 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 l -2 -2 c -0.183594 -0.1875 -0.285157 -0.4375 -0.285157 -0.699219 l -0.007812 -0.007812 h 2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArchivesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArchivesymbolic;
