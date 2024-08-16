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
      <path d="m 8 0 v 4.210938 l 0.679688 2.070312 c 0.128906 0.410156 0.511718 0.691406 0.941406 0.695312 l 2.253906 0.007813 l -1.699219 1.199219 c -0.367187 0.257812 -0.515625 0.726562 -0.367187 1.148437 l 0.765625 2.191407 l -1.964844 -1.304688 c -0.203125 -0.058594 -0.40625 -0.109375 -0.609375 -0.164062 v 2.222656 l 0.046875 -0.03125 l 3.898437 2.589844 c 0.800782 0.527343 1.8125 -0.261719 1.496094 -1.164063 l -1.5 -4.289063 l 3.640625 -2.574218 c 0.792969 -0.5625 0.398438 -1.8125 -0.574219 -1.816406 l -4.65625 -0.015626 l -1.402343 -4.285156 c -0.132813 -0.410156 -0.515625 -0.68749975 -0.949219 -0.68749975 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    <path d="m 8 0 c -0.429688 0 -0.8125 0.277344 -0.949219 0.683594 l -1.449219 4.339844 l -4.589843 -0.015626 c -0.9843752 -0.007812 -1.386719 1.253907 -0.582031 1.816407 l 3.628906 2.558593 l -1.5 4.285157 c -0.316406 0.902343 0.6875 1.691406 1.488281 1.171875 l 3.953125 -2.5625 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwSemiStarredSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSemiStarredSymbolic;
