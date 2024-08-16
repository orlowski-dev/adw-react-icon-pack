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
      <path d="m 8 1 c -2.050781 0 -4.097656 0.78125 -5.65625 2.339844 c -3.117188 3.113281 -3.117188 8.195312 0 11.3125 c 0.320312 0.328125 0.824219 0.398437 1.21875 0.167968 c 0.398438 -0.230468 0.589844 -0.703124 0.460938 -1.144531 l 0.796874 -0.792969 l -0.707031 -0.707031 l -0.695312 0.695313 c -0.808594 -0.953125 -1.296875 -2.132813 -1.402344 -3.375 h 0.984375 v -1 h -0.984375 c 0.105469 -1.246094 0.59375 -2.425782 1.402344 -3.375 l 0.695312 0.691406 l 0.707031 -0.707031 l -0.695312 -0.691407 c 0.9375 -0.792968 2.089844 -1.28125 3.3125 -1.398437 c -0.058594 0.105469 -0.101562 0.226563 -0.101562 0.363281 l -0.039063 3.746094 c -0.78125 0.289062 -1.296875 1.035156 -1.296875 1.871094 c 0 1.101562 0.894531 2 2 2 s 2 -0.898438 2 -2 c 0 -0.796875 -0.46875 -1.515625 -1.199219 -1.835938 l 0.039063 -3.765625 c 0.003906 -0.128906 -0.035156 -0.246093 -0.09375 -0.359375 c 1.15625 0.144532 2.242187 0.625 3.128906 1.375 l -0.691406 0.695313 l 0.707031 0.707031 l 0.691406 -0.691406 c 0.808594 0.949218 1.296875 2.128906 1.402344 3.375 h -0.984375 v 1 h 0.984375 c -0.105469 1.242187 -0.59375 2.421875 -1.402344 3.375 l -0.695312 -0.695313 l -0.707031 0.707031 l 0.800781 0.796876 c -0.125 0.441406 0.0625 0.910156 0.460937 1.136718 c 0.394532 0.230469 0.894532 0.160156 1.214844 -0.164062 c 3.117188 -3.117188 3.117188 -8.199219 0 -11.3125 c -1.5 -1.503906 -3.535156 -2.34375 -5.65625 -2.339844 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSpeedometer3Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSpeedometer3Symbolic;
