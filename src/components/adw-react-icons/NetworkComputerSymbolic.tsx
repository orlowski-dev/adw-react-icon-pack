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
        <path d="m 5 8 v 1.5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 h -0.5 c -0.550781 0 -1 0.449219 -1 1 c 0.007812 0.542969 0.457031 0.976562 1 0.96875 h 8 c 0.550781 0 1 -0.449219 1 -1 c -0.003906 -0.261719 -0.109375 -0.511719 -0.296875 -0.695312 c -0.1875 -0.179688 -0.441406 -0.28125 -0.703125 -0.277344 l -0.5 0.003906 c -0.132812 0 -0.257812 -0.054688 -0.351562 -0.148438 s -0.148438 -0.21875 -0.148438 -0.351562 v -1.5 z m 0 0"/>
        <path d="m 7.996094 12 c -0.703125 0 -1.355469 0.371094 -1.714844 0.972656 h -3.285156 c -0.554688 0 -1 0.449219 -1 1 c 0 0.550782 0.445312 1 1 1 h 3.246094 c 0.351562 0.640625 1.023437 1.035156 1.753906 1.039063 c 0.726562 -0.003907 1.398437 -0.398438 1.75 -1.039063 h 3.261718 c 0.550782 0 1 -0.449218 1 -1 c 0 -0.550781 -0.449218 -1 -1 -1 h -3.292968 c -0.363282 -0.601562 -1.015625 -0.972656 -1.71875 -0.972656 z m 0 1 c 0.554687 0 1.003906 0.449219 1.003906 1.007812 c 0 0.554688 -0.449219 1.003907 -1.003906 1.003907 c -0.558594 0 -1.007813 -0.449219 -1.007813 -1.003907 c 0 -0.558593 0.449219 -1.007812 1.007813 -1.007812 z m 0 0"/>
        <path d="m 6.992188 10 h 2.007812 v 3 h -2.007812 z m 0 0"/>
        <path d="m 4.5 0 c -1.367188 0 -2.5 1.132812 -2.5 2.5 v 4 c 0 1.367188 1.132812 2.5 2.5 2.5 h 7 c 1.367188 0 2.5 -1.132812 2.5 -2.5 v -4 c 0 -1.367188 -1.132812 -2.5 -2.5 -2.5 z m 0 2 h 7 c 0.292969 0 0.5 0.207031 0.5 0.5 v 4 c 0 0.292969 -0.207031 0.5 -0.5 0.5 h -7 c -0.292969 0 -0.5 -0.207031 -0.5 -0.5 v -4 c 0 -0.292969 0.207031 -0.5 0.5 -0.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNetworkComputerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkComputerSymbolic;
