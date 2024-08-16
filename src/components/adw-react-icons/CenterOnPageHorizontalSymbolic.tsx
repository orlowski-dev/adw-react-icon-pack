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
        <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 10.003906 c 0 1.644532 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355468 3 -3 v -8.503906 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 l -3.5 -3.5 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 2 h 8 v 1.5 c 0 1 0.5 1.5 1.5 1.5 h 1.5 v 8.003906 c 0 0.574219 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.425781 -1 -1 v -10.003906 c 0 -0.570312 0.429688 -1 1 -1 z m 0 0"/>
        <path d="m 7 6 h 2 v -2 h -2 z m 0 0"/>
        <path d="m 7 9 h 2 v -2 h -2 z m 0 0"/>
        <path d="m 7 12 h 2 v -2 h -2 z m 0 0"/>
        <g fill-opacity="0.35">
            <path d="m 10 12 h 2 v -2 h -2 z m 0 0"/>
            <path d="m 4 12 h 2 v -2 h -2 z m 0 0"/>
        </g>
    </g>
    </svg>
  );
};

const AdwCenterOnPageHorizontalSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCenterOnPageHorizontalSymbolic;
