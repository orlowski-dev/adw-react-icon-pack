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
      <path d="m 5.210938 1.269531 c 0.703124 -0.808593 1.71875 -1.269531 2.789062 -1.269531 c 1.113281 0 2.109375 0.492188 2.789062 1.269531 c 1.066407 -0.074219 2.113282 0.316407 2.867188 1.074219 c 0.757812 0.753906 1.148438 1.800781 1.074219 2.867188 c 0.808593 0.703124 1.269531 1.71875 1.269531 2.789062 s -0.460938 2.085938 -1.269531 2.789062 c 0.074219 1.066407 -0.316407 2.113282 -1.074219 2.867188 c -0.753906 0.757812 -1.800781 1.148438 -2.867188 1.074219 c -0.703124 0.808593 -1.71875 1.269531 -2.789062 1.269531 s -2.085938 -0.460938 -2.789062 -1.269531 c -1.066407 0.074219 -2.113282 -0.316407 -2.867188 -1.074219 c -0.757812 -0.753906 -1.148438 -1.800781 -1.074219 -2.867188 c -0.808593 -0.703124 -1.269531 -1.71875 -1.269531 -2.789062 c 0 -1.113281 0.492188 -2.109375 1.269531 -2.789062 c -0.074219 -1.066407 0.316407 -2.113282 1.074219 -2.867188 c 0.753906 -0.757812 1.800781 -1.148438 2.867188 -1.074219 z m 5.75 5.242188 c 0.136718 -0.179688 0.160156 -0.414063 0.070312 -0.621094 c -0.089844 -0.203125 -0.285156 -0.339844 -0.507812 -0.359375 c -0.222657 -0.023438 -0.4375 0.082031 -0.5625 0.265625 l -2.65625 3.714844 l -1.332032 -1.332031 c -0.242187 -0.226563 -0.621094 -0.21875 -0.855468 0.015624 c -0.234376 0.234376 -0.238282 0.613282 -0.011719 0.855469 l 1.84375 1.84375 c 0.128906 0.128907 0.304687 0.195313 0.484375 0.179688 c 0.183594 -0.015625 0.347656 -0.109375 0.453125 -0.253907 z m 0 0" fill="currentColor" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwVerifiedcheckmarksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwVerifiedcheckmarksymbolic;
