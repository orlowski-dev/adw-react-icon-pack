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
      <path d="m 2.96875 0 v 16.011719 h 4 v -4.449219 l 0.363281 -0.105469 c 0.839844 -0.234375 1.636719 -1.421875 1.636719 -2.945312 c 0 -0.871094 -0.253906 -1.648438 -0.636719 -2.183594 c -0.382812 -0.539063 -0.859375 -0.816406 -1.363281 -0.816406 c -0.273438 0 -0.5 -0.222657 -0.5 -0.5 c 0 -0.277344 0.226562 -0.5 0.5 -0.5 c 0.882812 0 1.652344 0.503906 2.175781 1.234375 c 0.523438 0.730468 0.824219 1.703125 0.824219 2.765625 c 0 1.667969 -0.808594 3.023437 -2 3.613281 v 3.886719 h 3 v -4 c 1.382812 0 2.5 -1.566407 2.5 -3.5 c 0 -1.933594 -1.117188 -3.5 -2.5 -3.5 v -5.011719 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNuditysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNuditysymbolic;
