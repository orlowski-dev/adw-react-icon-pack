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
      <g fill="#2e3436">
        <path d="m 9 1.007812 c 0.296875 -0.003906 0.578125 0.125 0.769531 0.351563 l 3.230469 3.640625 h 1 c 1.09375 0 2 0.84375 2 2 v 2 c 0 1.089844 -0.910156 2 -2 2 h -1 l -3.230469 3.640625 c -0.210937 0.253906 -0.492187 0.363281 -0.769531 0.359375 z m -3.039062 2.980469 c 0.222656 -0.007812 0.453124 0.058594 0.644531 0.203125 c 0.261719 0.199219 0.394531 0.5 0.394531 0.804688 v 0.066406 c -0.011719 0.1875 -0.078125 0.371094 -0.199219 0.527344 c -1.074219 1.429687 -1.074219 3.390625 0 4.816406 c 0.121094 0.160156 0.1875 0.34375 0.199219 0.53125 v 0.066406 c 0 0.304688 -0.132812 0.605469 -0.394531 0.804688 c -0.441407 0.332031 -1.066407 0.242187 -1.398438 -0.199219 c -0.804687 -1.066406 -1.207031 -2.335937 -1.207031 -3.609375 s 0.402344 -2.542969 1.207031 -3.613281 c 0.183594 -0.246094 0.464844 -0.382813 0.753907 -0.398438 z m 0 0"/>
        <path d="m 2.539062 1.96875 c 0.191407 -0.003906 0.386719 0.054688 0.558594 0.167969 c 0.457032 0.3125 0.578125 0.933593 0.269532 1.390625 c -1.824219 2.707031 -1.824219 6.238281 0 8.945312 c 0.308593 0.457032 0.1875 1.078125 -0.269532 1.390625 c -0.457031 0.308594 -1.078125 0.1875 -1.390625 -0.269531 c -1.136719 -1.691406 -1.707031 -3.640625 -1.707031 -5.59375 s 0.570312 -3.902344 1.707031 -5.59375 c 0.195313 -0.285156 0.511719 -0.4375 0.832031 -0.4375 z m 0 0" fill-opacity="0.34902"/>
    </g>
    </svg>
  );
};

const AdwAudiovolumemediumsymbolicrtl = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAudiovolumemediumsymbolicrtl;
