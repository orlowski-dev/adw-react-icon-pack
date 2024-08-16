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
        <path d="m 6.5 0 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 l -1.707031 1.707031 h -1.085938 c -1.644531 0 -3 1.355469 -3 3 v 7 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -7 c 0 -1.644531 -1.355469 -3 -3 -3 h -1.085938 l -1.707031 -1.707031 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0.414062 2 h 2.171876 l 1.707031 1.707031 c 0.1875 0.1875 0.441406 0.292969 0.707031 0.292969 h 1.5 c 0.570312 0 1 0.429688 1 1 v 7 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -7 c 0 -0.570312 0.429688 -1 1 -1 h 1.5 c 0.265625 0 0.519531 -0.105469 0.707031 -0.292969 z m 0 0"/>
        <path d="m 8 4 c -2.199219 0 -4 1.800781 -4 4 s 1.800781 4 4 4 s 4 -1.800781 4 -4 s -1.800781 -4 -4 -4 z m 0 2 c 1.117188 0 2 0.882812 2 2 s -0.882812 2 -2 2 s -2 -0.882812 -2 -2 s 0.882812 -2 2 -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCameraPhotoSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraPhotoSymbolic;
