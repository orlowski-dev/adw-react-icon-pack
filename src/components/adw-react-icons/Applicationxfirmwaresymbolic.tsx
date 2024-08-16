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
      <path d="m 4.035156 0.0117188 c -0.550781 0 -1 0.4492192 -1 1.0000002 v 2.175781 c -1.179687 0.410156 -2.023437 1.527344 -2.023437 2.847656 v 0.976563 h 2 v -0.976563 c 0 -0.566406 0.457031 -1.023437 1.023437 -1.023437 h 7.960938 c 0.5625 0 1.015625 0.457031 1.015625 1.023437 v 3.960938 c 0 0.5625 -0.453125 1.015625 -1.015625 1.015625 h -0.984375 v 2 h 0.984375 c 1.671875 0 3.015625 -1.34375 3.015625 -3.015625 v -3.960938 c 0 -1.3125 -0.832031 -2.425781 -2 -2.839844 v -2.183593 c 0 -0.550781 -0.445313 -1.0000002 -1 -1.0000002 c -0.550781 0 -1 0.4492192 -1 1.0000002 v 2 h -2 v -2 c 0 -0.550781 -0.445313 -1.0000002 -1 -1.0000002 c -0.550781 0 -1 0.4492192 -1 1.0000002 v 2 h -1.976563 v -2 c 0 -0.550781 -0.449218 -1.0000002 -1 -1.0000002 z m 0.976563 7.0000002 v 2 c -2.210938 0 -4 1.789062 -4 4 v 2 c 0 0.554687 0.449219 1 1 1 c 0.554687 0 1 -0.445313 1 -1 v -2 c 0 -1.097657 0.902343 -2 2 -2 v 2 h 1 v -0.003907 c 0.265625 0 0.519531 -0.101562 0.707031 -0.289062 l 2 -2 c 0.390625 -0.390625 0.390625 -1.023438 0 -1.414062 l -2 -2 c -0.1875 -0.183594 -0.441406 -0.289063 -0.707031 -0.285157 v -0.007812 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwApplicationxfirmwaresymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwApplicationxfirmwaresymbolic;
