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
      <path d="m 11.898438 4.023438 c -0.265626 0.023437 -0.507813 0.152343 -0.679688 0.355468 l -4.296875 5.160156 l -1.226563 -1.226562 c -0.390624 -0.390625 -1.023437 -0.390625 -1.414062 0 s -0.390625 1.023438 0 1.414062 l 2 2 c 0.199219 0.199219 0.46875 0.304688 0.75 0.289063 c 0.28125 -0.011719 0.542969 -0.140625 0.722656 -0.355469 l 5 -6 c 0.355469 -0.425781 0.296875 -1.054687 -0.125 -1.410156 c -0.203125 -0.167969 -0.46875 -0.25 -0.730468 -0.226562 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSuccesssmallsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSuccesssmallsymbolic;
