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
      <path d="m 5 2 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 l -4 4 c -0.3906252 0.390625 -0.3906252 1.023437 0 1.414062 l 4 4 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -2.292969 -2.292969 h 8.585938 c 1.117188 0 2 0.882812 2 2 v 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -3 c 0 -0.023438 0 -0.046875 -0.003906 -0.070312 c -0.035156 -2.164063 -1.820313 -3.929688 -3.996094 -3.929688 h -8.585938 l 2.292969 -2.292969 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwMailforwardsymbolicrtl = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailforwardsymbolicrtl;
