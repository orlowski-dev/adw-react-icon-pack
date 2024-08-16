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
      <path d="m 3.035156 1 c -0.460937 0 -0.859375 0.3125 -0.972656 0.757812 l -1 4 c -0.019531 0.078126 -0.027344 0.160157 -0.027344 0.242188 v 0.039062 c -0.566406 0.09375 -0.9999998 0.5625 -0.9999998 1.15625 v 4.613282 c 0 0.589844 0.4335938 1.058594 0.9999998 1.152344 v 1.539062 c 0 0.277344 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -1.5 h 8 v 1.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -1.539062 c 0.5625 -0.09375 1 -0.5625 1 -1.15625 v -4.609376 c 0 -0.59375 -0.4375 -1.0625 -1 -1.15625 v -0.039062 c 0 -0.082031 -0.011718 -0.164062 -0.03125 -0.242188 l -1 -4 c -0.109375 -0.445312 -0.511718 -0.757812 -0.96875 -0.757812 z m 0.78125 2 h 8.4375 l 0.75 3 h -9.9375 z m -0.28125 5 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m 9 0 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwEmojitravelsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmojitravelsymbolic;
