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
      <path d="m 8 0 c -4.40625 0 -8 3.59375 -8 8 s 3.59375 8 8 8 s 8 -3.59375 8 -8 s -3.59375 -8 -8 -8 z m 3.398438 4.507812 c 0.265624 -0.027343 0.527343 0.050782 0.734374 0.21875 c 0.425782 0.351563 0.488282 0.980469 0.140626 1.40625 l -4.5 5.5 c -0.179688 0.21875 -0.441407 0.351563 -0.722657 0.367188 c -0.28125 0.011719 -0.558593 -0.09375 -0.757812 -0.292969 l -2.5 -2.5 c -0.390625 -0.390625 -0.390625 -1.023437 0 -1.414062 s 1.023437 -0.390625 1.414062 0 l 1.71875 1.71875 l 3.800781 -4.644531 c 0.167969 -0.203126 0.410157 -0.335938 0.671876 -0.363282 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwEmblemDefaultSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmblemDefaultSymbolic;
