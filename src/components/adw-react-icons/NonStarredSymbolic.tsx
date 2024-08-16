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
      <path d="m 8 0 c -0.429688 0 -0.8125 0.273438 -0.949219 0.683594 l -1.449219 4.339844 l -4.589843 -0.015626 c -0.4375 0 -0.828125 0.28125 -0.9609378 0.695313 c -0.1328124 0.417969 0.0195313 0.871094 0.3789068 1.125 l 3.625 2.554687 l -1.5 4.285157 c -0.140626 0.40625 -0.011719 0.855469 0.328124 1.121093 c 0.335938 0.261719 0.804688 0.285157 1.164063 0.050782 l 4.003906 -2.59375 l 3.894531 2.585937 c 0.359376 0.238281 0.828126 0.222657 1.167969 -0.042969 c 0.339844 -0.261718 0.472657 -0.714843 0.332031 -1.117187 l -1.503906 -4.289063 l 3.644532 -2.578124 c 0.351562 -0.25 0.503906 -0.703126 0.371093 -1.113282 c -0.128906 -0.414062 -0.511719 -0.695312 -0.945312 -0.699218 l -4.660157 -0.015626 l -1.402343 -4.285156 c -0.132813 -0.410156 -0.515625 -0.68749975 -0.949219 -0.691406 z m -0.007812 4.1875 l 0.683593 2.097656 c 0.132813 0.40625 0.515625 0.6875 0.945313 0.6875 l 2.253906 0.007813 l -1.703125 1.203125 c -0.363281 0.257812 -0.511719 0.726562 -0.363281 1.148437 l 0.765625 2.191407 l -1.964844 -1.304688 c -0.332031 -0.222656 -0.761719 -0.222656 -1.097656 -0.007812 l -2.101563 1.363281 l 0.785156 -2.242188 c 0.144532 -0.421875 -0.003906 -0.890625 -0.367187 -1.148437 l -1.652344 -1.164063 l 2.144531 0.007813 c 0.429688 0 0.8125 -0.277344 0.949219 -0.683594 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    </svg>
  );
};

const AdwNonStarredSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNonStarredSymbolic;
