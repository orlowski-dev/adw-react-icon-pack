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
      <path d="m 8 1 c -0.550781 0 -1 0.449219 -1 1 v 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -3 c 0 -0.550781 -0.449219 -1 -1 -1 z m -7 2 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 c -0.3906252 0.390625 -0.3906252 1.023437 0 1.414062 l 2 2 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -2 -2 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 14 0 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 l -2 2 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 s 1.023437 0.390625 1.414062 0 l 2 -2 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m -7 4.992188 c -2.511719 0 -5.027344 0.957031 -6.9375 2.863281 l -0.34375 0.347656 c -0.957031 0.957031 -0.957031 2.511719 0 3.46875 l 1.039062 1.039063 c 0.382813 0.382812 1.003907 0.382812 1.386719 0 l 1.042969 -1.039063 l 1.039062 -1.042969 c 0.382813 -0.382812 0.382813 -1 0 -1.386718 l -0.496093 -0.492188 c 2.035156 -1.105469 4.503906 -1.105469 6.539062 0 l -0.496093 0.492188 c -0.382813 0.386718 -0.382813 1.003906 0 1.386718 l 1.039062 1.042969 l 1.042969 1.039063 c 0.382812 0.382812 1.003906 0.382812 1.386719 0 l 1.039062 -1.039063 c 0.957031 -0.957031 0.957031 -2.511719 0 -3.46875 l -0.34375 -0.347656 c -1.910156 -1.90625 -4.425781 -2.863281 -6.9375 -2.863281 z m 0 0" fill="#e01b24"/>
    </svg>
  );
};

const AdwCallringsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCallringsymbolic;
