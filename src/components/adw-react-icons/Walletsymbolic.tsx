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
      <path d="m 3 1 s -0.707031 -0.015625 -1.449219 0.355469 c -0.738281 0.371093 -1.550781 1.3125 -1.550781 2.644531 v 8 c 0 0.554688 0.277344 1.085938 0.628906 1.402344 c 0.355469 0.316406 0.75 0.472656 1.128906 0.566406 l 8 2 c 0.664063 0.167969 1.3125 -0.136719 1.679688 -0.53125 c 0.363281 -0.394531 0.5625 -0.882812 0.5625 -1.4375 v -7 c 0 -0.554688 -0.277344 -1.085938 -0.628906 -1.402344 c -0.355469 -0.316406 -0.75 -0.472656 -1.128906 -0.566406 l -7.695313 -1.925781 c 0.230469 -0.089844 0.453125 -0.105469 0.453125 -0.105469 h 2.9375 h 0.03125 h 8.03125 v 1 h -3.757812 l 0.242187 0.0625 c 0.492187 0.121094 1.03125 0.324219 1.550781 0.792969 c 0.523438 0.464843 0.964844 1.3125 0.964844 2.144531 v 5 h 1 c 1.089844 0 2 -0.910156 2 -2 v -7 c 0 -1.089844 -0.910156 -2 -2 -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwWalletsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWalletsymbolic;
