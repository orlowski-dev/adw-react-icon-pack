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
      <path d="m 8.019531 1.007812 c -0.53125 0 -1.03125 0.421876 -1.03125 1 v 7.011719 h 8.011719 v -7.042969 c 0 -0.578124 -0.523438 -0.96875 -1.023438 -0.96875 z m 0.96875 3.015626 h 4.011719 v 2.996093 h -4.011719 z m -6.953125 2.984374 c -0.53125 0 -1.03125 0.421876 -1.03125 1 v 7.011719 h 8.011719 v -3.984375 h -2 v 1.984375 h -4.011719 v -2.996093 h 2.015625 v -3.015626 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFocusWindowsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFocusWindowsSymbolic;
