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
      <path d="m 3 1 c -1.644531 0 -3 1.355469 -3 3 v 6 c 0 1.644531 1.355469 3 3 3 h 1 v 3 l 3 -3 h 6 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -1.644531 -1.355469 -3 -3 -3 z m 5 3 h 1 v 0.007812 c 0.265625 -0.003906 0.519531 0.101563 0.707031 0.285157 l 2 2 c 0.390625 0.390625 0.390625 1.023437 0 1.414062 l -2 2 c -0.1875 0.183594 -0.441406 0.289063 -0.707031 0.289063 v 0.003906 h -1 v -2 h -4 v -2 h 4 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwUserawaysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwUserawaysymbolic;
