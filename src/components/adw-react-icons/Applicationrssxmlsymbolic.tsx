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
      <path d="m 1.988281 1.988281 v 1.011719 c 0.007813 0.546875 0.453125 0.984375 1 0.988281 c 0.003907 -0.003906 0.007813 -0.003906 0.011719 -0.003906 v 0.027344 c 4.972656 0 8.988281 4.015625 8.988281 8.988281 c 0.003907 0.546875 0.449219 0.988281 1 0.984375 h 0.011719 h 0.988281 v -0.984375 h -0.003906 c 0 -0.003906 0 -0.003906 0.003906 -0.007812 c -0.003906 -5.972657 -4.804687 -10.84375 -10.746093 -10.972657 c -0.078126 -0.019531 -0.160157 -0.03125 -0.242188 -0.03125 v -0.003906 z m 0 4 v 1.011719 c 0.007813 0.546875 0.453125 0.984375 1 0.988281 c 0.003907 -0.003906 0.007813 -0.003906 0.011719 -0.003906 v 0.015625 c 2.71875 0 4.914062 2.144531 4.996094 4.84375 c -0.007813 0.046875 -0.011719 0.09375 -0.011719 0.144531 c 0 0.550781 0.449219 1 1 1 c 0.007813 -0.003906 0.011719 -0.003906 0.015625 -0.003906 v 0.003906 h 0.984375 v -0.988281 h 0.015625 c 0 -3.792969 -3.046875 -6.898438 -6.820312 -6.992188 c 0 -0.003906 -0.003907 -0.003906 -0.003907 -0.003906 c -0.058593 -0.011718 -0.117187 -0.015625 -0.175781 -0.015625 v -0.003906 z m 2 4 c -1.105469 0 -2 0.894531 -2 2 c 0 1.101563 0.894531 2 2 2 c 1.101563 0 2 -0.898437 2 -2 c 0 -1.105469 -0.898437 -2 -2 -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwApplicationrssxmlsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwApplicationrssxmlsymbolic;
