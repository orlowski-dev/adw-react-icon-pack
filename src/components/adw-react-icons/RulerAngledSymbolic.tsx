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
      <path d="m 0.597656 9.09375 c -0.769531 0.769531 -0.769531 2.058594 0 2.828125 l 3.492188 3.492187 c 0.769531 0.769532 2.054687 0.769532 2.828125 0 l 8.484375 -8.484374 c 0.773437 -0.773438 0.773437 -2.058594 0 -2.828126 l -3.492188 -3.492187 c -0.769531 -0.773437 -2.054687 -0.773437 -2.828125 0 z m 1.414063 1.414062 l 1.148437 -1.148437 l 1.460938 1.371094 l 0.707031 -0.707031 l -1.414063 -1.414063 l 0.707032 -0.710937 l 2.121094 2.125 l 0.707031 -0.707032 l -2.121094 -2.125 l 0.707031 -0.707031 l 1.414063 1.414063 l 0.707031 -0.707032 l -1.414062 -1.414062 l 0.707031 -0.707032 l 2.121093 2.121094 l 0.707032 -0.707031 l -2.121094 -2.121094 l 0.707031 -0.707031 l 1.375 1.375 l 0.707031 -0.707031 l -1.375 -1.375 l 0.925782 -0.925781 l 3.492187 3.492187 l -8.484375 8.484375 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRulerAngledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRulerAngledSymbolic;
