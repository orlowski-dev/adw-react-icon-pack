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
      <path d="m 11.34375 0.40625 l -0.6875 0.71875 l 2.4375 2.40625 v 2.78125 l 0.15625 0.125 l 0.78125 0.78125 l -0.03125 4.308594 c 0 0.960937 -0.308594 1.503906 -0.992188 1.503906 c -0.613281 0 -1.007812 -0.480469 -1.007812 -1.480469 l 0.003906 -2.082031 c 0 -0.902344 -0.574218 -1.46875 -1.554687 -1.46875 h -0.449219 v -5 c 0 -1.109375 -0.890625 -2 -2 -2 h -5 c -1.109375 0 -2 0.890625 -2 2 v 11 c -0.554688 0 -1 0.445312 -1 1 h 11 c 0 -0.554688 -0.445312 -1 -1 -1 v -5 h 0.417969 c 0.324219 0 0.585937 0.253906 0.585937 0.46875 v 2.082031 c 0 1.667969 0.992188 2.464844 1.996094 2.464844 c 1.289062 0 2 -0.804687 2 -2.464844 l 0.0625 -7.269531 v -0.21875 l -0.15625 -0.15625 z m -7.351562 2.566406 h 3.015624 c 0.550782 0 1 0.445313 1 1 v 2 c 0 0.554688 -0.449218 1 -1 1 h -3.015624 c -0.550782 0 -1 -0.445312 -1 -1 v -2 c 0 -0.554687 0.449218 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFuelsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFuelsymbolic;
