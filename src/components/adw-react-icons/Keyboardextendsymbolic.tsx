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
        <path d="m 1 6.03125 c -0.554688 0 -1 0.445312 -1 1 v 6.96875 c 0 0.554688 0.445312 1 1 1 h 14 c 0.554688 0 1 -0.445312 1 -1 v -6.96875 c 0 -0.554688 -0.445312 -1 -1 -1 z m 2.25 1.96875 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 1.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -1.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 3 0 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 1.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -1.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 3 0 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 1.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -1.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 3 0 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 1.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -1.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m -7 3 h 5.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 1.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -5.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -1.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 0 0"/>
        <path d="m 11 5.015625 h -1 c -0.257812 0 -0.527344 -0.117187 -0.71875 -0.285156 l -1.28125 -1.160157 l -1.28125 1.160157 c -0.191406 0.167969 -0.460938 0.285156 -0.71875 0.285156 h -1 v -0.90625 c 0 -0.28125 0.089844 -0.503906 0.28125 -0.683594 l 2.71875 -2.410156 l 2.71875 2.410156 c 0.191406 0.179688 0.28125 0.402344 0.28125 0.683594 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwKeyboardextendsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyboardextendsymbolic;
