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
      <path d="m 8.488281 0.0546875 c -4.128906 0 -7.484375 3.3554685 -7.484375 7.4882815 c 0 4.128906 3.355469 7.484375 7.484375 7.484375 c 4.132813 0 7.488281 -3.355469 7.488281 -7.484375 c 0 -4.132813 -3.355468 -7.4882815 -7.488281 -7.4882815 z m 0 1.9726565 c 3.050781 0 5.515625 2.464844 5.515625 5.515625 c 0 3.046875 -2.464844 5.511719 -5.515625 5.511719 c -3.046875 0 -5.511719 -2.464844 -5.511719 -5.511719 c 0 -3.050781 2.464844 -5.515625 5.511719 -5.515625 z m 3.011719 2.007812 c -0.035156 0 -0.070312 0 -0.105469 0.007813 c -0.097656 0.023437 -0.183593 0.078125 -0.25 0.15625 l -2.65625 2.65625 l -1.65625 -1.65625 c -0.105469 -0.179688 -0.3125 -0.269531 -0.515625 -0.234375 c -0.203125 0.039062 -0.363281 0.199218 -0.402344 0.402344 c -0.039062 0.203124 0.054688 0.410156 0.230469 0.519531 l 2 2 c 0.195313 0.179687 0.496094 0.179687 0.6875 0 l 3 -3 c 0.140625 -0.140625 0.179688 -0.351563 0.109375 -0.535157 c -0.074218 -0.183593 -0.246094 -0.308593 -0.441406 -0.316406 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwEmojirecentsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmojirecentsymbolic;
