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
      <path d="m 6 1 c -2.761719 0 -5 2.238281 -5 5 s 2.238281 5 5 5 c 0.832031 -0.003906 1.652344 -0.214844 2.382812 -0.617188 l 0.617188 0.617188 v 2 h 2 v 2 h 4 v -3 l -4.308594 -4.308594 c 0.199219 -0.542968 0.304688 -1.113281 0.308594 -1.691406 c 0 -2.761719 -2.238281 -5 -5 -5 z m -1 3 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwDialogpasswordsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDialogpasswordsymbolic;
