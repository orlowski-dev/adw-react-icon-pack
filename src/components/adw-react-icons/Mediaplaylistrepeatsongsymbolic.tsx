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
      <path d="m 7 1 v 2 h -3 c -2.199219 0 -4 1.800781 -4 4 v 2 c 0 1.019531 0.386719 1.964844 1.019531 2.671875 c 0.367188 0.410156 1 0.445313 1.410157 0.078125 c 0.414062 -0.367188 0.449218 -1 0.078124 -1.414062 c -0.316406 -0.351563 -0.507812 -0.8125 -0.507812 -1.335938 v -2 c 0 -1.125 0.875 -2 2 -2 h 3 v 2 h 1 v -0.007812 c 0.265625 0.003906 0.519531 -0.101563 0.707031 -0.285157 l 2 -2 c 0.207031 -0.207031 0.3125 -0.496093 0.289063 -0.789062 c 0 -0.015625 -0.003906 -0.03125 -0.007813 -0.046875 c -0.007812 -0.070313 -0.023437 -0.136719 -0.046875 -0.203125 c -0.011718 -0.035157 -0.023437 -0.070313 -0.042968 -0.101563 c 0 -0.007812 -0.003907 -0.011718 -0.007813 -0.019531 c -0.011719 -0.023437 -0.027344 -0.046875 -0.039063 -0.070313 c -0.007812 -0.011718 -0.019531 -0.027343 -0.027343 -0.039062 c -0.015625 -0.019531 -0.027344 -0.042969 -0.042969 -0.0625 c -0.007812 -0.007812 -0.015625 -0.015625 -0.023438 -0.023438 c -0.015624 -0.019531 -0.03125 -0.039062 -0.050781 -0.058593 l -2 -2 c -0.1875 -0.183594 -0.441406 -0.289063 -0.707031 -0.285157 v -0.007812 z m 7 1 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 z m 1 5 c -0.550781 0 -1 0.449219 -1 1 v 1.007812 c 0 1.125 -0.875 2 -2 2 h -4 v -2.007812 h -1 v 0.007812 c -0.265625 -0.003906 -0.519531 0.101563 -0.707031 0.285157 l -2 2 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 l 2 2 c 0.1875 0.183594 0.441406 0.289063 0.707031 0.285157 v 0.007812 h 1 v -1.992188 h 4 c 2.199219 0 4 -1.804687 4 -4 v -1.007812 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwMediaplaylistrepeatsongsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMediaplaylistrepeatsongsymbolic;
