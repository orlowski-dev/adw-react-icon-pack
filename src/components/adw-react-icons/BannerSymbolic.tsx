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
        <path d="m 0 0.972656 v 2 h 0.0117188 v 4.035156 h 13.9921872 l 0.007813 9 h 2 l -0.011719 -11.988281 c 0 -1.644531 -1.355469 -3.046875 -3 -3.046875 z m 12.457031 2.027344 c 0.828125 0 1.5 0.675781 1.5 1.507812 c 0 0.832032 -0.671875 1.503907 -1.5 1.503907 s -1.5 -0.671875 -1.5 -1.503907 c 0 -0.832031 0.671875 -1.507812 1.5 -1.507812 z m 0 0"/>
        <path d="m 15 12 h -14.9882812 v -5.980469 h 14.9882812 z m 0 0" fill-opacity="0.35"/>
        <path d="m -0.0351562 12 v 1 h 15.0351562 v -1 z m 0 0"/>
        <path d="m 7 8 h 4 c 0.550781 0 1 0.449219 1 1 v 1 c 0 0.550781 -0.449219 1 -1 1 h -4 c -0.550781 0 -1 -0.449219 -1 -1 v -1 c 0 -0.550781 0.449219 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBannerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBannerSymbolic;
