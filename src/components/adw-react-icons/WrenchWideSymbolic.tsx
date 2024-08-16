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
        <path d="m 11.5 0 c -2.484375 0 -4.5 2.015625 -4.5 4.5 s 2.015625 4.5 4.5 4.5 s 4.5 -2.015625 4.5 -4.5 c 0 -0.574219 -0.109375 -1.144531 -0.324219 -1.675781 l -2.175781 2.175781 h -2.5 v -2.5 l 2.175781 -2.175781 c -0.53125 -0.214844 -1.101562 -0.324219 -1.675781 -0.324219 z m 0 0"/>
        <path d="m 7.730469 4.734375 l -7 7 c -0.46875 0.46875 -0.730469 1.101563 -0.730469 1.765625 s 0.261719 1.300781 0.730469 1.769531 c 0.976562 0.972657 2.5625 0.972657 3.539062 0 l 7 -7 z m -5.230469 7.765625 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwWrenchWideSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWrenchWideSymbolic;
