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
      <path d="m 8 0 c -0.414062 0 -0.75 0.335938 -0.75 0.75 v 2.25 c 0 0.414062 0.335938 0.75 0.75 0.75 s 0.75 -0.335938 0.75 -0.75 v -1.375 c 2.613281 0.3125 4.835938 2.101562 5.53125 4.695312 c 0.761719 2.84375 -0.480469 5.835938 -3.03125 7.3125 c -2.550781 1.472657 -5.765625 1.046876 -7.847656 -1.035156 c -2.082032 -2.082031 -2.507813 -5.296875 -1.035156 -7.847656 c 0.207031 -0.359375 0.085937 -0.816406 -0.273438 -1.023438 c -0.171875 -0.101562 -0.375 -0.128906 -0.566406 -0.074218 c -0.191406 0.050781 -0.355469 0.175781 -0.457032 0.347656 c -1.808593 3.132812 -1.285156 7.101562 1.273438 9.65625 c 2.554688 2.558594 6.523438 3.082031 9.65625 1.273438 c 3.132812 -1.808594 4.664062 -5.503907 3.726562 -9 c -0.9375 -3.496094 -4.109374 -5.929688 -7.726562 -5.929688 z m -3.589844 4 c -0.300781 -0.003906 -0.539062 0.339844 -0.335937 0.625 c 0.679687 1.054688 1.863281 2.964844 2.882812 4.054688 c 0.484375 0.445312 1.257813 0.421874 1.714844 -0.050782 c 0.457031 -0.46875 0.433594 -1.226562 -0.050781 -1.671875 c -1.335938 -1.027343 -3.085938 -2.402343 -4 -2.894531 c -0.066406 -0.042969 -0.140625 -0.0625 -0.210938 -0.0625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCameratimersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameratimersymbolic;
