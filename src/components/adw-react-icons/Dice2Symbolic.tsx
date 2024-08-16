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
      <path d="m 0.0117188 13.195312 c 0 0.964844 0.7812502 1.742188 1.7460932 1.742188 h 12.449219 c 0.964844 0 1.742188 -0.777344 1.742188 -1.742188 v -10.453124 c 0 -0.964844 -0.777344 -1.746094 -1.742188 -1.746094 h -12.449219 c -0.964843 0 -1.7460932 0.777344 -1.7460932 1.746094 z m 1.9687502 -0.875 v -8.703124 c 0 -0.046876 0.007812 -0.09375 0.015625 -0.136719 c 0.007812 -0.042969 0.019531 -0.082031 0.039062 -0.121094 c 0.015625 -0.042969 0.035156 -0.078125 0.0625 -0.113281 c 0.023438 -0.035156 0.050782 -0.066406 0.078125 -0.097656 c 0.03125 -0.03125 0.0625 -0.054688 0.097657 -0.078126 c 0.035156 -0.027343 0.070312 -0.046874 0.113281 -0.0625 c 0.039062 -0.019531 0.078125 -0.03125 0.121093 -0.039062 c 0.042969 -0.007812 0.089844 -0.011719 0.136719 -0.011719 h 7.679688 c 0.042969 0 0.089843 0.003907 0.132812 0.011719 s 0.085938 0.019531 0.125 0.039062 c 0.039063 0.015626 0.074219 0.035157 0.109375 0.0625 c 0.035156 0.023438 0.070313 0.046876 0.097656 0.078126 c 0.03125 0.03125 0.058594 0.0625 0.082032 0.097656 c 0.023437 0.035156 0.046875 0.070312 0.0625 0.109375 c 0.015625 0.039062 0.027344 0.082031 0.035156 0.125 c 0.011719 0.042969 0.015625 0.089843 0.015625 0.132812 v 8.707031 c 0 0.046876 -0.003906 0.089844 -0.015625 0.132813 c -0.007812 0.042969 -0.019531 0.085937 -0.035156 0.125 s -0.039063 0.074219 -0.0625 0.109375 c -0.023438 0.035156 -0.050782 0.070312 -0.082032 0.097656 c -0.027343 0.03125 -0.0625 0.058594 -0.09375 0.082032 c -0.035156 0.023437 -0.074218 0.046874 -0.113281 0.0625 c -0.039062 0.015624 -0.082031 0.027343 -0.125 0.035156 c -0.042969 0.011718 -0.085937 0.015625 -0.132812 0.015625 h -7.679688 c -0.046875 0 -0.09375 -0.003907 -0.136719 -0.015625 c -0.042968 -0.007813 -0.082031 -0.019532 -0.121093 -0.035156 c -0.039063 -0.015626 -0.078125 -0.039063 -0.109375 -0.0625 c -0.035156 -0.023438 -0.070313 -0.050782 -0.101563 -0.082032 c -0.027343 -0.027344 -0.054687 -0.0625 -0.078125 -0.097656 c -0.023437 -0.035156 -0.046875 -0.070312 -0.0625 -0.109375 s -0.027344 -0.082031 -0.035156 -0.125 c -0.011719 -0.042969 0.027344 -0.152344 -0.015625 -0.132813 z m 1 -1.464843 c 0 0.554687 0.449219 1 1 1 c 0.554687 0 1 -0.445313 1 -1 c 0 -0.554688 -0.445313 -1 -1 -1 c -0.550781 0 -1 0.445312 -1 1 z m 0 -6.023438 c 0 0.550781 0.449219 1 1 1 c 0.554687 0 1 -0.449219 1 -1 c 0 -0.554687 -0.445313 -1 -1 -1 c -0.550781 0 -1 0.445313 -1 1 z m 5 6.023438 c 0 0.554687 0.449219 1 1 1 c 0.554687 0 1 -0.445313 1 -1 c 0 -0.554688 -0.445313 -1 -1 -1 c -0.550781 0 -1 0.445312 -1 1 z m 0 -6.023438 c 0 0.550781 0.449219 1 1 1 c 0.554687 0 1 -0.449219 1 -1 c 0 -0.554687 -0.445313 -1 -1 -1 c -0.550781 0 -1 0.445313 -1 1 z m 4.742187 2.988281 c 0 -0.554687 0.339844 -1 0.761719 -1 c 0.425781 0 0.765625 0.445313 0.761719 1 c 0 0.554688 -0.335938 1 -0.761719 1 c -0.421875 0 -0.761719 -0.445312 -0.761719 -1 z m -9.753906 0.027344 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 c 0 -0.554687 -0.445312 -1 -1 -1 s -1 0.445313 -1 1 z m 5 0 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 c 0 -0.554687 -0.445312 -1 -1 -1 s -1 0.445313 -1 1 z m 3.980469 -2.984375 c 0 -0.554687 0.339843 -1 0.761719 -1 c 0.425781 0 0.761718 0.445313 0.761718 1 c 0 0.554688 -0.335937 1 -0.761718 1 c -0.421876 0 -0.761719 -0.445312 -0.761719 -1 z m 1.511719 5.976563 c 0 -0.550782 0.34375 -1 0.765624 -1 c 0.421876 0 0.761719 0.449218 0.761719 1 c 0 0.554687 -0.339843 1 -0.761719 1 c -0.421874 0 -0.765624 -0.445313 -0.765624 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDice2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDice2Symbolic;
