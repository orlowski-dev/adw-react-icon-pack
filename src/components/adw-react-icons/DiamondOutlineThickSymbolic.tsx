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
      <path d="m 8.636719 0.367188 c -0.390625 -0.3906255 -1.027344 -0.3906255 -1.417969 0 l -6.996094 6.996093 c -0.390625 0.390625 -0.390625 1.023438 0 1.414063 l 6.996094 7 c 0.390625 0.390625 1.027344 0.390625 1.417969 0 l 6.996093 -7 c 0.390626 -0.390625 0.390626 -1.023438 0 -1.414063 z m -0.710938 2.121093 l 5.585938 5.582031 l -5.585938 5.585938 l -5.582031 -5.585938 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDiamondOutlineThickSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDiamondOutlineThickSymbolic;
