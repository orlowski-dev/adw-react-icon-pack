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
      <path d="m 8 0 c -0.257812 0 -0.511719 0.0976562 -0.707031 0.292969 l -1.246094 1.25 l -1.765625 1.730469 c -0.191406 0.199218 -0.28125 0.441406 -0.28125 0.75 c 0 0.976562 1 1 1 1 c 0.257812 0 0.527344 -0.128907 0.71875 -0.3125 l 1.28125 -1.28125 v 7.570312 s 0 1 1 1 s 1 -1 1 -1 v -7.570312 l 1.28125 1.28125 c 0.191406 0.183593 0.410156 0.3125 0.71875 0.3125 c 0 0 1 -0.023438 1 -1 c 0 -0.308594 -0.089844 -0.550782 -0.28125 -0.75 l -1.765625 -1.730469 l -1.246094 -1.25 c -0.195312 -0.1953128 -0.449219 -0.292969 -0.707031 -0.292969 z m -3.96875 6.964844 c -1.660156 -0.027344 -3.03125 1.371094 -3.03125 3.035156 v 2.972656 c 0 1.664063 1.371094 3.035156 3.03125 3.035156 h 7.9375 c 1.664062 0 3.03125 -1.371093 3.03125 -3.035156 v -2.972656 c 0 -1.664062 -1.367188 -3.0625 -3.03125 -3.035156 l -1.96875 0.035156 v 2 l 1.96875 -0.035156 c 0.589844 -0.007813 1.03125 0.445312 1.03125 1.035156 v 2.972656 c 0 0.589844 -0.441406 1.035156 -1.03125 1.035156 h -7.9375 c -0.585938 0 -1.03125 -0.445312 -1.03125 -1.035156 v -2.972656 c 0 -0.589844 0.445312 -1.042969 1.03125 -1.035156 l 1.96875 0.035156 v -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwSendtosymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSendtosymbolic;
