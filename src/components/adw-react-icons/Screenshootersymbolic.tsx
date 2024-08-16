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
        <path d="m 10.042969 7 c -0.566407 0 -1.019531 0.425781 -1.042969 0.964844 h -0.988281 c -1.113281 0 -2.011719 0.898437 -2.011719 2.011718 v 4.011719 c 0 1.113281 0.898438 2.011719 2.011719 2.011719 h 5.976562 c 1.113281 0 2.011719 -0.898438 2.011719 -2.011719 v -4.011719 c 0 -1.113281 -0.898438 -2.011718 -2.011719 -2.011718 h -0.988281 c -0.019531 -0.539063 -0.476562 -0.964844 -1.042969 -0.964844 z m 0.957031 3 c 1.105469 0 2 0.894531 2 2 s -0.894531 2 -2 2 s -2 -0.894531 -2 -2 s 0.894531 -2 2 -2 z m 0 0"/>
        <path d="m 3.007812 11.984375 h -0.316406 c -1.507812 0 -2.722656 -1.210937 -2.722656 -2.722656 v -0.269531 c 0 -0.550782 0.445312 -1 1 -1 c 0.550781 0 1 0.449218 1 1 v 0.269531 c 0 0.394531 0.328125 0.722656 0.722656 0.722656 h 0.316406 c 0.550782 0 1 0.449219 1 1 c 0 0.554687 -0.449218 1 -1 1 z m 0 0"/>
        <path d="m 14 3.039062 v -0.316406 c 0 -0.394531 -0.328125 -0.722656 -0.722656 -0.722656 h -0.269532 c -0.554687 0 -1 -0.449219 -1 -1 s 0.445313 -1 1 -1 h 0.269532 c 1.507812 0 2.722656 1.214844 2.722656 2.722656 v 0.316406 c 0 0.554688 -0.449219 1 -1 1 s -1 -0.445312 -1 -1 z m 0 0"/>
        <path d="m 0 3.039062 v -0.316406 c 0 -1.507812 1.214844 -2.722656 2.722656 -2.722656 h 0.269532 c 0.554687 0 1 0.449219 1 1 s -0.445313 1 -1 1 h -0.269532 c -0.394531 0 -0.722656 0.328125 -0.722656 0.722656 v 0.316406 c 0 0.554688 -0.449219 1 -1 1 s -1 -0.445312 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwScreenshootersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScreenshootersymbolic;
