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
        <path d="m 1 0.996094 l 7.136719 10.847656 l 4.898437 -3.507812 z m 0 0"/>
        <path d="m 5.507812 5.328125 c -0.339843 0.058594 -0.625 0.285156 -0.753906 0.597656 l -3.617187 8.652344 c -0.175781 0.414063 -0.050781 0.890625 0.296875 1.167969 c 0.351562 0.28125 0.847656 0.292968 1.210937 0.027344 l 6.929688 -4.984376 c 0.230469 -0.164062 0.382812 -0.421874 0.410156 -0.703124 c 0.03125 -0.285157 -0.058594 -0.566407 -0.25 -0.78125 l -3.316406 -3.664063 c -0.230469 -0.25 -0.574219 -0.371094 -0.910157 -0.3125 z m 0.480469 2.820313 l 1.511719 1.667968 l -3.15625 2.269532 z m 0 0"/>
        <path d="m 6.042969 2.914062 l 9.957031 6.15625 l -0.039062 -5.066406 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSnapsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSnapsymbolic;
