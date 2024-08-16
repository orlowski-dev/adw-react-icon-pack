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
      <path d="m 7.96875 16 c 0.523438 0.015625 1.03125 -0.386719 1.03125 -1 v -3 h 5 c 0.832031 0 1.523438 -0.5625 1.769531 -1.050781 c 0.246094 -0.492188 0.230469 -0.949219 0.230469 -0.949219 v -4 s 0.015625 -0.457031 -0.230469 -0.949219 c -0.246093 -0.488281 -0.9375 -1.050781 -1.769531 -1.050781 h -5 v -3 c 0 -0.613281 -0.507812 -1.015625 -1.03125 -1 c -0.238281 0.00390625 -0.480469 0.0976562 -0.675781 0.292969 l -6 6 c -0.027344 0.027343 -0.050781 0.054687 -0.078125 0.085937 c -0.371094 0.472656 -0.554688 1.046875 -0.554688 1.621094 s 0.183594 1.148438 0.554688 1.621094 c 0.027344 0.03125 0.050781 0.058594 0.078125 0.085937 l 6 6 c 0.195312 0.195313 0.4375 0.289063 0.675781 0.292969 z m -0.914062 -3 c -1.46875 -1.601562 -2.765626 -3 -4.273438 -4.632812 c -0.117188 -0.152344 -0.171875 -0.261719 -0.175781 -0.367188 c 0.003906 -0.105469 0.058593 -0.214844 0.175781 -0.367188 c 1.507812 -1.632812 2.804688 -3.03125 4.273438 -4.632812 l -0.054688 2 v 1 h 7 v 4 h -7 v 1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwArrowLeftSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArrowLeftSymbolic;
