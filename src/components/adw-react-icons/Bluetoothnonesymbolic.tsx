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
      <path d="m 7.984375 0 c -0.125 0.0078125 -0.253906 0.0351562 -0.367187 0.0898438 c -0.359376 0.1601562 -0.585938 0.5156252 -0.585938 0.9101562 v 4.9375 l -5.46875 -5.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -2.605469 -2.605469 c 0.15625 -0.390625 0.046875 -0.839843 -0.269531 -1.117187 l -3.140625 -2.746094 l 3.140625 -2.75 c 0.21875 -0.1875 0.339844 -0.464844 0.339844 -0.75 c 0 -0.289062 -0.121094 -0.5625 -0.339844 -0.753906 l -4 -3.5 c -0.191406 -0.167969 -0.445312 -0.2578128 -0.703125 -0.246094 z m 1.046875 3.203125 l 1.480469 1.296875 l -1.480469 1.296875 z m -3.609375 5.25 l -2.050781 1.792969 c -0.414063 0.363281 -0.457032 0.996094 -0.09375 1.410156 c 0.363281 0.414062 0.996094 0.457031 1.410156 0.09375 l 2.152344 -1.878906 z m 1.609375 1.609375 v 4.9375 c 0 0.390625 0.230469 0.746094 0.585938 0.910156 c 0.355468 0.160156 0.777343 0.097656 1.070312 -0.160156 l 2.152344 -1.878906 l -1.417969 -1.417969 l -0.390625 0.34375 v -0.734375 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwBluetoothnonesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBluetoothnonesymbolic;
