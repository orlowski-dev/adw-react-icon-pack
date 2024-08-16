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
      <path d="m 4 1 c -1.644531 0 -3 1.355469 -3 3 v 1 h 1 v -1 c 0 -1.109375 0.890625 -2 2 -2 h 1 v -1 z m 2 0 v 1 h 4 v -1 z m 5 0 v 1 h 1 c 1.109375 0 2 0.890625 2 2 v 1 h 1 v -1 c 0 -1.644531 -1.355469 -3 -3 -3 z m -3.03125 2 c -0.050781 0 -0.101562 0 -0.152344 0.003906 c -1.644531 0.09375 -2.90625 1.359375 -2.8125 3 h 2 c -0.035156 -0.5625 0.371094 -0.96875 0.9375 -1 c 0.5625 -0.03125 1.027344 0.375 1.0625 0.9375 v 0.03125 c 0.003906 0.128906 -0.035156 0.324219 -0.125 0.4375 c -0.230468 0.273438 -0.484375 0.496094 -0.6875 0.65625 c -0.230468 0.171875 -0.476562 0.382813 -0.71875 0.6875 c -0.246094 0.304688 -0.46875 0.746094 -0.46875 1.25 c -0.007812 0.527344 0.46875 1 1 1 c 0.523438 0 1 -0.46875 1 -0.992187 c 0 0 0.007813 -0.011719 0.027344 -0.039063 c 0.050781 -0.0625 0.1875 -0.167968 0.375 -0.3125 c 1.21875 -0.921875 1.59375 -1.441406 1.59375 -2.84375 c -0.085938 -1.589844 -1.453125 -2.824218 -3.03125 -2.816406 z m -6.96875 3 v 4 h 1 v -4 z m 13 0 v 4 h 1 v -4 z m -13 5 v 1 c 0 1.644531 1.355469 3 3 3 h 1 v -1 h -1 c -1.109375 0 -2 -0.890625 -2 -2 v -1 z m 13 0 v 1 c 0 1.109375 -0.890625 2 -2 2 h -1 v 1 h 1 c 1.644531 0 3 -1.355469 3 -3 v -1 z m -5.996094 0.003906 c -0.554687 0 -1 0.449219 -1 1 c 0 0.550782 0.445313 1 1 1 c 0.550782 0 1 -0.449218 1 -1 c 0 -0.550781 -0.449218 -1 -1 -1 z m -2.003906 2.996094 v 1 h 4 v -1 z m 0 0" fill="currentColor" fill-opacity="0.35"/>
    </svg>
  );
};

const AdwItemMissingSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwItemMissingSymbolic;
