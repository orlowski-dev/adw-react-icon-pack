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
      <path class="warning" d="m 8 0 c -0.257812 0 -0.511719 0.0976562 -0.707031 0.292969 l -1.707031 1.707031 h -2.585938 c -0.550781 0 -1 0.449219 -1 1 v 2.585938 l -1.707031 1.707031 c -0.3906252 0.390625 -0.3906252 1.023437 0 1.414062 l 1.707031 1.707031 v 2.585938 c 0 0.550781 0.449219 1 1 1 h 2.585938 l 1.707031 1.707031 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 1.707031 -1.707031 h 2.585938 c 0.550781 0 1 -0.449219 1 -1 v -2.585938 l 1.707031 -1.707031 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -1.707031 -1.707031 v -2.585938 c 0 -0.550781 -0.449219 -1 -1 -1 h -2.585938 l -1.707031 -1.707031 c -0.195312 -0.1953128 -0.449219 -0.292969 -0.707031 -0.292969 z m -1 4 h 2 v 5 h -2 z m 1 5.75 c 0.6875 0 1.25 0.5625 1.25 1.25 s -0.5625 1.25 -1.25 1.25 s -1.25 -0.5625 -1.25 -1.25 s 0.5625 -1.25 1.25 -1.25 z m 0 0" fill="#ff7800"/>
    </svg>
  );
};

const AdwSoftwareupdateurgentsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSoftwareupdateurgentsymbolic;
