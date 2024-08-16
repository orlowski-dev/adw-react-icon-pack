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
        <path d="m 4 0 c -1.007812 0.00390625 -1 1 -1 1 v 13 c 0 2 2.003906 2 2.003906 2 h 7 c 2 0 2 -2 2 -2 v -10 s 0 -2 -2 -2 h -6.75 c -0.25 0 -0.25 -0.25 -0.25 -0.25 l -0.003906 -0.75 s -0.007812 -0.99609375 -1 -1 z m 1.003906 4.25 c 0 -0.25 0.25 -0.25 0.25 -0.25 h 6.5 s 0.25 0 0.25 0.25 v 9.5 c 0 0.25 -0.25 0.25 -0.25 0.25 h -6.5 c -0.25 0 -0.253906 -0.277344 -0.253906 -0.277344 z m 0 0"/>
        <path d="m 6.003906 5.25 c 0 -0.25 0.25 -0.25 0.25 -0.25 h 4.5 s 0.25 0 0.25 0.25 v 2.5 c 0 0.25 -0.25 0.25 -0.25 0.25 h -4.5 c -0.25 0 -0.253906 -0.277344 -0.253906 -0.277344 z m 0.25 3.75 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.140625 0 -0.25 -0.113281 -0.25 -0.25 v -0.5 c 0 -0.136719 0.109375 -0.25 0.25 -0.25 z m 3 0 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.140625 0 -0.25 -0.113281 -0.25 -0.25 v -0.5 c 0 -0.136719 0.109375 -0.25 0.25 -0.25 z m -3 2 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.140625 0 -0.25 -0.113281 -0.25 -0.25 v -0.5 c 0 -0.136719 0.109375 -0.25 0.25 -0.25 z m 3 0 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.140625 0 -0.25 -0.113281 -0.25 -0.25 v -0.5 c 0 -0.136719 0.109375 -0.25 0.25 -0.25 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPhonesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhonesymbolic;
