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
        <path d="m 12.191406 2 h 1.621094 c 1.203125 0 2.179688 0.976562 2.179688 2.179688 v 1.640624 c 0 1.203126 -0.976563 2.179688 -2.179688 2.179688 h -1.621094 c -1.203125 0 -2.179687 -0.976562 -2.179687 -2.179688 v -1.640624 c 0 -1.203126 0.976562 -2.179688 2.179687 -2.179688 z m 0 0"/>
        <path d="m 15.988281 5.613281 v 6.988281 c 0 1.320313 -1.070312 2.386719 -2.386719 2.386719 h -8.597656 c -0.554687 0 -1.003906 -0.449219 -1.003906 -1.003906 v -0.441406 c 0 -1.957031 1.585938 -3.542969 3.542969 -3.542969 h 2.347656 c 1.140625 0 2.066406 -0.925781 2.066406 -2.0625 v -2.351562 z m 0 0"/>
        <path d="m 9.992188 3.964844 v -4.011719 l 2.125 2.015625 z m 0 0"/>
        <path d="m 15.992188 3.964844 v -4.011719 l -1.960938 2.015625 z m 0 0"/>
        <path d="m 5.878906 13 h -2.898437 c -0.535157 0 -0.980469 -0.445312 -0.980469 -0.980469 v -0.160156 c 0 -1.039063 0.425781 -2.03125 1.175781 -2.75 l 1.804688 -1.726563 c 0.671875 -0.640624 1.050781 -1.53125 1.050781 -2.457031 v -0.253906 c 0 -1.480469 -1.191406 -2.671875 -2.671875 -2.671875 h -1.464844 c -0.550781 0 -1 0.445312 -1 1 c 0 0.550781 0.449219 1 1 1 h 1.464844 c 0.367187 0 0.671875 0.304688 0.671875 0.671875 v 0.253906 c 0 0.382813 -0.15625 0.746094 -0.429688 1.011719 l -1.808593 1.726562 c -1.144531 1.09375 -1.792969 2.609376 -1.792969 4.195313 v 0.160156 c 0 1.652344 1.328125 2.980469 2.980469 2.980469 h 2.898437 c 0.550782 0 1 -0.449219 1 -1 s -0.449218 -1 -1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCatsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCatsymbolic;
