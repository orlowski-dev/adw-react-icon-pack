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
      <path d="m 7 7 h 0.5 s 0.5 0 0.5 -0.5 s -0.5 -0.5 -0.5 -0.5 h -5.5 c -0.554688 0 -1 -0.445312 -1 -1 s 0.445312 -1 1 -1 h 9.5 c 0.5 0 0.5 -0.5 0.5 -0.5 l -1.707031 -1.792969 c -0.195313 -0.1875 -0.300781 -0.445312 -0.304688 -0.71875 c 0.085938 -1.082031 1.269531 -1.144531 1.71875 -0.695312 l 3 3 c 0.792969 0.707031 1.289063 1.757812 1.292969 2.707031 v 6 c 0 3 -3 3 -3 3 h -6.054688 c -0.554687 0 -1 -0.445312 -1 -1 s 0.445313 -1 1 -1 h 0.554688 s 0.5 0 0.5 -0.5 s -0.5 -0.5 -0.5 -0.5 h -0.5 c -0.554688 0 -1 -0.445312 -1 -1 s 0.445312 -1 1 -1 h 0.5 s 0.5 0 0.5 -0.5 s -0.5 -0.5 -0.5 -0.5 h -0.5 c -0.554688 0 -0.992188 -0.453125 -1 -1 c -0.011719 -0.585938 0.445312 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwHandPointHorizontalSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHandPointHorizontalSymbolic;
