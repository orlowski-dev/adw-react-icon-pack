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
      <path d="m 4 0.046875 c -1.105469 0 -2 0.894531 -2 2 c 0 1.101563 0.894531 2 2 2 s 2 -0.898437 2 -2 c 0 -1.105469 -0.894531 -2 -2 -2 z m 9 0 c -1.105469 0 -2 0.894531 -2 2 c 0 1.101563 0.894531 2 2 2 s 2 -0.898437 2 -2 c 0 -1.105469 -0.894531 -2 -2 -2 z m -5 0.953125 v 14 h 1 v -14 z m -5.960938 4 c -0.574218 0 -1.039062 0.464844 -1.039062 1.039062 v 4.421876 c 0 0.5625 0.441406 1.015624 1 1.039062 v 2.507812 c 0 0.550782 0.441406 0.992188 0.992188 0.992188 h 2.015624 c 0.550782 0 0.992188 -0.441406 0.992188 -0.992188 v -2.507812 c 0.558594 -0.023438 1 -0.476562 1 -1.039062 v -4.421876 c 0 -0.574218 -0.464844 -1.039062 -1.039062 -1.039062 z m 9.96875 0 c -0.574218 0 -0.945312 0.46875 -1.039062 1.039062 l -0.96875 5.976563 c -0.09375 0.566406 0.464844 1.035156 1.039062 1.035156 h 0.960938 v 1.4375 c 0 0.285157 0.226562 0.511719 0.511719 0.511719 h 0.976562 c 0.285157 0 0.511719 -0.226562 0.511719 -0.511719 v -1.4375 h 0.960938 c 0.574218 0 1.132812 -0.46875 1.039062 -1.035156 l -0.96875 -5.976563 c -0.09375 -0.570312 -0.464844 -1.039062 -1.039062 -1.039062 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwToiletsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwToiletsSymbolic;
