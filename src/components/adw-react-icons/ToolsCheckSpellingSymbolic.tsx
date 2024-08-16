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
      <g fill="#2e3436">
        <path d="m 3 3.011719 v 2 h 1.917969 c -0.054688 0 0.085937 0.160156 0.085937 0.082031 v 0.921875 h -1.003906 c -1.714844 0 -3.03125 1.128906 -3.054688 2.484375 c -0.011718 0.679688 0.304688 1.363281 0.859376 1.824219 c 0.558593 0.460937 1.316406 0.699219 2.195312 0.699219 h 3.003906 v -5.929688 c 0 -1.171875 -0.886718 -2.082031 -2.085937 -2.082031 z m 1 5.007812 h 1.003906 v 1.003907 h -1.003906 c -0.519531 0 -0.792969 -0.136719 -0.921875 -0.242188 c -0.125 -0.105469 -0.132813 -0.171875 -0.132813 -0.242188 c 0.003907 -0.144531 0.085938 -0.519531 1.054688 -0.519531 z m 0 0"/>
        <path d="m 7.996094 2 v 9.023438 h 3.003906 c 0.9375 0 1.769531 -0.371094 2.296875 -0.960938 c 0.53125 -0.585938 0.765625 -1.335938 0.757813 -2.0625 c -0.011719 -0.730469 -0.261719 -1.46875 -0.789063 -2.042969 c -0.527344 -0.578125 -1.34375 -0.957031 -2.265625 -0.957031 h -1.003906 v -3 z m 2 5 h 1.003906 c 0.421875 0 0.625 0.125 0.785156 0.300781 c 0.164063 0.179688 0.265625 0.449219 0.269532 0.722657 c 0.003906 0.277343 -0.089844 0.53125 -0.242188 0.699218 c -0.148438 0.167969 -0.355469 0.300782 -0.8125 0.300782 h -1.003906 z m 0 0"/>
        <path d="m 3 11.292969 l -2.355469 2.351562 c -0.195312 0.195313 -0.195312 0.515625 0 0.710938 c 0.195313 0.191406 0.511719 0.191406 0.707031 0 l 1.648438 -1.648438 l 2 2 l 2 -2 l 2 2 l 2 -2 l 2 2 l 2.351562 -2.351562 c 0.195313 -0.195313 0.195313 -0.515625 0 -0.710938 c -0.195312 -0.191406 -0.511718 -0.191406 -0.707031 0 l -1.644531 1.648438 l -2 -2 l -2 2 l -2 -2 l -2 2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwToolsCheckSpellingSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwToolsCheckSpellingSymbolic;
