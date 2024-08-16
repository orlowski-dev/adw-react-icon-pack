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
      <g fill="currentColor">
        <path d="m 8.152344 3.007812 c 0.726562 0.035157 1.433594 0.335938 1.96875 0.871094 c 0.855468 0.855469 1.113281 2.152344 0.652344 3.269532 c -0.332032 0.796874 -0.988282 1.390624 -1.773438 1.671874 v 1.179688 h -2 v -2 c 0 -0.550781 0.449219 -1 1 -1 c 0.40625 0 0.769531 -0.242188 0.925781 -0.617188 c 0.152344 -0.375 0.070313 -0.800781 -0.21875 -1.089843 c -0.289062 -0.289063 -0.714843 -0.371094 -1.089843 -0.214844 c -0.375 0.152344 -0.617188 0.515625 -0.617188 0.921875 h -2 c 0 -1.210938 0.734375 -2.308594 1.851562 -2.769531 c 0.417969 -0.175781 0.863282 -0.246094 1.300782 -0.222657 z m -0.152344 7.992188 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0"/>
        <path d="m 11.183594 1.273438 c -1.75 -1.753907 -4.617188 -1.753907 -6.371094 0 l -3.5625 3.5625 c -1.75 1.75 -1.75 4.617187 0 6.371093 l 3.5625 3.5625 c 1.753906 1.753907 4.621094 1.75 6.371094 0 l 3.566406 -3.5625 c 1.75 -1.753906 1.75 -4.617187 0 -6.371093 z m -1.414063 1.414062 l 3.566407 3.5625 c 0.992187 0.992188 0.992187 2.546875 0 3.539062 l -3.566407 3.566407 c -0.992187 0.992187 -2.546875 0.992187 -3.539062 0 l -3.566407 -3.5625 c -0.992187 -0.992188 -0.992187 -2.550781 0 -3.542969 l 3.566407 -3.566406 c 0.992187 -0.992188 2.546875 -0.992188 3.539062 0.003906 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwQuestionOutlineSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwQuestionOutlineSymbolic;
