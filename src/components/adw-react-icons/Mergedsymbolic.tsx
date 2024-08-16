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
      <path d="m 4 0.984375 c -1.105469 0 -2 0.898437 -2 2 c 0 0.714844 0.382812 1.375 1 1.730469 v 6.546875 c -0.617188 0.355469 -0.996094 1.011719 -1 1.722656 c 0 1.105469 0.894531 2 2 2 s 2 -0.894531 2 -2 c -0.003906 -0.710937 -0.382812 -1.367187 -1 -1.722656 v -2.476563 c 0.546875 0.179688 0.984375 0.171875 0.992188 0.171875 l 5 0.027344 h 0.007812 c 0.167969 0 0.449219 0.117187 0.667969 0.332031 c 0.21875 0.21875 0.332031 0.503906 0.332031 0.667969 v 1.277344 c -0.617188 0.355469 -0.996094 1.011719 -1 1.722656 c 0 1.105469 0.894531 2 2 2 s 2 -0.894531 2 -2 c -0.003906 -0.710937 -0.382812 -1.367187 -1 -1.722656 v -1.277344 c 0 -0.832031 -0.386719 -1.546875 -0.917969 -2.082031 c -0.53125 -0.53125 -1.25 -0.917969 -2.082031 -0.917969 l -4.992188 -0.023437 h -0.007812 s -0.292969 -0.015626 -0.550781 -0.144532 c -0.261719 -0.128906 -0.449219 -0.191406 -0.449219 -0.859375 v -1.238281 c 0.617188 -0.355469 1 -1.019531 1 -1.734375 c 0 -1.101563 -0.894531 -2 -2 -2 z m 0 1.015625 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMergedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMergedsymbolic;
