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
        <path d="m 2.503906 0 c -1.382812 0 -2.503906 1.117188 -2.49999975 2.5 v 8 c 0 1.386719 1.11328175 2.5 2.49999975 2.5 h 8.375 l 3.125 3 v -3.0625 c 1.160156 -0.230469 1.996094 -1.253906 2 -2.4375 v -8 c 0 -1.386719 -1.117187 -2.5 -2.5 -2.5 z m 0 2 h 11 c 0.277344 0 0.5 0.222656 0.5 0.5 v 8 c 0 0.277344 -0.222656 0.5 -0.5 0.5 h -11 c -0.277344 0 -0.503906 -0.222656 -0.5 -0.5 v -8 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 4.003906 7 h 6 v 2 h -6 z m 0 0"/>
        <path d="m 4.003906 4 h 8 v 2 h -8 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSubtitlessymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSubtitlessymbolic;
