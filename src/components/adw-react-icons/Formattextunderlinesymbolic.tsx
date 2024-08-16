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
      <path d="m 4 2 v 2 h 6 c 0.429688 0 1 0.613281 1 1 v 1 h -5 c -0.917969 0 -1.734375 0.378906 -2.25 0.964844 c -0.515625 0.585937 -0.742188 1.324218 -0.738281 2.046875 c 0.007812 0.71875 0.246093 1.445312 0.757812 2.027343 c 0.515625 0.578126 1.320313 0.960938 2.230469 0.960938 h 7 v -7 c 0 -1.632812 -1.320312 -3 -3 -3 z m 2 6 h 5 v 2 h -5 c -0.398438 0 -0.578125 -0.117188 -0.730469 -0.289062 c -0.152343 -0.167969 -0.253906 -0.441407 -0.257812 -0.722657 c 0 -0.277343 0.09375 -0.539062 0.238281 -0.703125 c 0.148438 -0.164062 0.328125 -0.285156 0.75 -0.285156 z m -4 5 v 2 h 12 v -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFormattextunderlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFormattextunderlinesymbolic;
