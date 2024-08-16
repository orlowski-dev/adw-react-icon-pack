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
        <path d="m 2.96875 0 v 4.03125 l 5.785156 5.78125 c 0.132813 -0.390625 0.214844 -0.824219 0.214844 -1.300781 c 0 -0.871094 -0.253906 -1.648438 -0.636719 -2.183594 c -0.382812 -0.539063 -0.859375 -0.816406 -1.363281 -0.816406 c -0.273438 0 -0.5 -0.222657 -0.5 -0.5 c 0 -0.277344 0.226562 -0.5 0.5 -0.5 c 0.882812 0 1.652344 0.503906 2.175781 1.234375 c 0.523438 0.730468 0.824219 1.703125 0.824219 2.765625 c 0 0.761719 -0.175781 1.457031 -0.472656 2.046875 l 1.472656 1.472656 v -0.019531 c 1.382812 0 2.5 -1.566407 2.5 -3.5 c 0 -1.933594 -1.117188 -3.5 -2.5 -3.5 v -5.011719 z m 0 6.15625 v 9.855469 h 4 v -4.449219 l 0.363281 -0.105469 c 0.207031 -0.058593 0.414063 -0.171875 0.605469 -0.335937 z m 5.585938 5.582031 c -0.183594 0.148438 -0.375 0.285157 -0.585938 0.386719 v 3.886719 h 3 v -1.855469 z m 0 0"/>
        <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNuditynonesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNuditynonesymbolic;
