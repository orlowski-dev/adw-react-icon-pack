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
      <path d="m 5.835938 3.246094 c 1.894531 -0.800782 6.164062 -0.246094 6.164062 -0.246094 s 0.515625 4.273438 -0.167969 6.238281 c -0.550781 1.585938 -2.144531 3.449219 -3.015625 4.039063 c -2.078125 1.277344 -4.433594 1.800781 -6.816406 -0.277344 c -2.382812 -2.078125 -1.476562 -3.886719 -0.710938 -5.425781 c 0.769532 -1.539063 2.621094 -3.511719 4.546876 -4.328125 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNutsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNutsymbolic;
