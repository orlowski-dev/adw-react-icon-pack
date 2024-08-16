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
        <path d="m 1 3 h 14 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 h -14 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 4 4 v -1.5 c 0 -1.386719 1.113281 -2.5 2.5 -2.5 h 2.980469 c 1.382812 0 2.5 1.113281 2.5 2.5 v 1.5 h -2 v -1.5 c 0 -0.269531 -0.230469 -0.5 -0.5 -0.5 h -2.980469 c -0.269531 0 -0.5 0.230469 -0.5 0.5 v 1.5 z m 0 0"/>
        <path d="m 4 4 v 9 c 0 0.546875 0.453125 1 1 1 h 6 c 0.546875 0 1 -0.453125 1 -1 v -9 h 2 v 9 c 0 1.660156 -1.339844 3 -3 3 h -6 c -1.660156 0 -3 -1.339844 -3 -3 v -9 z m 0 0"/>
        <path d="m 7 7 v 5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -5 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 s 0.5 0.222656 0.5 0.5 z m 0 0"/>
        <path d="m 10 7 v 5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -5 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 s 0.5 0.222656 0.5 0.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwUserTrashSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwUserTrashSymbolic;
