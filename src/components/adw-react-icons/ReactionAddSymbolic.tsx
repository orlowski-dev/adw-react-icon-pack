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
        <path d="m 7 2 c -3.855469 0 -7 3.144531 -7 7 s 3.144531 7 7 7 s 7 -3.144531 7 -7 h -2 c 0 2.773438 -2.226562 5 -5 5 s -5 -2.226562 -5 -5 s 2.226562 -5 5 -5 z m 0 0"/>
        <path d="m 11 0 v 3 h -3 v 2 h 3 v 3 h 2 v -3 h 3 v -2 h -3 v -3 z m 0 0"/>
        <path d="m 6 7 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
        <path d="m 10 7 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
        <path d="m 4.523438 9.269531 c -0.195313 0.191407 -0.195313 0.511719 0 0.707031 c 0.65625 0.652344 1.546874 1.023438 2.476562 1.023438 c 0.925781 0 1.816406 -0.371094 2.472656 -1.023438 c 0.195313 -0.195312 0.195313 -0.515624 0 -0.707031 c -0.195312 -0.195312 -0.511718 -0.195312 -0.707031 0 c -0.46875 0.46875 -1.101563 0.730469 -1.765625 0.730469 s -1.300781 -0.261719 -1.769531 -0.730469 c -0.195313 -0.195312 -0.511719 -0.195312 -0.707031 0 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwReactionAddSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwReactionAddSymbolic;
