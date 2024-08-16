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
      <path d="m 1 2 v 6 l 6.691406 6.691406 c 0.1875 0.1875 0.414063 0.203125 0.597656 0.019532 l 6.382813 -6.382813 c 0.222656 -0.222656 0.207031 -0.449219 0.019531 -0.636719 l -6.691406 -6.691406 h -6 c -0.464844 0 -1 0.492188 -1 1 z m 3 0.960938 c 0.589844 0 1.070312 0.480468 1.070312 1.070312 s -0.480468 1.070312 -1.070312 1.070312 s -1.070312 -0.480468 -1.070312 -1.070312 s 0.480468 -1.070312 1.070312 -1.070312 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwTagSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTagSymbolic;
