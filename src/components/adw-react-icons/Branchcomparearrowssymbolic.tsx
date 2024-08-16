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
      <path d="m 3 0 c -1.648438 0 -3 1.351562 -3 3 c 0 1.296875 0.839844 2.410156 2 2.824219 v 5.175781 c 0 1.644531 1.355469 3 3 3 h 0.585938 l -0.292969 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 s 1.023437 0.390625 1.414062 0 l 2 -2 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -2 -2 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 s -0.519531 0.105469 -0.707031 0.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 0.292969 0.292969 h -0.585938 c -0.5625 0 -1 -0.4375 -1 -1 v -5.175781 c 1.160156 -0.414063 2 -1.527344 2 -2.824219 c 0 -1.648438 -1.351562 -3 -3 -3 z m 7 0 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 l -2 2 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 2 2 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -0.292969 -0.292969 h 0.585938 c 0.5625 0 1 0.4375 1 1 v 5.175781 c -1.160156 0.414063 -2 1.527344 -2 2.824219 c 0 1.648438 1.351562 3 3 3 s 3 -1.351562 3 -3 c 0 -1.296875 -0.839844 -2.410156 -2 -2.824219 v -5.175781 c 0 -1.644531 -1.355469 -3 -3 -3 h -0.585938 l 0.292969 -0.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m -7 1.5 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m 10 10 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBranchcomparearrowssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBranchcomparearrowssymbolic;
