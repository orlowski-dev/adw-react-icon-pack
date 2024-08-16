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
      <path d="m 7.925781 0.0703125 c -0.253906 0 -0.511719 0.1015625 -0.707031 0.2929685 l -7 7 c -0.386719 0.390625 -0.386719 1.027344 0 1.414063 l 7 7 c 0.390625 0.390625 1.027344 0.390625 1.417969 0 l 7 -7 c 0.386719 -0.386719 0.386719 -1.023438 0 -1.414063 l -7 -7 c -0.195313 -0.191406 -0.453125 -0.2929685 -0.710938 -0.2929685 z m 0 0.9999995 l 7 7 l -7 7 l -7 -7 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDiamondOutlineThinSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDiamondOutlineThinSymbolic;
