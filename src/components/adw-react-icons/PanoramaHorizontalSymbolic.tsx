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
      <path d="m 1.828125 1.808594 c 4.113281 1.585937 8.226563 1.589844 12.34375 0 c 1.03125 -0.394532 1.828125 0.085937 1.828125 1.191406 v 10 c 0 1.105469 -0.800781 1.589844 -1.828125 1.195312 c -4.089844 -1.570312 -8.203125 -1.613281 -12.34375 -0.007812 c -1.03125 0.398438 -1.828125 -0.082031 -1.828125 -1.1875 v -10 c 0 -1.105469 0.796875 -1.589844 1.828125 -1.191406 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPanoramaHorizontalSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPanoramaHorizontalSymbolic;
