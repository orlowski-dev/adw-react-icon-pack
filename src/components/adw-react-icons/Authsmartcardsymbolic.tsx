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
      <path d="m 4 0 c -2 0 -2 2 -2 2 v 12 c 0 2 2 2 2 2 h 8 s 2 0 2 -2 v -12 c 0 -2 -2 -2 -2 -2 z m 1.507812 2.976562 c 0.28125 -0.003906 0.511719 0.226563 0.507813 0.507813 v 3.53125 h 1 v -4.03125 h 3 v 4.03125 h 0.511719 c 0.675781 -0.011719 0.675781 1.007813 0 1 h -1.511719 v -4.03125 h -1 v 4.03125 h -3 v -4.53125 c -0.003906 -0.277344 0.214844 -0.503906 0.492187 -0.507813 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwAuthsmartcardsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAuthsmartcardsymbolic;
