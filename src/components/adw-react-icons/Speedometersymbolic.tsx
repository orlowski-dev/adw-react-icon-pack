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
        <path d="m 16 9.988281 c 0 -2.855469 -1.515625 -5.539062 -4 -6.972656 c -2.472656 -1.425781 -5.527344 -1.425781 -8 0 c -2.484375 1.433594 -4 4.117187 -4 6.972656 c 0 0.554688 0.449219 1 1 1 h 1 c 0.550781 0 1 -0.445312 1 -1 c -0.03125 -0.429687 -0.335938 -0.796875 -0.761719 -0.898437 c 0.285157 -1.78125 1.1875 -3.429688 2.761719 -4.339844 c 1.859375 -1.074219 4.140625 -1.074219 6 0 c 1.574219 0.910156 2.476562 2.558594 2.761719 4.339844 c -0.425781 0.101562 -0.730469 0.46875 -0.761719 0.898437 c 0 0.554688 0.449219 1 1 1 h 1 c 0.550781 0 1 -0.445312 1 -1 z m 0 0"/>
        <path d="m 11 5.683594 l -4.480469 4.976562 c -0.007812 0.007813 -0.015625 0.015625 -0.023437 0.023438 c -0.125 0.140625 -0.226563 0.296875 -0.308594 0.464844 c -0.472656 0.996093 -0.046875 2.191406 0.949219 2.664062 c 0.996093 0.472656 2.191406 0.050781 2.664062 -0.949219 c 0.070313 -0.144531 0.121094 -0.300781 0.152344 -0.460937 h 0.003906 l 0.007813 -0.054688 l 0.007812 -0.042968 c 0.003906 -0.011719 0.003906 -0.023438 0.003906 -0.035157 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSpeedometersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSpeedometersymbolic;
