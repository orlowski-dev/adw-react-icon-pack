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
      <path d="m 14.195312 0.0820312 l -1.675781 1.0898438 s 0.878907 1.539063 0.824219 2.585937 c -0.023438 0.402344 -0.453125 1.289063 -0.945312 1.964844 c -0.03125 0.039063 -0.050782 0.058594 -0.082032 0.101563 c -1.238281 -0.328125 -2.589844 -0.242188 -3.519531 0.15625 c -0.988281 4.652343 -4.300781 6.664062 -8.402344 9.519531 c 5.851563 0.109375 10.816407 0.191406 14.769531 -4.148438 c 0.675782 -2.234374 0.074219 -3.722656 -1.027343 -4.625 c 0.554687 -0.777343 1.140625 -1.722656 1.203125 -2.859374 c 0.105468 -2.042969 -1.144532 -3.7851568 -1.144532 -3.7851568 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPeppersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPeppersymbolic;
