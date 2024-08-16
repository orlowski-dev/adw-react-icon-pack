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
      <path d="m 8 2 c -3.648438 0.003906 -6.832031 2.476562 -7.738281 6.007812 c 0.914062 3.527344 4.097656 5.988282 7.738281 5.992188 c 3.648438 -0.003906 6.832031 -2.476562 7.738281 -6.011719 c -0.914062 -3.523437 -4.097656 -5.984375 -7.738281 -5.988281 z m 0 2 c 2.210938 0 4 1.789062 4 4 s -1.789062 4 -4 4 s -4 -1.789062 -4 -4 s 1.789062 -4 4 -4 z m 0 2 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwViewRevealSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViewRevealSymbolic;
