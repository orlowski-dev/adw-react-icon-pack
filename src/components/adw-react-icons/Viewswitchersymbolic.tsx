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
      <path d="m 3 1 c -1.089844 0 -2 0.910156 -2 2 v 10 c 0 1.089844 0.910156 2 2 2 h 10 c 1.089844 0 2 -0.910156 2 -2 v -10 c 0 -1.089844 -0.910156 -2 -2 -2 z m 1.976562 1 c 0.554688 0 1.007813 0.453125 1.007813 1.007812 c 0 0.558594 -0.449219 1.007813 -1.007813 1.011719 c -0.558593 -0.003906 -1.007812 -0.453125 -1.007812 -1.011719 c 0 -0.554687 0.453125 -1.007812 1.007812 -1.007812 z m 2.980469 0 c 0.554688 0 1.007813 0.453125 1.007813 1.007812 c 0 0.558594 -0.449219 1.007813 -1.007813 1.011719 c -0.558593 -0.003906 -1.007812 -0.453125 -1.007812 -1.011719 c 0 -0.554687 0.453125 -1.007812 1.007812 -1.007812 z m 3.042969 0 c 0.558594 0 1.011719 0.449219 1.011719 1.007812 c 0 0.269532 -0.105469 0.523438 -0.296875 0.714844 c -0.1875 0.1875 -0.445313 0.296875 -0.714844 0.296875 c -0.554688 -0.003906 -1.007812 -0.453125 -1.007812 -1.011719 c 0.003906 -0.554687 0.453124 -1.007812 1.007812 -1.007812 z m -8 3 h 10 v 8 h -10 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwViewswitchersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViewswitchersymbolic;
