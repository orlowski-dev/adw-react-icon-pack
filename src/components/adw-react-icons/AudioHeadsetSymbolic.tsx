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
      <path d="m 8 0 c -1.230469 0 -2.4375 0.324219 -3.5 0.9375 c -2.164062 1.25 -3.5 3.5625 -3.5 6.0625 v 3 c 0 2 2 2 2 2 h 1 c 0.554688 0 1 -0.445312 1 -1 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 h -1 c 0 -1.785156 0.953125 -3.4375 2.5 -4.332031 c 1.546875 -0.890625 3.453125 -0.890625 5 0 c 1.546875 0.894531 2.5 2.546875 2.5 4.332031 h -1 c -0.554688 0 -1 0.445312 -1 1 v 3 c 0 0.554688 0.5 1 1 1 h 1 c 0 1.167969 -0.4375 1.476562 -0.949219 1.730469 c -0.507812 0.253906 -1.050781 0.269531 -1.050781 0.269531 h -4 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 4 s 0.957031 0.011719 1.949219 -0.480469 c 0.988281 -0.496093 2.050781 -1.6875 2.050781 -3.519531 v -5 c 0 -2.5 -1.335938 -4.8125 -3.5 -6.0625 c -1.0625 -0.613281 -2.269531 -0.9375 -3.5 -0.9375 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwAudioHeadsetSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAudioHeadsetSymbolic;
