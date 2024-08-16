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
        <path d="m 6.507812 0 c -0.261718 0 -0.621093 0.03125 -0.820312 0.078125 c -1.363281 0.386719 -2.382812 1.519531 -2.621094 2.914063 l -1.960937 10.007812 c -0.398438 1.601562 0.351562 3 1.960937 3 h 6.859375 c 1.609375 0 2.300781 -1.378906 2.019531 -3 l -1.277343 -6.101562 l -1.441407 1.242187 l 0.78125 3.859375 h -7 l 1.777344 -9.007812 c 0.140625 -0.582032 0.648438 -1 1.25 -1 h 0.921875 c 0.597657 0 1.109375 0.40625 1.261719 1 l 0.207031 0.890624 l 1.441407 -1.234374 l -0.050782 -0.167969 c -0.539062 -1.910157 -2.195312 -2.480469 -3.308594 -2.480469 z m 0 0"/>
        <path d="m 13.5625 1.25 c -0.199219 -0.011719 -0.394531 0.050781 -0.542969 0.179688 l -7 6 c -0.152343 0.128906 -0.246093 0.3125 -0.261719 0.511718 c -0.015624 0.199219 0.046876 0.394532 0.179688 0.546875 c 0.128906 0.152344 0.3125 0.246094 0.511719 0.261719 s 0.394531 -0.050781 0.546875 -0.179688 l 7 -6 c 0.148437 -0.128906 0.242187 -0.3125 0.257812 -0.511718 c 0.015625 -0.199219 -0.046875 -0.394532 -0.175781 -0.546875 c -0.132813 -0.152344 -0.316406 -0.246094 -0.515625 -0.261719 z m 0 0"/>
        <path d="m 15.007812 2 c 0 0.828125 -0.671874 1.5 -1.5 1.5 c -0.828124 0 -1.5 -0.671875 -1.5 -1.5 s 0.671876 -1.5 1.5 -1.5 c 0.828126 0 1.5 0.671875 1.5 1.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwMetronomesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMetronomesymbolic;
