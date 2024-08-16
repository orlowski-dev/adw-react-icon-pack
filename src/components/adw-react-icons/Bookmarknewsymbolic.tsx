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
        <path d="m 3.523438 0 c -1.089844 0 -1.914063 0.679688 -2.230469 1.292969 c -0.3125 0.617187 -0.300781 1.207031 -0.300781 1.207031 v 12.117188 l 1.421874 -0.710938 c 0.011719 -0.003906 0.023438 -0.007812 0.03125 -0.011719 l 4 -2 c 0.496094 -0.246093 0.695313 -0.847656 0.449219 -1.339843 c -0.246093 -0.496094 -0.847656 -0.695313 -1.34375 -0.449219 l -1.550781 0.777343 v -0.003906 l -1.007812 0.503906 v -6.882812 s 0.003906 -0.015625 0.007812 -0.039062 v -1.460938 c 0 -0.554688 0.445312 -1 1 -1 h 4 c 0.554688 0 1 0.445312 1 1 v 3 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 c 0 -0.035156 0 -0.074219 -0.007812 -0.109375 v -3.390625 s 0.015624 -0.582031 -0.292969 -1.199219 c -0.304688 -0.613281 -1.121094 -1.300781 -2.207031 -1.300781 z m 0 0" fill-rule="evenodd"/>
        <path d="m 11 8 v 3 h -3 v 2 h 3 v 3 h 2 v -3 h 3 v -2 h -3 v -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBookmarknewsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBookmarknewsymbolic;
