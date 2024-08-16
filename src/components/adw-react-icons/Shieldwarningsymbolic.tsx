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
        <path d="m 0 2.316406 v 5.507813 c 0 2.214843 1.183594 4.257812 3.109375 5.355469 l 4.890625 2.796874 l 4.890625 -2.796874 c 1.925781 -1.097657 3.109375 -3.140626 3.109375 -5.355469 v -5.507813 l -8 -2.285156 z m 14.726562 1.71875 l -0.726562 -0.964844 v 4.753907 c 0 1.492187 -0.804688 2.878906 -2.101562 3.617187 l -4.394532 2.511719 h 0.992188 l -4.394532 -2.511719 c -1.296874 -0.738281 -2.101562 -2.125 -2.101562 -3.617187 v -4.753907 l -0.726562 0.964844 l 7 -2 h -0.546876 z m 0 0"/>
        <path d="m 7 4 v 2.988281 c 0 0.558594 0.453125 1.011719 1.011719 1.011719 c 0.550781 -0.007812 0.996093 -0.460938 0.988281 -1.011719 v -2.988281 z m 0 0"/>
        <path d="m 9 10 c 0 0.550781 -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 s 1 0.449219 1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwShieldwarningsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwShieldwarningsymbolic;
