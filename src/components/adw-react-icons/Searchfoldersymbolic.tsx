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
      <path d="m 3 1 c -1.644531 0 -3 1.355469 -3 3 v 8 c 0 1.644531 1.355469 3 3 3 h 3 c 1 0 1 -1 1 -1 s 0 -1 -1 -1 h -3 c -0.5625 0 -1 -0.4375 -1 -1 v -7 h 11 c 0.5625 0 1 0.4375 1 1 v 1 c 0 1 1 1 1 1 s 1 0 1 -1 v -1 c 0 -1.644531 -1.355469 -3 -3 -3 h -3.585938 l -1.707031 -1.707031 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 2 h 3.585938 l 1 1 h -5.585938 c 0 -0.5625 0.4375 -1 1 -1 z m 8.5 5 c -1.921875 0 -3.5 1.578125 -3.5 3.5 s 1.578125 3.5 3.5 3.5 c 0.601562 0 1.164062 -0.15625 1.660156 -0.425781 h 0.003906 l 1.128907 1.132812 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 s 0.390625 -1.023437 0 -1.414062 l -1.132812 -1.128907 c 0 -0.003906 0 -0.003906 0 -0.003906 c 0.269531 -0.496094 0.425781 -1.058594 0.425781 -1.660156 c 0 -1.921875 -1.578125 -3.5 -3.5 -3.5 z m 0 2 c 0.839844 0 1.5 0.660156 1.5 1.5 c 0 0.40625 -0.15625 0.769531 -0.410156 1.035156 c -0.007813 0.007813 -0.019532 0.015625 -0.03125 0.027344 c -0.007813 0.007812 -0.015625 0.019531 -0.023438 0.027344 c -0.265625 0.253906 -0.628906 0.410156 -1.035156 0.410156 c -0.839844 0 -1.5 -0.660156 -1.5 -1.5 s 0.660156 -1.5 1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSearchfoldersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSearchfoldersymbolic;
