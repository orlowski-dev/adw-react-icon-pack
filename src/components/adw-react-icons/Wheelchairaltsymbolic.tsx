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
      <path d="m 8 0 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m -1 5 s -1 0 -1 1 v 3.0625 c 0 2 2 2 2 2 l 2.371094 0.003906 l 2.769531 4.449219 c 0.285156 0.472656 0.898437 0.625 1.371094 0.34375 c 0.472656 -0.285156 0.628906 -0.898437 0.34375 -1.371094 l -3.351563 -5.488281 h -1.503906 v -1 h 3 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -2.585938 l -0.707031 -0.707031 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m -2 2.042969 c -1.613281 0.183593 -3.027344 1.21875 -3.65625 2.742187 c -0.699219 1.679688 -0.308594 3.617188 0.976562 4.902344 c 1.28125 1.285156 3.222657 1.671875 4.902344 0.976562 c 1.523438 -0.628906 2.558594 -2.042968 2.738282 -3.65625 h -2.015626 c -0.164062 0.804688 -0.710937 1.488282 -1.488281 1.808594 c -0.9375 0.390625 -2.007812 0.175782 -2.726562 -0.542968 c -0.714844 -0.714844 -0.929688 -1.785157 -0.542969 -2.722657 c 0.324219 -0.78125 1.007812 -1.324219 1.8125 -1.488281 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwWheelchairaltsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWheelchairaltsymbolic;
