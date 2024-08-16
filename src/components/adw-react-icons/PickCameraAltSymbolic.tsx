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
        <path d="m 5 5.019531 h 3 c 1.101562 0 2 0.894531 2 2 v 2 c 0 1.105469 -0.898438 2 -2 2 h -3 c -1.105469 0 -2 -0.894531 -2 -2 v -2 c 0 -1.105469 0.894531 -2 2 -2 z m 0 0" fill-rule="evenodd"/>
        <path d="m 12.546875 6.035156 c -0.277344 -0.097656 -0.589844 -0.039062 -0.796875 0.144532 l -1.542969 1.359374 c -0.28125 0.25 -0.277343 0.648438 0.003907 0.894532 l 1.542968 1.339844 c 0.207032 0.183593 0.519532 0.234374 0.792969 0.136718 s 0.453125 -0.328125 0.453125 -0.585937 v -2.699219 c 0 -0.257812 -0.179688 -0.492188 -0.453125 -0.589844 z m 0 0"/>
        <g fill-rule="evenodd">
            <path d="m 4 0 v 0.996094 c 0 0.554687 0.449219 1.003906 1.003906 1.003906 h 4.992188 c 0.554687 0 1.003906 -0.449219 1.003906 -1.003906 v -0.996094 h -2.097656 c -0.210938 0.558594 -0.75 0.957031 -1.378906 0.957031 c -0.632813 -0.003906 -1.167969 -0.398437 -1.378907 -0.957031 z m 0 0" fill-opacity="0.33"/>
            <path d="m -0.00390625 4.988281 v 1 h 1.00000025 v -1 c 0 -0.550781 0.445312 -1 1 -1 h 1 v -1 h -1 c -1.105469 0 -2.00000025 0.894531 -2.00000025 2 z m 0 0"/>
            <path d="m -0.00390625 10.988281 v -1 h 1.00000025 v 1 c 0 0.554688 0.445312 1 1 1 h 1 v 1 h -1 c -1.105469 0 -2.00000025 -0.894531 -2.00000025 -2 z m 0 0"/>
            <path d="m 16.003906 4.988281 v 1 h -1 v -1 c 0 -0.550781 -0.449218 -1 -1 -1 h -1.003906 v -1 h 1.003906 c 1.101563 0 2 0.894531 2 2 z m 0 0"/>
            <path d="m 16.003906 10.988281 v -1 h -1 v 1 c 0 0.554688 -0.449218 1 -1 1 h -1.003906 v 1 h 1.003906 c 1.101563 0 2 -0.894531 2 -2 z m 0 0"/>
            <path d="m 6.96875 13 c -0.554688 0 -1 0.4375 -1 0.984375 v 0.023437 h -0.964844 c -0.558594 0 -1.007812 0.449219 -1.003906 1.003907 v 0.988281 h 2.125 c 0.199219 -0.582031 0.75 -1 1.398438 -1 c 0.648437 0 1.199218 0.417969 1.398437 1 h 2.078125 v -0.988281 c -0.003906 -0.554688 -0.449219 -1.003907 -1.003906 -1.003907 h -0.992188 v -0.023437 c 0 -0.546875 -0.449218 -0.984375 -1.003906 -0.984375 z m 0 0" fill-opacity="0.33"/>
        </g>
    </g>
    </svg>
  );
};

const AdwPickCameraAltSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPickCameraAltSymbolic;
