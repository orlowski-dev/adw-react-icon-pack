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
      <path d="m 3.496094 4.007812 c -1.933594 0 -3.50000025 1.566407 -3.50000025 3.5 c 0 1.933594 1.56640625 3.5 3.50000025 3.5 c 1.351562 0 2.578125 -0.777343 3.160156 -2 h 2.683594 c 0.578125 1.222657 1.804687 2 3.15625 2 c 1.933594 0 3.5 -1.566406 3.5 -3.5 c 0 -1.933593 -1.566406 -3.5 -3.5 -3.5 c -0.136719 0.003907 -0.269532 0.011719 -0.402344 0.027344 c -0.046875 -0.011718 -0.089844 -0.027344 -0.140625 -0.027344 h -7.914063 c -0.046874 0 -0.089843 0.015626 -0.132812 0.027344 c -0.136719 -0.015625 -0.273438 -0.027344 -0.410156 -0.027344 z m 7.5 1 c 0.550781 0 1 0.449219 1 1 c 0 0.554688 -0.449219 1 -1 1 c -0.550782 0 -1 -0.445312 -1 -1 c 0 -0.550781 0.449218 -1 1 -1 z m -7.867188 1 h 0.734375 c 0.074219 0 0.132813 0.058594 0.132813 0.132813 v 0.867187 h 0.867187 c 0.074219 0 0.132813 0.058594 0.132813 0.132813 v 0.734375 c 0 0.074219 -0.058594 0.132812 -0.132813 0.132812 h -0.867187 v 0.867188 c 0 0.074219 -0.058594 0.132812 -0.132813 0.132812 h -0.734375 c -0.074218 0 -0.132812 -0.058593 -0.132812 -0.132812 v -0.867188 h -0.867188 c -0.074218 0 -0.132812 -0.058593 -0.132812 -0.132812 v -0.734375 c 0 -0.074219 0.058594 -0.132813 0.132812 -0.132813 h 0.867188 v -0.867187 c 0 -0.074219 0.058594 -0.132813 0.132812 -0.132813 z m 9.867188 1 c 0.550781 0 1 0.449219 1 1 c 0 0.554688 -0.449219 1 -1 1 c -0.550782 0 -1 -0.445312 -1 -1 c 0 -0.550781 0.449218 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNintendocontrollersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNintendocontrollersymbolic;
