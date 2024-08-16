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
        <path d="m 7 9 v 2 h 3.5 v -2 z m 0 0" fill-opacity="0.35"/>
        <path d="m 11 0 v 8.769531 c 0.273438 -0.246093 0.628906 -0.382812 1 -0.382812 c 0.367188 0 0.726562 0.132812 1 0.382812 v -8.769531 z m 0 11 v 5 h 2 v -5 c -0.273438 0.246094 -0.628906 0.382812 -1 0.386719 c -0.371094 -0.003907 -0.726562 -0.140625 -1 -0.386719 z m 0 0"/>
        <path d="m 12 8 c -1.097656 0 -2 0.902344 -2 2 s 0.902344 2 2 2 s 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0"/>
        <path d="m 16 9 v 2 h -2.5 c 0.117188 -0.320312 0.175781 -0.660156 0.179688 -1 c -0.003907 -0.339844 -0.0625 -0.679688 -0.179688 -1 z m 0 0"/>
        <path d="m 6 8 c -1.097656 0 -2 0.902344 -2 2 s 0.902344 2 2 2 s 2 -0.902344 2 -2 s -0.902344 -2 -2 -2 z m 0 1 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0"/>
        <path d="m 0 9 v 2 h 4.5 c -0.117188 -0.320312 -0.175781 -0.660156 -0.179688 -1 c 0.003907 -0.339844 0.0625 -0.679688 0.179688 -1 z m 0 0"/>
        <path d="m 9 3.78125 l -3 -3.03125 v 2.25 h -2 v 2 h 2 v 2.25 l 3 -3.03125 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLineextendsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLineextendsymbolic;
