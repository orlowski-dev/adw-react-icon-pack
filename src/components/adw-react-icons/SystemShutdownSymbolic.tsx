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
      <path d="m 8 0 c -0.550781 0 -1 0.449219 -1 1 v 5 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -5 c 0 -0.550781 -0.449219 -1 -1 -1 z m -3.136719 1.816406 c -0.128906 0.015625 -0.253906 0.058594 -0.367187 0.125 c -2.734375 1.582032 -4.074219 4.816406 -3.257813 7.871094 c 0.820313 3.050781 3.59375 5.183594 6.75 5.1875 c 3.160157 0.003906 5.941407 -2.121094 6.765625 -5.167969 c 0.828125 -3.050781 -0.5 -6.289062 -3.230468 -7.878906 c -0.476563 -0.28125 -1.089844 -0.121094 -1.367188 0.359375 c -0.132812 0.226562 -0.171875 0.5 -0.105469 0.757812 c 0.070313 0.257813 0.234375 0.476563 0.464844 0.609376 c 1.957031 1.140624 2.902344 3.441406 2.3125 5.628906 c -0.59375 2.183594 -2.570313 3.695312 -4.832031 3.691406 c -2.265625 -0.003906 -4.238282 -1.519531 -4.824219 -3.707031 s 0.363281 -4.488281 2.324219 -5.621094 c 0.476562 -0.277344 0.640625 -0.886719 0.363281 -1.363281 c -0.132813 -0.230469 -0.347656 -0.398438 -0.605469 -0.464844 c -0.125 -0.035156 -0.257812 -0.042969 -0.390625 -0.027344 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwSystemShutdownSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSystemShutdownSymbolic;
