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
      <path d="m 12 1 v 2 h -3 c -0.859375 0 -1.59375 0.480469 -2.011719 1.007812 c -0.417969 0.523438 -0.648437 1.074219 -0.882812 1.542969 l -0.105469 0.210938 l -0.105469 -0.210938 c -0.191406 -0.382812 -0.386719 -0.816406 -0.671875 -1.25 c -0.414062 -0.632812 -1.207031 -1.300781 -2.222656 -1.300781 h -3 v 2 h 3 c 0.296875 0 0.316406 0.039062 0.550781 0.398438 c 0.164063 0.246093 0.34375 0.625 0.554688 1.050781 l 0.777343 1.550781 l -0.777343 1.550781 c -0.261719 0.523438 -0.476563 0.96875 -0.65625 1.199219 c -0.183594 0.226562 -0.199219 0.25 -0.449219 0.25 h -3 v 2 h 3 c 0.859375 0 1.59375 -0.480469 2.011719 -1.007812 c 0.417969 -0.523438 0.648437 -1.074219 0.882812 -1.542969 l 0.105469 -0.210938 l 0.105469 0.210938 c 0.164062 0.328125 0.335937 0.703125 0.5625 1.078125 c 0.414062 0.6875 1.222656 1.472656 2.332031 1.472656 h 3 v 2 h 1 v -0.007812 c 0.265625 0.003906 0.519531 -0.101563 0.707031 -0.285157 l 2 -2 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -2 -2 c -0.1875 -0.183594 -0.441406 -0.289063 -0.707031 -0.285157 v -0.007812 h -1 v 2 h -3 c -0.324219 0 -0.351562 -0.058594 -0.617188 -0.503906 c -0.148437 -0.242188 -0.304687 -0.574219 -0.488281 -0.945313 l -0.777343 -1.550781 l 0.777343 -1.550781 c 0.261719 -0.523438 0.476563 -0.96875 0.65625 -1.199219 c 0.183594 -0.226562 0.199219 -0.25 0.449219 -0.25 h 3 v 2 h 1 v -0.007812 c 0.265625 0.003906 0.519531 -0.101563 0.707031 -0.285157 l 2 -2 c 0.390625 -0.390625 0.390625 -1.023437 0 -1.414062 l -2 -2 c -0.1875 -0.183594 -0.441406 -0.289063 -0.707031 -0.285157 v -0.007812 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPlaylistShuffleSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPlaylistShuffleSymbolic;
