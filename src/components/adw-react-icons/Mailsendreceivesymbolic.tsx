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
      <path d="m 1 12 c 0 -0.265625 0.105469 -0.519531 0.292969 -0.707031 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 l 1.292969 1.292969 v -7.585938 c 0 -0.550781 0.449219 -1 1 -1 s 1 0.449219 1 1 v 7.585938 l 1.292969 -1.292969 c 0.390625 -0.390625 1.023437 -0.390625 1.414062 0 s 0.390625 1.023437 0 1.414062 l -3 3 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 l -3 -3 c -0.1875 -0.1875 -0.292969 -0.441406 -0.292969 -0.707031 z m 6 -8 c 0 -0.257812 0.097656 -0.511719 0.292969 -0.707031 l 3 -3 c 0.390625 -0.3906252 1.023437 -0.3906252 1.414062 0 l 3 3 c 0.1875 0.1875 0.292969 0.441406 0.292969 0.707031 s -0.105469 0.519531 -0.292969 0.707031 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 l -1.292969 -1.292969 v 7.585938 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 v -7.585938 l -1.292969 1.292969 c -0.390625 0.390625 -1.023437 0.390625 -1.414062 0 c -0.195313 -0.195312 -0.292969 -0.449219 -0.292969 -0.707031 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwMailsendreceivesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailsendreceivesymbolic;
