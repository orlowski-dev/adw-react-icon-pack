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
      <g fill="#303030">
        <path d="m 8 1 c -0.554688 0 -1 0.476562 -1 1.070312 v 4.867188 l 2 2 v -6.867188 c 0 -0.59375 -0.445312 -1.070312 -1 -1.070312 z m 2.910156 2 c -0.503906 0 -0.910156 0.472656 -0.910156 1.066406 v 5.871094 l 2 2 v -7.871094 c 0 -0.59375 -0.40625 -1.066406 -0.910156 -1.066406 z m -5.84375 2.003906 l 0.929688 0.929688 c -0.03125 -0.5 -0.429688 -0.898438 -0.929688 -0.929688 z m -1.066406 1.058594 v 3.9375 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 v -1.9375 z m -2 0.9375 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 12 0 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 s 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 z m -7 2.0625 v 4.867188 c 0 0.59375 0.445312 1.070312 1 1.070312 s 1 -0.476562 1 -1.070312 v -2.867188 z m 3.011719 3.011719 c 0.058593 0.523437 0.433593 0.925781 0.898437 0.925781 h 0.03125 z m 0 0"/>
        <path d="m 2.0625 0 l -1.058594 1.0625 l 14 14 l 1.058594 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNosoundsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNosoundsymbolic;
