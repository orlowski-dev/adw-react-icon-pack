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
      <path d="m 1 10.042969 v 2.953125 h 6 v -3 z m 3 -4.007813 v 2.960938 h 7 v -2.960938 z m 4 3.960938 v 3 h 6 v -3 z m 4 -4 v 3 h 2 v -3 z m -11 -4 v 3 h 6 v -3 z m 0 4.039062 v 2.960938 h 2 v -2.960938 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBuildSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBuildSymbolic;
