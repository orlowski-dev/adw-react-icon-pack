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
      <path d="m 9.5 0 c -0.828125 0 -1.5 0.671875 -1.5 1.5 s 0.671875 1.5 1.5 1.5 s 1.5 -0.671875 1.5 -1.5 s -0.671875 -1.5 -1.5 -1.5 z m -4.5 3.988281 c -0.292969 0.003907 -0.5625 0.175781 -0.683594 0.441407 l -0.976562 2.199218 c -0.171875 0.378906 -0.003906 0.820313 0.375 0.992188 s 0.820312 0.003906 0.992187 -0.375 l 0.777344 -1.714844 h 1.199219 l -2.34375 5.46875 h -3.339844 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 4 c 0.398438 0 0.761719 -0.238281 0.917969 -0.605469 l 0.730469 -1.707031 c 0.074218 0.101562 0.164062 0.1875 0.269531 0.257812 l 2.082031 0.753907 v 3.300781 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -4 c 0 -0.421875 -0.261719 -0.796875 -0.65625 -0.9375 l -1.730469 -0.632812 l 1.515625 -3.386719 l 1.316406 1.457031 c 0.285157 0.320312 0.78125 0.335938 1.085938 0.03125 l 2 -2 c 0.292969 -0.292969 0.292969 -0.769531 0 -1.0625 s -0.769531 -0.292969 -1.0625 0 l -1.441406 1.441406 l -1.472656 -1.671875 c -0.140626 -0.15625 -0.34375 -0.246093 -0.554688 -0.25 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwRunningSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwRunningSymbolic;
