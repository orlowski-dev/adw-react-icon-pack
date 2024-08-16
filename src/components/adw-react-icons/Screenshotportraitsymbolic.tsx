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
      <path d="m 4.011719 0 c -1.652344 0 -3.011719 1.359375 -3.011719 3.011719 v 8.976562 c 0 1.652344 1.359375 3.011719 3.011719 3.011719 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 c -0.578125 0 -1.011719 -0.433594 -1.011719 -1.011719 v -8.976562 c 0 -0.578125 0.433594 -1.011719 1.011719 -1.011719 h 5.976562 c 0.578125 0 1.011719 0.433594 1.011719 1.011719 v 0.988281 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -0.988281 c 0 -1.652344 -1.359375 -3.011719 -3.011719 -3.011719 z m 6.03125 7 c -0.566407 0 -1.019531 0.425781 -1.042969 0.964844 h -0.988281 c -1.113281 0 -2.011719 0.898437 -2.011719 2.011718 v 4.011719 c 0 1.113281 0.898438 2.011719 2.011719 2.011719 h 5.976562 c 1.113281 0 2.011719 -0.898438 2.011719 -2.011719 v -4.011719 c 0 -1.113281 -0.898438 -2.011718 -2.011719 -2.011718 h -0.988281 c -0.019531 -0.539063 -0.476562 -0.964844 -1.042969 -0.964844 z m 0.957031 3 c 1.105469 0 2 0.894531 2 2 s -0.894531 2 -2 2 s -2 -0.894531 -2 -2 s 0.894531 -2 2 -2 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwScreenshotportraitsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScreenshotportraitsymbolic;
