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
      <path d="m 7 1 c -0.410156 0 -0.777344 0.25 -0.929688 0.628906 l -2 5 c -0.046874 0.117188 -0.070312 0.242188 -0.070312 0.371094 v 7 h 2 v -3 h 4.003906 l 0.003906 3 h 2 l -0.007812 -7 c 0 -0.128906 -0.023438 -0.253906 -0.074219 -0.371094 l -2 -5 c -0.148437 -0.378906 -0.515625 -0.628906 -0.925781 -0.628906 z m 0.675781 2 h 0.644531 l 1.679688 4.195312 l 0.003906 1.804688 h -4.003906 v -1.804688 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFormatTextPlaintextSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFormatTextPlaintextSymbolic;
