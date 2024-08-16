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
      <path d="m 13 1 c -0.554688 0 -1 0.445312 -1 1 v 12 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -12 c 0 -0.554688 -0.445312 -1 -1 -1 z m -8.75 6.347656 c -0.152344 0.175782 -0.25 0.402344 -0.25 0.652344 v 6 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -0.28125 c -0.613281 -0.355469 -0.996094 -1.007812 -1 -1.71875 v -2.546875 c -0.8125 -0.472656 -1.433594 -1.21875 -1.75 -2.105469 z m 6.75 1.277344 c -0.285156 0.328125 -0.625 0.609375 -1 0.828125 v 2.546875 c 0 1.105469 -0.894531 2 -2 2 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 z m -10 1.375 c -0.554688 0 -1 0.445312 -1 1 v 3 c 0 0.554688 0.445312 1 1 1 h 1 c 0.554688 0 1 -0.445312 1 -1 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    <path d="m 8.152344 3.007812 c -0.4375 -0.023437 -0.882813 0.046876 -1.300782 0.222657 c -1.117187 0.460937 -1.851562 1.558593 -1.851562 2.769531 h 2 c 0 -0.40625 0.242188 -0.769531 0.617188 -0.925781 c 0.375 -0.152344 0.800781 -0.070313 1.089843 0.21875 c 0.289063 0.289062 0.371094 0.714843 0.21875 1.089843 c -0.15625 0.375 -0.519531 0.617188 -0.925781 0.617188 c -0.550781 0 -1 0.449219 -1 1 v 2 h 2 v -1.179688 c 0.785156 -0.28125 1.441406 -0.875 1.769531 -1.671874 c 0.464844 -1.117188 0.207031 -2.414063 -0.648437 -3.269532 c -0.535156 -0.535156 -1.242188 -0.835937 -1.96875 -0.871094 z m -0.152344 7.992188 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwNetworkcellularnoroutesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkcellularnoroutesymbolic;
