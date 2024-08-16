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
      <path d="m 0 10 c 0 3.300781 2.699219 6 6 6 s 6 -2.699219 6 -6 v -0.003906 c -0.003906 -0.699219 -0.277344 -1.34375 -0.519531 -1.996094 h 1.519531 c 0.550781 0 1 -0.449219 1 -1 v -1 h 1 c 0.550781 0 1 -0.449219 1 -1 v -4 c 0 -0.550781 -0.449219 -1 -1 -1 h -3 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 l -3.953125 3.949219 c -0.441406 -0.105469 -0.875 -0.238282 -1.332032 -0.242188 c -0.003906 0 -0.003906 0 -0.007812 0 c -3.300781 0 -6 2.699219 -6 6 z m 2 0 c 0 -2.21875 1.777344 -3.996094 3.996094 -4 c 0.460937 0.003906 0.917968 0.085938 1.347656 0.246094 c 0.367188 0.136718 0.777344 0.046875 1.054688 -0.230469 l 4.015624 -4.015625 h 1.585938 v 2 h -1 c -0.550781 0 -1 0.449219 -1 1 v 1 h -1 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 l -0.617188 0.617187 c -0.3125 0.3125 -0.382812 0.796875 -0.171875 1.1875 c 0.324219 0.582032 0.492188 1.238282 0.496094 1.90625 c -0.003906 2.21875 -1.78125 3.996094 -4 3.996094 c -2.222656 0 -4 -1.777344 -4 -4 z m 0 0"/>
    <path d="m 5 12 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 s -0.449219 1 -1 1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwKeysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeysymbolic;
