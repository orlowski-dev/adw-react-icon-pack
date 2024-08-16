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
      <path d="m 8 0 c -4.40625 0 -8 3.59375 -8 8 s 3.59375 8 8 8 s 8 -3.59375 8 -8 s -3.59375 -8 -8 -8 z m 0 2 c 0.039062 0 0.074219 0.003906 0.113281 0.007812 c -0.335937 1.648438 0.167969 3.394532 1.429688 4.601563 c 1.203125 1.15625 2.875 1.601563 4.453125 1.285156 c 0 0.035157 0.003906 0.070313 0.003906 0.105469 c 0 3.324219 -2.675781 6 -6 6 c -0.039062 0 -0.078125 -0.003906 -0.113281 -0.007812 c 0.320312 -1.582032 -0.128907 -3.257813 -1.28125 -4.460938 c -0.722657 -0.746094 -1.636719 -1.234375 -2.609375 -1.429688 c -0.246094 -0.050781 -0.492188 -0.082031 -0.742188 -0.09375 c -0.414062 -0.023437 -0.835937 0.011719 -1.246094 0.097657 c -0.003906 -0.035157 -0.007812 -0.070313 -0.007812 -0.105469 c 0 -3.324219 2.675781 -6 6 -6 z m 1.113281 0.105469 c 2.429688 0.453125 4.332031 2.355469 4.78125 4.785156 c -1.289062 0.296875 -2.671875 -0.050781 -3.660156 -1.003906 c -1.035156 -0.988281 -1.433594 -2.429688 -1.121094 -3.78125 z m -5.90625 6.898437 c 0.992188 0.050782 1.953125 0.472656 2.675781 1.222656 c 0.949219 0.988282 1.304688 2.371094 1.007813 3.667969 c -2.433594 -0.453125 -4.335937 -2.355469 -4.785156 -4.789062 c 0.363281 -0.082031 0.734375 -0.121094 1.101562 -0.101563 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwEmojiActivitiesSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEmojiActivitiesSymbolic;
