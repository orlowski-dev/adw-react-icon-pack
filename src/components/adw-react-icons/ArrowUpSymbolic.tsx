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
      <path d="m 0 7.96875 c -0.015625 0.523438 0.386719 1.03125 1 1.03125 h 3 v 5 c 0 0.832031 0.5625 1.523438 1.050781 1.769531 c 0.492188 0.246094 0.949219 0.230469 0.949219 0.230469 h 4 s 0.457031 0.015625 0.949219 -0.230469 c 0.488281 -0.246093 1.050781 -0.9375 1.050781 -1.769531 v -5 h 3 c 0.613281 0 1.015625 -0.507812 1 -1.03125 c -0.003906 -0.238281 -0.097656 -0.480469 -0.292969 -0.675781 l -6 -6 c -0.027343 -0.027344 -0.054687 -0.050781 -0.085937 -0.074219 c -0.472656 -0.375 -1.046875 -0.558594 -1.621094 -0.558594 s -1.148438 0.183594 -1.621094 0.558594 c -0.03125 0.023438 -0.058594 0.046875 -0.085937 0.074219 l -6 6 c -0.1953128 0.195312 -0.28906275 0.4375 -0.292969 0.675781 z m 3 -0.914062 c 1.601562 -1.46875 3 -2.765626 4.632812 -4.269532 c 0.152344 -0.121094 0.261719 -0.175781 0.367188 -0.179687 c 0.105469 0.003906 0.214844 0.058593 0.371094 0.179687 c 1.628906 1.503906 3.027344 2.800782 4.628906 4.269532 l -2 -0.054688 h -1 v 7 h -4 v -7 h -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrowUpSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowUpSymbolic;
