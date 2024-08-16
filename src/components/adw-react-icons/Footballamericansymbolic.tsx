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
      <path d="m 15 0 c -5.132812 0 -8.945312 1.03125 -11.457031 3.542969 s -3.542969 6.324219 -3.542969 11.457031 c 0 0.550781 0.449219 1 1 1 c 5.132812 0 8.945312 -1.03125 11.457031 -3.542969 s 3.542969 -6.324219 3.542969 -11.457031 c 0 -0.550781 -0.449219 -1 -1 -1 z m -1.136719 2.136719 c -0.058593 1.433593 -0.199219 2.726562 -0.433593 3.878906 l -3.445313 -3.445313 c 1.152344 -0.234374 2.445313 -0.375 3.878906 -0.433593 z m -5.191406 0.863281 l 4.328125 4.253906 c -0.292969 1.746094 -1.214844 3.046875 -1.957031 3.789063 c -0.742188 0.742187 -2.042969 1.542969 -3.804688 1.957031 l -4.238281 -4.179688 c 0.398438 -1.578124 1.214844 -3.121093 1.957031 -3.863281 c 0.742188 -0.742187 2.296875 -1.519531 3.714844 -1.957031 z m -6.101563 6.984375 l 3.445313 3.445313 c -1.152344 0.234374 -2.445313 0.375 -3.878906 0.433593 c 0.058593 -1.433593 0.199219 -2.726562 0.433593 -3.878906 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFootballamericansymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFootballamericansymbolic;
