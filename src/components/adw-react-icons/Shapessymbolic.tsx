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
        <path d="m 5.191406 1.296875 c -0.390625 -0.390625 -1.023437 -0.390625 -1.414062 0 l -2.5 2.5 c -0.390625 0.390625 -0.390625 1.023437 0 1.414063 l 2.5 2.5 c 0.390625 0.390624 1.023437 0.390624 1.414062 0 l 2.496094 -2.5 c 0.390625 -0.390626 0.390625 -1.023438 0 -1.414063 z m 0 0"/>
        <path d="m 9.984375 12.003906 c 0 1.65625 -1.34375 3 -3 3 c -1.660156 0 -3 -1.34375 -3 -3 s 1.339844 -3 3 -3 c 1.65625 0 3 1.34375 3 3 z m 0 0"/>
        <path d="m 11.929688 2.007812 c -0.339844 0.015626 -0.644532 0.203126 -0.8125 0.496094 l -2.320313 4 c -0.386719 0.664063 0.09375 1.5 0.863281 1.5 h 4.644532 c 0.769531 0 1.25 -0.835937 0.863281 -1.5 l -2.320313 -4 c -0.1875 -0.328125 -0.542968 -0.519531 -0.917968 -0.496094 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwShapessymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwShapessymbolic;
