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
      <path d="m 3.011719 1 c -1.652344 0 -3.011719 1.359375 -3.011719 3.011719 v 4.976562 c 0 1.652344 1.359375 3.011719 3.011719 3.011719 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 c -0.578125 0 -1.011719 -0.433594 -1.011719 -1.011719 v -4.976562 c 0 -0.578125 0.433594 -1.011719 1.011719 -1.011719 h 7.976562 c 0.578125 0 1.011719 0.433594 1.011719 1.011719 v 1.953125 c 0 0.554687 0.449219 1 1 1 s 1 -0.445313 1 -1 v -1.953125 c 0 -1.652344 -1.359375 -3.011719 -3.011719 -3.011719 z m 3.917969 7.011719 c -1.070313 0 -1.929688 0.863281 -1.929688 1.929687 v 3.140625 c 0 1.070313 0.859375 1.929688 1.929688 1.929688 h 4.140624 c 1.070313 0 1.929688 -0.859375 1.929688 -1.929688 v -0.578125 l 1.851562 1.378906 c 0.214844 0.160157 0.5 0.183594 0.738282 0.066407 c 0.242187 -0.121094 0.390625 -0.367188 0.390625 -0.636719 v -3.601562 c 0.003906 -0.269532 -0.148438 -0.515626 -0.390625 -0.636719 c -0.238282 -0.121094 -0.527344 -0.09375 -0.742188 0.066406 l -1.847656 1.371094 v -0.570313 c 0 -1.066406 -0.859375 -1.929687 -1.929688 -1.929687 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwScreencastrecordedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScreencastrecordedsymbolic;
