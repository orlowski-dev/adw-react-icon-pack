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
        <path d="m 6 0 v 3.886719 c 0.273438 -0.25 0.628906 -0.386719 1 -0.386719 c 0.367188 0 0.726562 0.136719 1 0.382812 v -3.882812 z m 2.117188 12 c 0.246093 0.273438 0.382812 0.632812 0.382812 1 c 0 0.371094 -0.136719 0.726562 -0.386719 1 h 7.886719 v -2 z m 0 0"/>
        <path d="m 7 11 c -1.097656 0 -2 0.902344 -2 2 s 0.902344 2 2 2 s 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0"/>
        <path d="m 7 3 c -1.097656 0 -2 0.902344 -2 2 s 0.902344 2 2 2 s 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0"/>
        <path d="m 8 6.5 h -2 v 5 h 2 z m 0 0" fill-opacity="0.35"/>
        <path d="m 5.882812 12 c -0.246093 0.273438 -0.382812 0.632812 -0.382812 1 c 0 0.371094 0.136719 0.726562 0.386719 1 h -5.886719 v -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLinejoinsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLinejoinsymbolic;
