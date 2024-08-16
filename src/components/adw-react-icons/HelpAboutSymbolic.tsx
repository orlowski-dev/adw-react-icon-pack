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
      <path d="m 7.996094 0.0195312 c -4.410156 0 -8.00000025 3.5898438 -8.00000025 7.9999998 c 0 4.410157 3.58984425 8 8.00000025 8 s 8 -3.589843 8 -8 c 0 -4.410156 -3.589844 -7.9999998 -8 -7.9999998 z m 0 1.9999998 c 3.332031 0 6 2.667969 6 6 s -2.667969 6 -6 6 c -3.332032 0 -6 -2.667969 -6 -6 s 2.667968 -6 6 -6 z m 0 1.875 c -0.621094 0 -1.125 0.503907 -1.125 1.125 c 0 0.621094 0.503906 1.125 1.125 1.125 s 1.125 -0.503906 1.125 -1.125 c 0 -0.621093 -0.503906 -1.125 -1.125 -1.125 z m -1.523438 3.125 c -0.265625 0.011719 -0.476562 0.230469 -0.476562 0.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 0.5 v 3 h -0.5 c -0.277344 0 -0.5 0.222657 -0.5 0.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 3 c 0.277344 0 0.5 -0.222656 0.5 -0.5 c 0 -0.277343 -0.222656 -0.5 -0.5 -0.5 h -0.5 v -4 h -2.5 c -0.007813 0 -0.015625 0 -0.023438 0 z m 0 0"/>
    </svg>
  );
};

const AdwHelpAboutSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHelpAboutSymbolic;
