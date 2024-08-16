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
        <path d="m 8 0 c -4.40625 0 -8 3.59375 -8 8 s 3.59375 8 8 8 s 8 -3.59375 8 -8 s -3.59375 -8 -8 -8 z m 0 2 c 3.324219 0 6 2.675781 6 6 s -2.675781 6 -6 6 s -6 -2.675781 -6 -6 s 2.675781 -6 6 -6 z m 0 0"/>
        <path d="m 4.929688 4.953125 c -0.128907 0.003906 -0.257813 0.058594 -0.351563 0.152344 c -0.191406 0.195312 -0.1875 0.511719 0.007813 0.707031 l 3.113281 3.042969 c 0.105469 0.097656 0.246093 0.144531 0.386719 0.128906 h 2.914062 c 0.277344 0 0.5 -0.222656 0.5 -0.5 c 0 -0.273437 -0.222656 -0.5 -0.5 -0.5 h -2.761719 l -2.953125 -2.886719 c -0.09375 -0.09375 -0.222656 -0.144531 -0.355468 -0.144531 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwClockaltsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwClockaltsymbolic;
