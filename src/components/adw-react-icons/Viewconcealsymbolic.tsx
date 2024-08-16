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
      <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -2.382812 -2.382812 c 1.265624 -1.0625 2.171874 -2.496094 2.589843 -4.097657 c -0.914062 -3.523437 -4.097656 -5.984375 -7.738281 -5.988281 c -1.367188 0.011719 -2.707031 0.371094 -3.894531 1.042969 z m 6.46875 3.53125 c 2.210938 0 4 1.789062 4 4 c -0.003906 0.800781 -0.246094 1.578125 -0.699219 2.238281 l -1.46875 -1.46875 c 0.105469 -0.242187 0.164063 -0.503906 0.167969 -0.769531 c 0 -1.105469 -0.894531 -2 -2 -2 c -0.265625 0.003906 -0.527344 0.0625 -0.769531 0.167969 l -1.46875 -1.46875 c 0.660156 -0.453125 1.4375 -0.695313 2.238281 -0.699219 z m -6.144531 0.917969 c -0.753907 0.898437 -1.296875 1.957031 -1.59375 3.09375 c 0.914062 3.523437 4.097656 5.984375 7.738281 5.988281 c 0.855469 -0.007812 1.703125 -0.152344 2.511719 -0.425781 l -1.667969 -1.667969 c -0.277344 0.058594 -0.5625 0.089844 -0.84375 0.09375 c -2.210938 0 -4 -1.789062 -4 -4 c 0.003906 -0.28125 0.035156 -0.566406 0.09375 -0.84375 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwViewconcealsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViewconcealsymbolic;
