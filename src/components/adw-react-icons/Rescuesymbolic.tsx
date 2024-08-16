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
      <path d="m 8 0 c -4.414062 0 -8 3.585938 -8 8 s 3.585938 8 8 8 s 8 -3.585938 8 -8 s -3.585938 -8 -8 -8 z m 0 2 c 0.972656 0 1.886719 0.226562 2.695312 0.628906 l -1.234374 2.511719 c -0.25 -0.089844 -0.515626 -0.140625 -0.796876 -0.140625 h -1.328124 c -0.277344 0 -0.546876 0.050781 -0.796876 0.140625 l -1.234374 -2.511719 c 0.808593 -0.402344 1.722656 -0.628906 2.695312 -0.628906 z m -5.390625 3.335938 l 2.511719 1.257812 c -0.078125 0.234375 -0.121094 0.484375 -0.121094 0.742188 v 1.328124 c 0 0.277344 0.050781 0.546876 0.140625 0.796876 l -2.503906 1.25 c -0.40625 -0.8125 -0.636719 -1.730469 -0.636719 -2.710938 c 0 -0.960938 0.21875 -1.863281 0.609375 -2.664062 z m 10.777344 0 c 0.390625 0.800781 0.613281 1.703124 0.613281 2.664062 c 0 0.980469 -0.230469 1.898438 -0.640625 2.710938 l -2.5 -1.25 c 0.089844 -0.25 0.140625 -0.519532 0.140625 -0.796876 v -1.328124 c 0 -0.257813 -0.042969 -0.507813 -0.125 -0.742188 z m -6.050781 0.664062 h 1.328124 c 0.75 0 1.335938 0.589844 1.335938 1.335938 v 1.328124 c 0 0.746094 -0.585938 1.335938 -1.335938 1.335938 h -1.328124 c -0.746094 0 -1.335938 -0.589844 -1.335938 -1.335938 v -1.328124 c 0 -0.746094 0.589844 -1.335938 1.335938 -1.335938 z m -0.769532 4.867188 c 0.242188 0.085937 0.5 0.132812 0.769532 0.132812 h 1.328124 c 0.269532 0 0.527344 -0.046875 0.769532 -0.132812 l 1.253906 2.507812 c -0.804688 0.398438 -1.71875 0.625 -2.6875 0.625 s -1.882812 -0.226562 -2.6875 -0.625 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRescuesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRescuesymbolic;
