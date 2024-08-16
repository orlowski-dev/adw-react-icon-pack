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
      <path d="m 8.5 0 c -0.828125 0 -1.5 0.671875 -1.5 1.5 s 0.671875 1.5 1.5 1.5 s 1.5 -0.671875 1.5 -1.5 s -0.671875 -1.5 -1.5 -1.5 z m -2.5 4 c -0.117188 0 -0.230469 0.027344 -0.335938 0.082031 l -2 1 c -0.144531 0.070313 -0.261718 0.1875 -0.332031 0.332031 l -1 2 c -0.1875 0.371094 -0.039062 0.820313 0.332031 1.007813 c 0.371094 0.183594 0.820313 0.035156 1.003907 -0.335937 l 0.890625 -1.777344 l 1.5625 -0.773438 c -0.042969 0.074219 -0.726563 2.835938 -0.726563 2.835938 c -0.230469 0.949218 0.398438 1.523437 0.398438 1.523437 l 3.351562 2.703125 l 0.90625 2.71875 c 0.175781 0.523438 0.742188 0.808594 1.265625 0.632813 c 0.523438 -0.175781 0.808594 -0.742188 0.632813 -1.265625 l -1 -3 c -0.0625 -0.183594 -0.171875 -0.34375 -0.324219 -0.464844 l -2 -1.597656 l 0.679688 -2.714844 l 0.25 0.625 c 0.085937 0.222656 0.28125 0.390625 0.515624 0.449219 l 2 0.5 c 0.402344 0.097656 0.808594 -0.144531 0.910157 -0.546875 c 0.097656 -0.40625 -0.144531 -0.8125 -0.546875 -0.910156 l -1.628906 -0.40625 l -0.855469 -2.144532 c -0.117188 -0.285156 -0.390625 -0.472656 -0.699219 -0.472656 z m -1.164062 6.328125 l -0.710938 2.128906 l -1.832031 1.835938 c -0.390625 0.390625 -0.390625 1.023437 0 1.414062 s 1.023437 0.390625 1.414062 0 l 2 -2 c 0.109375 -0.109375 0.191407 -0.242187 0.242188 -0.390625 l 0.542969 -1.628906 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwWalkingSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwWalkingSymbolic;
