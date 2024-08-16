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
        <path d="m 4.003906 3 c 0.554688 0 1 0.445312 1 1 v 3 c 0 0.554688 -0.445312 1 -1 1 h -0.710937 c 0.671875 2.265625 2.445312 4.042969 4.710937 4.710938 v -0.710938 c 0 -0.554688 0.449219 -1 1 -1 h 3 c 0.554688 0 1 0.445312 1 1 v 1.5 c 0 1.378906 -1.117187 2.5 -2.5 2.5 h -0.5 c -5.503906 0 -9.99999975 -4.496094 -9.99999975 -10 v -0.5 c 0 -1.378906 1.12109375 -2.5 2.49999975 -2.5 z m 0 0"/>
        <path d="m 10 1 v 2.269531 l -1.964844 -1.132812 l -1 1.726562 l 1.964844 1.136719 l -1.964844 1.136719 l 1 1.726562 l 1.964844 -1.132812 v 2.269531 h 2 v -2.269531 l 1.964844 1.132812 l 1 -1.726562 l -1.964844 -1.136719 l 1.964844 -1.136719 l -1 -1.726562 l -1.964844 1.132812 v -2.269531 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCallemergencysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCallemergencysymbolic;
