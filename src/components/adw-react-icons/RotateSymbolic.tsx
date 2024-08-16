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
      <path d="m 3 0 v 5 c 0.984375 -0.003906 2.113281 0.019531 3 0 h 2 l -1.8125 -1.8125 v -0.03125 c 0.371094 -0.730469 1.253906 -1.28125 2.375 -1.28125 c 1.722656 0 2.59375 1.351562 2.59375 3.136719 l 0.90625 0.015625 c 0.550781 0.007812 1.027344 -0.546875 0.9375 -1.089844 c 0 -2.253906 -2.0625 -3.9375 -4.4375 -3.9375 c -1.539062 0 -2.949219 0.699219 -3.75 1.8125 z m 3.46875 7 c -0.261719 0 -0.46875 0.230469 -0.46875 0.511719 v 0.976562 c 0 0.28125 0.207031 0.511719 0.46875 0.511719 h 3.0625 c 0.261719 0 0.46875 -0.230469 0.46875 -0.511719 v -0.976562 c 0 -0.28125 -0.207031 -0.511719 -0.46875 -0.511719 z m -2.519531 4 c -0.550781 -0.007812 -1.027344 0.546875 -0.9375 1.085938 c 0 2.257812 2.0625 3.9375 4.4375 3.9375 c 1.539062 0 2.949219 -0.695313 3.75 -1.8125 l 1.8125 1.8125 v -5 c -0.988281 0.007812 -2.117188 -0.015626 -3 0 h -2 l 1.8125 1.8125 v 0.03125 c -0.371094 0.730468 -1.257813 1.28125 -2.375 1.28125 c -1.726563 0 -2.59375 -1.351563 -2.59375 -3.136719 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRotateSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRotateSymbolic;
