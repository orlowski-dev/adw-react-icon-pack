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
      <path d="m 4 0 c -2 0 -2 2 -2 2 v 12 c 0 2 2 2 2 2 h 8 s 2 0 2 -2 v -11 l -3 -3 z m 1 6 l 1 0.007812 v 2 h -2 v -1.007812 s 0 -1 1 -1 z m 6 0 c 1 0 1 1 1 1 l -0.003906 1 h -2 v -2 z m -4 0.007812 h 2 v 2 h -2 z m -3 2.996094 h 8 v 3.996094 c 0 1 -1 1 -1 1 l -1 -0.003906 v -2.996094 h -6 z m 6 2 h 2 v -0.003906 h -2 z m -6 1 h 2 v 2 l -1 -0.003906 c -1 0 -1 -1 -1 -1 z m 3 0 h 2 v 2 h -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwAuthsimsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAuthsimsymbolic;
