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
        <path d="m 3.851562 0.0117188 c -0.105468 0.015625 -0.203124 0.046875 -0.300781 0.0937502 c -0.492187 0.246093 -0.691406 0.847656 -0.445312 1.339843 l 3.21875 6.4375 l 1.117187 -2.238281 l -2.546875 -5.09375 c -0.195312 -0.386719 -0.613281 -0.6054685 -1.042969 -0.5390622 z m 5.824219 10.1054692 l -1.117187 2.238281 l 1.546875 3.09375 c 0.171875 0.332031 0.519531 0.542969 0.894531 0.539062 v 0.011719 h 3.5 v -3 h -3.382812 z m 5.324219 2.882812 v 3 h 1 v -3 z m 0 0"/>
        <path d="m 12.148438 0.0117188 c -0.429688 -0.0664063 -0.847657 0.1523432 -1.042969 0.5390622 l -6.222657 12.449219 h -3.484374 v 3 h 3.601562 v -0.011719 c 0.375 0.003907 0.722656 -0.207031 0.894531 -0.539062 l 7 -14 c 0.246094 -0.496094 0.046875 -1.097657 -0.445312 -1.34375 c -0.097657 -0.0468752 -0.195313 -0.0781252 -0.300781 -0.0937502 z m -12.148438 12.9882812 v 3 h 1 v -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwHockeysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHockeysymbolic;
