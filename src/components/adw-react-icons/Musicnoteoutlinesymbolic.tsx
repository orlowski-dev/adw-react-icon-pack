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
      <path d="m 8 1 c -1.644531 0 -3 1.355469 -3 3 v 4.34375 c -0.457031 -0.21875 -0.964844 -0.34375 -1.5 -0.34375 c -1.921875 0 -3.5 1.582031 -3.5 3.5 c 0 1.921875 1.578125 3.5 3.5 3.5 c 1.914062 0 3.492188 -1.566406 3.5 -3.480469 c 0 -0.007812 0 -0.011719 0 -0.019531 v -7.5 c 0 -0.5625 0.4375 -1 1 -1 h 4 c 0.5625 0 1 0.4375 1 1 v 4.34375 c -0.457031 -0.21875 -0.964844 -0.34375 -1.5 -0.34375 c -1.921875 0 -3.5 1.582031 -3.5 3.5 c 0 1.921875 1.578125 3.5 3.5 3.5 s 3.5 -1.578125 3.5 -3.5 v -7.5 c 0 -1.644531 -1.355469 -3 -3 -3 z m -4.5 9 c 0.839844 0 1.5 0.660156 1.5 1.5 v 0.015625 c -0.007812 0.835937 -0.664062 1.484375 -1.5 1.484375 c -0.839844 0 -1.5 -0.65625 -1.5 -1.5 c 0 -0.839844 0.660156 -1.5 1.5 -1.5 z m 8 0 c 0.839844 0 1.5 0.660156 1.5 1.5 c 0 0.84375 -0.660156 1.5 -1.5 1.5 s -1.5 -0.65625 -1.5 -1.5 c 0 -0.839844 0.660156 -1.5 1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMusicnoteoutlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMusicnoteoutlinesymbolic;
