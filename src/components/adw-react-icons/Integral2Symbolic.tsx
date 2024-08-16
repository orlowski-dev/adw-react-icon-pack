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
        <path d="m 9.804688 2.992188 c -1.929688 0.386718 -3.171876 2.25 -2.785157 4.175781 l -0.019531 -0.195313 v 2.109375 l 0.019531 0.097657 c 0.167969 0.835937 -0.382812 1.65625 -1.214843 1.824218 c -0.351563 0.070313 -0.636719 0.320313 -0.753907 0.660156 c -0.113281 0.335938 -0.039062 0.710938 0.195313 0.980469 c 0.238281 0.269531 0.597656 0.390625 0.949218 0.320313 c 1.929688 -0.386719 3.171876 -2.25 2.785157 -4.175782 l 0.019531 0.195313 v -2.109375 l -0.019531 -0.097656 c -0.167969 -0.835938 0.382812 -1.65625 1.214843 -1.824219 c 0.351563 -0.070313 0.636719 -0.320313 0.753907 -0.660156 c 0.113281 -0.339844 0.039062 -0.710938 -0.195313 -0.980469 c -0.238281 -0.269531 -0.597656 -0.390625 -0.949218 -0.320312 z m 0 0"/>
        <path d="m 8 14 c -3.308594 0 -6 -2.691406 -6 -6 s 2.691406 -6 6 -6 s 6 2.691406 6 6 s -2.691406 6 -6 6 z m 0 -14 c -4.421875 0 -8 3.578125 -8 8 s 3.578125 8 8 8 s 8 -3.578125 8 -8 s -3.578125 -8 -8 -8 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwIntegral2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwIntegral2Symbolic;
