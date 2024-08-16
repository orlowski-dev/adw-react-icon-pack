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
      <path d="m 8 0 c -4.40625 0 -8 3.59375 -8 8 s 3.59375 8 8 8 s 8 -3.59375 8 -8 s -3.59375 -8 -8 -8 z m 0 2 c 3.320312 0 6 2.679688 6 6 s -2.679688 6 -6 6 s -6 -2.679688 -6 -6 s 2.679688 -6 6 -6 z m -0.007812 3 c -1.652344 0 -3 1.34375 -3 3 s 1.347656 3 3 3 c 1.65625 0 3 -1.34375 3 -3 s -1.34375 -3 -3 -3 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwRadiocheckedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRadiocheckedsymbolic;
