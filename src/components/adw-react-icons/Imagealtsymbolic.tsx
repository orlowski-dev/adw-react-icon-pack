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
        <path d="m 6.988281 5.996094 c 0 0.550781 -0.449219 1 -1 1 c -0.554687 0 -1 -0.449219 -1 -1 c 0 -0.554688 0.445313 -1 1 -1 c 0.550781 0 1 0.445312 1 1 z m 0 0"/>
        <path d="m 11.96875 3 c 0.570312 0 1.03125 0.460938 1.03125 1.03125 v 7.9375 c 0 0.570312 -0.460938 1.03125 -1.03125 1.03125 h -7.9375 c -0.570312 0 -1.03125 -0.460938 -1.03125 -1.03125 v -7.9375 c 0 -0.570312 0.460938 -1.03125 1.03125 -1.03125 z m -10.96875 1.03125 v 7.9375 c 0 1.679688 1.351562 3.03125 3.03125 3.03125 h 7.9375 c 1.679688 0 3.03125 -1.351562 3.03125 -3.03125 v -7.9375 c 0 -1.679688 -1.351562 -3.03125 -3.03125 -3.03125 h -7.9375 c -1.679688 0 -3.03125 1.351562 -3.03125 3.03125 z m 0 0"/>
        <path d="m 2.820312 12.359375 l 2.320313 -2.25 c 0.175781 -0.171875 0.464844 -0.167969 0.636719 0.007813 l 3.863281 3.980468 l 0.71875 -0.695312 l -3.863281 -3.980469 c -0.5625 -0.578125 -1.476563 -0.59375 -2.054688 -0.03125 l -2.316406 2.25 z m 0 0"/>
        <path d="m 7.136719 11.109375 l 2.097656 -2.015625 c 0.175781 -0.167969 0.460937 -0.164062 0.628906 0.007812 l 3.78125 3.8125 l 0.710938 -0.703124 l -3.78125 -3.8125 c -0.558594 -0.5625 -1.460938 -0.574219 -2.035157 -0.023438 l -2.097656 2.015625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwImagealtsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwImagealtsymbolic;
