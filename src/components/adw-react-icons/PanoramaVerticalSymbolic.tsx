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
      <path d="m 14.191406 1.828125 c -1.585937 4.113281 -1.589844 8.226563 0 12.34375 c 0.394532 1.03125 -0.085937 1.828125 -1.191406 1.828125 h -10 c -1.105469 0 -1.589844 -0.800781 -1.195312 -1.828125 c 1.570312 -4.089844 1.613281 -8.203125 0.007812 -12.34375 c -0.398438 -1.03125 0.082031 -1.828125 1.1875 -1.828125 h 10 c 1.105469 0 1.589844 0.796875 1.191406 1.828125 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPanoramaVerticalSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPanoramaVerticalSymbolic;
