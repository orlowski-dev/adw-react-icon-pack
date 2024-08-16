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
        <path d="m 1 9 c -0.550781 0 -1 0.449219 -1 1 v 6 h 6 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -2.585938 l 3.292969 -3.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 s -0.519531 0.105469 -0.707031 0.292969 l -3.292969 3.292969 v -2.585938 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 15 7 c 0.550781 0 1 -0.449219 1 -1 v -6 h -6 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 2.585938 l -3.292969 3.292969 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 c 0.1875 0.1875 0.441406 0.292969 0.707031 0.292969 s 0.519531 -0.105469 0.707031 -0.292969 l 3.292969 -3.292969 v 2.585938 c 0 0.550781 0.449219 1 1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwArrowspointingoutwardsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowspointingoutwardsymbolic;
