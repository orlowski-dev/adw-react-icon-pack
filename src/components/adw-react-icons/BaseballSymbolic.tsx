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
      <path d="m 8 0 c -4.40625 0 -8 3.59375 -8 8 s 3.59375 8 8 8 s 8 -3.59375 8 -8 s -3.59375 -8 -8 -8 z m 0.46875 2.019531 c 2.953125 0.226563 5.289062 2.566407 5.511719 5.519531 c -2.074219 0.15625 -3.644531 0.804688 -4.71875 1.941407 c -1.054688 1.113281 -1.585938 2.648437 -1.722657 4.5 c -2.953124 -0.222657 -5.292968 -2.558594 -5.519531 -5.511719 c 2.058594 -0.125 3.625 -0.65625 4.710938 -1.738281 c 1.082031 -1.085938 1.613281 -2.652344 1.738281 -4.710938 z m -1 0.007813 c -0.125 1.863281 -0.601562 3.148437 -1.449219 3.996094 c -0.84375 0.84375 -2.128906 1.320312 -3.996093 1.445312 c 0.253906 -2.898438 2.546874 -5.191406 5.445312 -5.441406 z m 6.507812 6.515625 c -0.257812 2.890625 -2.542968 5.175781 -5.433593 5.433593 c 0.132812 -1.652343 0.605469 -2.921874 1.445312 -3.808593 c 0.855469 -0.910157 2.136719 -1.476563 3.988281 -1.625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBaseballSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBaseballSymbolic;
