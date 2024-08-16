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
      <path d="m 5 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 0.140625 l 0.515625 3.59375 c -1.632812 0.867188 -2.652344 2.558594 -2.65625 4.40625 h 10 c -0.003906 -1.847656 -1.023438 -3.539062 -2.65625 -4.40625 l 0.511719 -3.59375 h 0.144531 c 0.550781 0 1 -0.449219 1 -1 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 s -0.441406 -0.292969 -0.707031 -0.292969 z m 2 11 v 4 l 1 1 l 1 -1 v -4 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwViewpinsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViewpinsymbolic;
