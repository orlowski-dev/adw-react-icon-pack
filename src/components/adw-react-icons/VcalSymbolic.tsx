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
      <path d="m 4.523438 1 c -0.265626 0.011719 -0.476563 0.230469 -0.476563 0.5 v 0.457031 h -1 c -1.132813 0 -2.042969 0.910157 -2.042969 2.042969 v 7.957031 c 0 1.128907 0.910156 2.042969 2.042969 2.042969 h 9.910156 c 1.132813 0 2.046875 -0.914062 2.046875 -2.042969 v -7.957031 c 0 -1.132812 -0.914062 -2.042969 -2.046875 -2.042969 h -0.910156 v -0.457031 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 s -0.5 0.222656 -0.5 0.5 v 0.457031 h -6 v -0.457031 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 c -0.007813 0 -0.015625 0 -0.023437 0 z m -1.519532 3 h 10 v 8 h -10 z m 1 1 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m -6 3 v 2 h 2 v -2 z m 3 0 v 2 h 2 v -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwVcalSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwVcalSymbolic;
