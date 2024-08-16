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
      <path d="m 4 0 s -0.707031 -0.015625 -1.449219 0.355469 c -0.738281 0.371093 -1.550781 1.3125 -1.550781 2.644531 v 10.96875 h -1 l -0.00390625 2 h 0.00390625 l 3 0.011719 v -0.011719 h 13 v -2 h -1 v -10.96875 s 0.015625 -0.707031 -0.355469 -1.449219 c -0.371093 -0.738281 -1.3125 -1.550781 -2.644531 -1.550781 z m 3.007812 5 h 2 v 2 h 2 v 2 h -2 v 2 h -2 v -2 h -2 v -2 h 2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwTabnewlargesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTabnewlargesymbolic;
