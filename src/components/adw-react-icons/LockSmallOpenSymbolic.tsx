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
        <path d="m 4 3.023438 c 1.644531 0 2.992188 1.367187 2.992188 3.015624 v 1.460938 h -2 v -1.460938 c 0 -0.585937 -0.429688 -1.015624 -0.992188 -1.015624 c -0.566406 0 -1 0.429687 -1 1.015624 c 0 0.539063 -0.386719 0.960938 -1.003906 0.960938 c -0.566406 0 -0.996094 -0.390625 -0.996094 -0.960938 c 0 -1.648437 1.351562 -3.015624 3 -3.015624 z m 0 0"/>
        <path d="m 11 7.007812 c 0.554688 0.015626 1 0.464844 1 1.023438 v 2.96875 c 0 0.523438 -0.476562 1 -1 1 h -6 c -0.503906 0 -1 -0.457031 -1 -1 v -2.96875 c 0 -0.558594 0.445312 -1.007812 1 -1.023438 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLockSmallOpenSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLockSmallOpenSymbolic;
