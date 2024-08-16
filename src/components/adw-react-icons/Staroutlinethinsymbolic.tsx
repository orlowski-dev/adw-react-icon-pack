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
      <path d="m 7.984375 0.121094 l -1.929687 5.875 l -6.1250005 -0.019532 l 4.9960935 3.652344 l -1.914062 5.816406 l 5.015625 -3.617187 l 4.941406 3.613281 l -0.46875 -1.464844 l -1.421875 -4.421874 l 4.964844 -3.582032 l -6.183594 -0.023437 z m -0.011719 3.238281 l 1.15625 3.589844 l 3.832032 0.011719 l -3.058594 2.207031 l 1.171875 3.648437 l -3.042969 -2.226562 l -3.105469 2.242187 l 1.175781 -3.578125 l -3.089843 -2.265625 l 3.765625 0.011719 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwStaroutlinethinsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStaroutlinethinsymbolic;
