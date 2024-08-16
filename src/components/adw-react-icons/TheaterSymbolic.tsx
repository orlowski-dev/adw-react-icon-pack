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
        <path d="m 8 0 c -2 0 -2 2 -2 2 v 1 h 2 c 0.226562 0 0.4375 0.027344 0.640625 0.070312 c 0.113281 -0.046874 0.230469 -0.070312 0.359375 -0.070312 c 0.449219 0 0.828125 0.296875 0.957031 0.699219 c 0 0.003906 -0.003906 0.003906 0 0.003906 c 0.308594 0.257813 0.542969 0.558594 0.6875 0.851563 c 0.371094 0.738281 0.355469 1.445312 0.355469 1.445312 c 1.105469 0 2 0.894531 2 2 h -2 v 2 s 0.003906 0.867188 -0.261719 1.992188 c 0.085938 0.007812 0.171875 0.007812 0.261719 0.007812 c 5 0 5 -6 5 -6 v -4 s 0 -2 -2 -2 z m 5 3 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m -7 2 v 1 s 0 0.097656 0.011719 0.269531 c 0.292969 -0.171875 0.628906 -0.269531 0.988281 -0.269531 c 1.09375 0 2 0.90625 2 2 v -2 s -0.015625 -0.292969 -0.144531 -0.550781 c -0.128907 -0.261719 -0.1875 -0.449219 -0.855469 -0.449219 z m 3 3 c 0 1.042969 -0.824219 1.914062 -1.851562 1.992188 c 0.011718 0.011718 0.015624 0.023437 0.023437 0.035156 c 0.457031 0.082031 0.800781 0.46875 0.824219 0.933594 c 0.238281 0.207031 0.5 0.390624 0.800781 0.542968 c 0.191406 -0.835937 0.203125 -1.503906 0.203125 -1.503906 z m 0 0"/>
        <path d="m 8 4 h -6 c -2 0 -2 2 -2 2 v 4 s 0 6 5 6 s 5 -6 5 -6 v -4 s 0 -2 -2 -2 z m -5 3 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 4 0 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m -4 4 h 4 c 0 1.105469 -0.894531 2 -2 2 s -2 -0.894531 -2 -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTheaterSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTheaterSymbolic;
