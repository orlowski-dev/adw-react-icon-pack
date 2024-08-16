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
      <path d="m 3 1 c -0.410156 0 -0.777344 0.25 -0.929688 0.628906 l -1.9999995 5 c -0.046875 0.117188 -0.0703125 0.242188 -0.0703125 0.371094 v 7 h 2 v -3 h 4.003906 l 0.003906 3 h 2 l -0.007812 -7 c 0 -0.128906 -0.027344 -0.253906 -0.074219 -0.371094 l -2 -5 c -0.152343 -0.378906 -0.519531 -0.628906 -0.925781 -0.628906 z m 0.675781 2 h 0.644531 l 1.679688 4.191406 v 1.808594 h -4 v -1.808594 z m 6.324219 1 v 2 h 3 c 0.429688 0 1 0.5 1 1 v 1 h -2 c -0.917969 0 -1.734375 0.378906 -2.25 0.964844 c -0.515625 0.585937 -0.742188 1.324218 -0.738281 2.042968 c 0.007812 0.722657 0.246093 1.449219 0.757812 2.027344 c 0.515625 0.582032 1.320313 0.964844 2.230469 0.964844 h 4 v -7 c 0 -1.632812 -1.320312 -3 -3 -3 z m 2 6 h 2 v 2 h -2 c -0.398438 0 -0.578125 -0.117188 -0.730469 -0.289062 c -0.152343 -0.167969 -0.253906 -0.441407 -0.257812 -0.722657 c 0 -0.277343 0.09375 -0.539062 0.242187 -0.703125 c 0.144532 -0.164062 0.324219 -0.285156 0.746094 -0.285156 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwUppercaseSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwUppercaseSymbolic;
