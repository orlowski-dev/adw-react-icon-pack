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
      <path d="m 8 3 c -0.519531 0 -1.035156 0.132812 -1.5 0.402344 c -0.925781 0.535156 -1.5 1.523437 -1.5 2.59375 v 1.011718 c -0.554688 0.015626 -1 0.464844 -1 1.023438 v 2.96875 c 0 0.523438 0.503906 1 1 1 h 6 c 0.515625 0 1 -0.460938 1 -1 v -2.96875 c 0 -0.558594 -0.445312 -1.007812 -1 -1.023438 v -1.011718 c 0 -1.070313 -0.574219 -2.058594 -1.5 -2.59375 c -0.464844 -0.269532 -0.980469 -0.402344 -1.5 -0.402344 z m 0 1.644531 c 0.253906 0 0.503906 0.0625 0.730469 0.191407 c 0.453125 0.261718 0.730469 0.746093 0.730469 1.269531 v 0.894531 h -2.921876 v -0.902344 c 0 -0.519531 0.277344 -1 0.730469 -1.261718 c 0.226563 -0.128907 0.476563 -0.191407 0.730469 -0.191407 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwLockSmallSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLockSmallSymbolic;
