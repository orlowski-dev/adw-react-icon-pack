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
      <path d="m 4 2 c -1.660156 0 -2.632812 1.300781 -3 3 l -1 5 c -0.28125 1.457031 1.339844 3 3 3 s 3 -1.339844 3 -3 h 0.003906 c 0.019532 -1.085938 0.90625 -1.957031 1.996094 -1.957031 c 1.089844 -0.003907 1.976562 0.867187 2 1.957031 c 0 1.660156 1.339844 3 3 3 s 3.324219 -1.371094 3 -3 l -1 -5 c -0.324219 -1.628906 -1.339844 -3 -3 -3 z m 0.25 2 h 0.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.75 h 0.75 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -0.75 v 0.75 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -0.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -0.75 h -0.75 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -0.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 h 0.75 v -0.75 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 5.71875 -0.03125 c 0.589844 0 1.0625 0.476562 1.0625 1.0625 s -0.472656 1.0625 -1.0625 1.0625 c -0.585938 0 -1.0625 -0.476562 -1.0625 -1.0625 s 0.476562 -1.0625 1.0625 -1.0625 z m 3.011719 1.9375 c 0.59375 0 1.078125 0.484375 1.078125 1.078125 c 0 0.597656 -0.484375 1.078125 -1.078125 1.078125 s -1.078125 -0.480469 -1.078125 -1.078125 c 0 -0.59375 0.484375 -1.078125 1.078125 -1.078125 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwGamepad2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGamepad2Symbolic;
