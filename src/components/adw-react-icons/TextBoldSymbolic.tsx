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
      <path d="m 4 3 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 5.03125 c 0.558594 0 0.980469 0.429688 0.976562 0.988281 l -0.015624 1.011719 h -2.945313 c -0.070313 -0.003906 -0.136719 -0.003906 -0.207031 0 h -1.753906 c -1.644532 -0.058594 -3.046876 1.246094 -3.105469 2.894531 v 0.035157 c 0.003906 1.683593 1.390625 3.070312 3.074219 3.070312 h 5.875 c 1.683593 0 3.070312 -1.390625 3.070312 -3.074219 l -0.003906 -3.929687 c 0 -1.640625 -1.359375 -2.996094 -3.003906 -2.996094 z m 2.976562 6 h 2.988282 l -0.007813 0.914062 c -0.011719 0.613282 -0.488281 1.085938 -1.101562 1.085938 h -1.839844 c -0.597656 0 -1.054687 -0.460938 -1.066406 -1.054688 c 0.03125 -0.550781 0.46875 -0.964843 1.027343 -0.945312 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwTextBoldSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTextBoldSymbolic;
