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
      <path d="m 6.402344 0 c -0.347656 0 -0.652344 0.21875 -0.761719 0.546875 l -1.160156 3.472656 l -3.671875 -0.015625 c -0.7851565 -0.003906 -1.105469 1.003906 -0.464844 1.453125 l 2.902344 2.046875 l -1.199219 3.429688 c -0.257813 0.71875 0.550781 1.351562 1.191406 0.933594 l 3.199219 -2.074219 l 0.308594 0.207031 h 3.253906 v -1.214844 l -0.449219 -1.28125 l 0.582031 -0.414062 l 2.332032 -1.648438 c 0.632812 -0.449218 0.316406 -1.445312 -0.460938 -1.449218 l -3.722656 -0.015626 l -1.121094 -3.425781 c -0.109375 -0.328125 -0.414062 -0.54687475 -0.757812 -0.550781 z m 4.597656 8 v 3 h -3 v 2 h 3 v 3 h 2 v -3 h 3 v -2 h -3 v -3 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwStarnewsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStarnewsymbolic;
