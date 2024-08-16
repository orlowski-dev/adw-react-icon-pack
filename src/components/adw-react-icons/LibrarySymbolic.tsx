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
        <path d="m 1.5 2 h 2 c 0.277344 0 0.5 0.222656 0.5 0.5 v 12 c 0 0.277344 -0.222656 0.5 -0.5 0.5 h -2 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 v -12 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 5.5 4 h 1 c 0.277344 0 0.5 0.222656 0.5 0.5 v 10 c 0 0.277344 -0.222656 0.5 -0.5 0.5 h -1 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 v -10 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 8.5 3 h 1 c 0.277344 0 0.5 0.222656 0.5 0.5 v 11 c 0 0.277344 -0.222656 0.5 -0.5 0.5 h -1 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 v -11 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 10.707031 1.460938 l 0.964844 -0.261719 c 0.265625 -0.070313 0.539063 0.089843 0.613281 0.355469 l 3.363282 12.558593 c 0.070312 0.265625 -0.085938 0.539063 -0.351563 0.609375 l -0.96875 0.261719 c -0.265625 0.070313 -0.539063 -0.089844 -0.613281 -0.355469 l -3.363282 -12.554687 c -0.070312 -0.269531 0.085938 -0.542969 0.355469 -0.613281 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLibrarySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLibrarySymbolic;
