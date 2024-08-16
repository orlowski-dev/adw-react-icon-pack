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
      <path d="m 12.277344 0.832031 c -0.578125 0.007813 -1.167969 0.230469 -1.691406 0.753907 l -9 9 c -0.375 0.375 -0.585938 0.882812 -0.585938 1.414062 v 3 h 3 c 0.53125 0 1.039062 -0.210938 1.414062 -0.585938 l 9 -9 c 1.789063 -1.789062 0.082032 -4.390624 -1.890624 -4.570312 c -0.082032 -0.011719 -0.164063 -0.011719 -0.246094 -0.011719 z m -1.777344 3.605469 l 1.0625 1.0625 l -7.0625 7.0625 l -1.0625 -1.0625 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwDocumenteditsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDocumenteditsymbolic;
