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
      <path d="m 7.957031 0 c -0.128906 0.0078125 -0.253906 0.0390625 -0.371093 0.0898438 c -0.355469 0.1640622 -0.585938 0.5195312 -0.585938 0.9101562 v 4.9375 l -5.46875 -5.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -2.605469 -2.605469 c 0.15625 -0.390625 0.046875 -0.835937 -0.269531 -1.113281 l -3.136719 -2.75 l 3.136719 -2.75 c 0.21875 -0.1875 0.34375 -0.460938 0.34375 -0.75 s -0.125 -0.5625 -0.34375 -0.75 l -4 -3.5 c -0.191406 -0.171875 -0.445312 -0.2578125 -0.699219 -0.25 z m 1.042969 3.203125 l 1.480469 1.296875 l -1.480469 1.296875 z m -3.609375 5.25 l -2.046875 1.796875 c -0.417969 0.363281 -0.457031 0.992188 -0.09375 1.40625 c 0.363281 0.417969 0.992188 0.457031 1.40625 0.09375 l 2.152344 -1.878906 z m 1.609375 1.609375 v 4.9375 c 0 0.390625 0.230469 0.746094 0.585938 0.910156 c 0.359374 0.160156 0.777343 0.101563 1.070312 -0.160156 l 2.152344 -1.878906 l -1.414063 -1.414063 l -0.394531 0.339844 v -0.734375 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwBluetoothdisabledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBluetoothdisabledsymbolic;
