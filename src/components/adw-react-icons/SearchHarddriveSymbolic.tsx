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
        <path d="m 4 0 c -1.644531 0 -3 1.355469 -3 3 v 9 c 0 1.644531 1.355469 3 3 3 h 4.6875 c -0.925781 -0.742188 -1.519531 -1.820312 -1.652344 -3 h -3.035156 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 7 c 0.570312 0 1 0.429688 1 1 v 4.03125 c 0.714844 0.078125 1.402344 0.328125 2 0.726562 v -4.757812 c 0 -1.644531 -1.355469 -3 -3 -3 z m 3.5 3 c -1.933594 0 -3.5 1.566406 -3.5 3.5 v 3.5 h 3.269531 c 0.570313 -1.609375 2 -2.757812 3.695313 -2.960938 c 0.023437 -0.175781 0.035156 -0.355468 0.035156 -0.539062 c 0 -1.933594 -1.566406 -3.5 -3.5 -3.5 z m 0 1.75 c 0.964844 0 1.75 0.785156 1.75 1.75 s -0.785156 1.75 -1.75 1.75 s -1.75 -0.785156 -1.75 -1.75 s 0.785156 -1.75 1.75 -1.75 z m 0 0"/>
        <path d="m 11.5 8 c -1.921875 0 -3.5 1.578125 -3.5 3.5 s 1.578125 3.5 3.5 3.5 c 0.601562 0 1.164062 -0.15625 1.660156 -0.425781 h 0.003906 l 1.128907 1.132812 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -1.132812 -1.128907 c 0 -0.003906 0 -0.003906 0 -0.003906 c 0.269531 -0.496094 0.425781 -1.058594 0.425781 -1.660156 c 0 -1.921875 -1.578125 -3.5 -3.5 -3.5 z m 0 2 c 0.839844 0 1.5 0.660156 1.5 1.5 c 0 0.40625 -0.15625 0.769531 -0.40625 1.035156 c -0.011719 0.007813 -0.023438 0.015625 -0.03125 0.027344 c -0.011719 0.007812 -0.019531 0.019531 -0.027344 0.03125 c -0.265625 0.25 -0.628906 0.40625 -1.035156 0.40625 c -0.839844 0 -1.5 -0.660156 -1.5 -1.5 s 0.660156 -1.5 1.5 -1.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSearchHarddriveSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSearchHarddriveSymbolic;
