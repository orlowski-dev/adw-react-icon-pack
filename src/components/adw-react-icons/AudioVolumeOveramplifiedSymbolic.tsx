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
      <path d="m 7 1.007812 c -0.296875 -0.003906 -0.578125 0.125 -0.769531 0.351563 l -3.230469 3.640625 h -1 c -1.09375 0 -2 0.84375 -2 2 v 2 c 0 1.089844 0.910156 2 2 2 h 1 l 3.230469 3.640625 c 0.210937 0.253906 0.492187 0.363281 0.769531 0.359375 z m 7 -0.007812 c -0.550781 0 -1 0.449219 -1 1 v 12 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -12 c 0 -0.550781 -0.449219 -1 -1 -1 z m -4 2 c -0.550781 0 -1 0.449219 -1 1 v 8 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -8 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwAudioVolumeOveramplifiedSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAudioVolumeOveramplifiedSymbolic;
