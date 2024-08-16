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
      <path d="m 13.683594 1.050781 c -1.691406 0.5625 -4.636719 2.054688 -7.273438 3.4375 c -2.636718 1.382813 -4.898437 2.636719 -4.898437 2.636719 c -0.898438 0.503906 -0.542969 1.875 0.488281 1.875 h 5 v 5 c 0.003906 1.03125 1.371094 1.386719 1.875 0.488281 c 0 0 1.253906 -2.261719 2.636719 -4.898437 c 1.382812 -2.636719 2.875 -5.582032 3.4375 -7.273438 c 0.261719 -0.78125 -0.484375 -1.527344 -1.265625 -1.265625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNavigatesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNavigatesymbolic;
