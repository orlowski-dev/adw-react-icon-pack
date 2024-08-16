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
      <g fill="currentColor" fill-rule="evenodd">
        <path d="m 5.960938 14.46875 c 0 0.820312 -0.667969 1.484375 -1.488282 1.484375 c -0.816406 0 -1.484375 -0.664063 -1.484375 -1.484375 s 0.667969 -1.484375 1.484375 -1.484375 c 0.820313 0 1.488282 0.664063 1.488282 1.484375 z m 0 0"/>
        <path d="m 9.945312 14.46875 c 0 0.820312 -0.664062 1.484375 -1.484374 1.484375 c -0.820313 0 -1.484376 -0.664063 -1.484376 -1.484375 s 0.664063 -1.484375 1.484376 -1.484375 c 0.820312 0 1.484374 0.664063 1.484374 1.484375 z m 0 0"/>
        <path d="m 13.964844 14.46875 c 0 0.820312 -0.664063 1.484375 -1.484375 1.484375 c -0.820313 0 -1.484375 -0.664063 -1.484375 -1.484375 s 0.664062 -1.484375 1.484375 -1.484375 c 0.820312 0 1.484375 0.664063 1.484375 1.484375 z m 0 0"/>
        <path d="m 4.019531 5.988281 c -1.652343 0 -3.019531 1.367188 -3.019531 3.019531 c 0 1.65625 1.367188 3.019532 3.019531 3.019532 h 9.945313 c 1.109375 0 2.011718 -0.902344 2.011718 -2.011719 v -4.027344 z m 0 2 h 9.957031 v 2.039063 h -9.957031 c -0.578125 0 -1.019531 -0.4375 -1.019531 -1.019532 c 0 -0.578124 0.441406 -1.019531 1.019531 -1.019531 z m 0 0"/>
        <path d="m 10.988281 0 c -1.636719 0 -2.984375 1.351562 -2.984375 2.988281 v 4.929688 h 7.980469 v -4.929688 c 0 -1.636719 -1.351563 -2.988281 -2.984375 -2.988281 z m 0 2 h 2.011719 c 0.5625 0 0.984375 0.421875 0.984375 0.988281 v 3.957031 h -3.980469 v -3.957031 c 0 -0.566406 0.421875 -0.988281 0.984375 -0.988281 z m 0 0"/>
        <path d="m 4.019531 2.75 c 0.550781 0 0.996094 0.449219 0.996094 1 v 2.1875 c 0 0.550781 -0.445313 1 -0.996094 1 s -1 -0.449219 -1 -1 v -2.1875 c 0 -0.550781 0.449219 -1 1 -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSteamTrainSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSteamTrainSymbolic;
