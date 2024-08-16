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
        <path d="m 5 1.761719 c -0.214844 0 -0.429688 0.082031 -0.570312 0.25 c -0.25 0.289062 -2.429688 2.898437 -2.429688 4.988281 c 0 0.773438 0.265625 1.5 0.75 2.042969 c 0.390625 0.4375 1.09375 0.957031 2.25 0.957031 c 1.96875 0 3 -1.507812 3 -3 c 0 -2.09375 -2.183594 -4.699219 -2.429688 -4.988281 c -0.144531 -0.167969 -0.355468 -0.25 -0.570312 -0.25 z m 0 0"/>
        <path d="m 11 5.761719 c -0.214844 0 -0.429688 0.082031 -0.570312 0.25 c -0.25 0.289062 -2.429688 2.898437 -2.429688 4.988281 c 0 0.773438 0.265625 1.5 0.75 2.042969 c 0.386719 0.4375 1.09375 0.957031 2.25 0.957031 c 1.96875 0 3 -1.507812 3 -3 c 0 -2.09375 -2.183594 -4.699219 -2.433594 -4.988281 c -0.140625 -0.167969 -0.355468 -0.25 -0.566406 -0.25 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwRainsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRainsymbolic;
