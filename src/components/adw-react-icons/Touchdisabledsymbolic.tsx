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
      <path d="m 3 0 c -1.175781 0 -2.199219 0.695312 -2.6875 1.6875 l 0.15625 -0.15625 l 14 14 l 1.0625 -1.0625 l -1.292969 -1.292969 l 1.46875 -1.46875 c 0.449219 -0.449219 0.386719 -1.632812 -0.695312 -1.71875 c -0.273438 0.003907 -0.53125 0.109375 -0.71875 0.304688 l -1.503907 1.433593 l -0.789062 -0.789062 v -4.9375 h -2 v 2.9375 l -2.9375 -2.9375 h 2.9375 v -2 c 0 -0.554688 0.445312 -1 1 -1 s 1 0.445312 1 1 v 2 h 1 c 1.644531 0 3 -1.355469 3 -3 s -1.355469 -3 -3 -3 z m -2.99609375 3.066406 c 0.03515625 1.59375 1.33593775 2.894532 2.92968775 2.929688 z m 1.99609375 4.878906 c -0.554688 0 -1 0.445313 -1 1 v 4.054688 s 0 3 3 3 h 6 c 0.726562 -0.003906 1.507812 -0.296875 2.152344 -0.785156 l -5.328125 -5.328125 c -0.070313 0.066406 -0.171875 0.113281 -0.324219 0.113281 c -0.5 0 -0.5 -0.5 -0.5 -0.5 v -0.4375 l -1.054688 -1.054688 c -0.527343 0.027344 -0.945312 0.457032 -0.945312 0.992188 v 0.5 s 0 0.5 -0.5 0.5 s -0.5 -0.5 -0.5 -0.5 v -0.554688 c 0 -0.554687 -0.445312 -1 -1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwTouchdisabledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTouchdisabledsymbolic;
