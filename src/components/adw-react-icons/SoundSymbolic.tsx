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
      <g fill="#303030">
        <path d="m 3 8 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
        <path d="m 5 5 c 0.550781 0 1 0.449219 1 1 v 4 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 v -4 c 0 -0.550781 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 8 1 c 0.550781 0 1 0.480469 1 1.070312 v 11.859376 c 0 0.589843 -0.449219 1.070312 -1 1.070312 s -1 -0.480469 -1 -1.070312 v -11.859376 c 0 -0.589843 0.449219 -1.070312 1 -1.070312 z m 0 0"/>
        <path d="m 10.910156 3 h 0.179688 c 0.503906 0 0.910156 0.476562 0.910156 1.066406 v 7.867188 c 0 0.589844 -0.40625 1.066406 -0.910156 1.066406 h -0.179688 c -0.503906 0 -0.910156 -0.476562 -0.910156 -1.066406 v -7.867188 c 0 -0.589844 0.40625 -1.066406 0.910156 -1.066406 z m 0 0"/>
        <path d="m 14 7 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSoundSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSoundSymbolic;
