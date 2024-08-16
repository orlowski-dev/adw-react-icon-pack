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
        <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 s 1.355469 3 3 3 h 7 v -2 c 0 -0.554688 0.445312 -1 1 -1 s 1 0.445312 1 1 v 2 h 1 c 1.644531 0 3 -1.355469 3 -3 s -1.355469 -3 -3 -3 z m 0 0"/>
        <path d="m 9 9 v 0.5 s 0 0.5 0.5 0.5 s 0.5 -0.5 0.5 -0.5 v -3.5 h 2 v 5.5 c 0 0.5 0.5 0.5 0.5 0.5 l 1.792969 -1.707031 c 0.1875 -0.195313 0.445312 -0.300781 0.71875 -0.304688 c 1.082031 0.085938 1.144531 1.269531 0.695312 1.71875 l -3 3 c -0.707031 0.792969 -1.757812 1.289063 -2.707031 1.292969 h -6 c -3 0 -3 -3 -3 -3 v -4.054688 c 0 -0.554687 0.445312 -1 1 -1 s 1 0.445313 1 1 v 0.554688 s 0 0.5 0.5 0.5 s 0.5 -0.5 0.5 -0.5 v -0.5 c 0 -0.554688 0.445312 -1 1 -1 s 1 0.445312 1 1 v 0.5 s 0 0.5 0.5 0.5 s 0.5 -0.5 0.5 -0.5 v -0.5 c 0 -0.554688 0.453125 -0.992188 1 -1 c 0.585938 -0.011719 1 0.445312 1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwHandtouchsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHandtouchsymbolic;
