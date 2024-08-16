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
      <path d="m 11.9375 1 c -0.425781 0.027344 -0.800781 0.328125 -0.90625 0.757812 c 0 0 -0.210938 0.8125 -0.832031 1.640626 c -0.621094 0.832031 -1.53125 1.601562 -3.199219 1.601562 h -4 c -1.332031 0 -2.273438 0.8125 -2.644531 1.550781 c -0.371094 0.742188 -0.355469 1.449219 -0.355469 1.449219 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 0.71875 l 0.8125 3.242188 c 0.109375 0.445312 0.507812 0.757812 0.96875 0.757812 h 0.5 c 0.550781 0 1 -0.449219 1 -1 v -3 c 1.667969 0 2.578125 0.769531 3.199219 1.601562 c 0.621093 0.828126 0.832031 1.640626 0.832031 1.640626 c 0.28125 1.144531 1.96875 0.9375 1.96875 -0.242188 v -12 c 0 -0.503906 -0.375 -0.929688 -0.878906 -0.992188 c -0.0625 -0.007812 -0.121094 -0.011718 -0.183594 -0.007812 z m -0.9375 4.304688 v 5.390624 c -0.75 -0.71875 -1.703125 -1.378906 -3 -1.609374 v -2.171876 c 1.296875 -0.230468 2.25 -0.890624 3 -1.609374 z m 3 0.964843 v 3.457031 c 0.617188 -0.355468 0.996094 -1.015624 1 -1.726562 c 0 -0.714844 -0.382812 -1.375 -1 -1.730469 z m -11 0.730469 h 3 v 2 h -3 c -0.550781 0 -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMegaphonesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMegaphonesymbolic;
