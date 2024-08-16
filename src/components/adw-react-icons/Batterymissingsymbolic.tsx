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
      <path d="m 8.152344 4.007812 c -0.4375 -0.023437 -0.882813 0.046876 -1.300782 0.222657 c -1.117187 0.460937 -1.851562 1.558593 -1.851562 2.769531 h 2 c 0 -0.40625 0.242188 -0.765625 0.617188 -0.921875 s 0.800781 -0.074219 1.089843 0.214844 c 0.289063 0.289062 0.371094 0.714843 0.21875 1.089843 c -0.15625 0.378907 -0.519531 0.617188 -0.925781 0.617188 c -0.550781 0 -1 0.449219 -1 1 v 2 h 2 v -1.179688 c 0.785156 -0.277343 1.441406 -0.875 1.769531 -1.671874 c 0.464844 -1.117188 0.207031 -2.414063 -0.648437 -3.269532 c -0.535156 -0.535156 -1.242188 -0.835937 -1.96875 -0.871094 z m -0.152344 7.992188 c -0.550781 0 -1 0.449219 -1 1 c 0 0.554688 0.449219 1 1 1 s 1 -0.445312 1 -1 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0" fill="currentColor"/>
    <path d="m 7 0 c -1 0 -1 1 -1 1 v 1 h -1 s -0.707031 -0.015625 -1.449219 0.355469 c -0.738281 0.371093 -1.550781 1.3125 -1.550781 2.644531 v 8 s -0.015625 0.707031 0.355469 1.449219 c 0.371093 0.738281 1.3125 1.550781 2.644531 1.550781 h 6 s 0.707031 0.015625 1.449219 -0.355469 c 0.738281 -0.371093 1.550781 -1.3125 1.550781 -2.644531 v -8 c 0 -1.332031 -0.8125 -2.273438 -1.550781 -2.644531 c -0.742188 -0.371094 -1.449219 -0.355469 -1.449219 -0.355469 h -1 v -1 c 0 -1 -1 -1 -1 -1 z m 0 3 h 2 v 0.125 c 0.609375 0.160156 1.171875 0.457031 1.644531 0.875 h 0.355469 c 0.554688 0 1 0.445312 1 1 v 8 c 0 0.554688 -0.445312 1 -1 1 h -1.273438 c -0.355468 0.617188 -1.015624 0.996094 -1.726562 1 c -0.710938 -0.003906 -1.371094 -0.382812 -1.726562 -1 h -1.273438 c -0.554688 0 -1 -0.445312 -1 -1 v -8 c 0 -0.554688 0.445312 -1 1 -1 h 0.355469 c 0.472656 -0.414062 1.035156 -0.710938 1.644531 -0.863281 z m 0 0" fill="#2e3436" fill-opacity="0.34902"/>
    </svg>
  );
};

const AdwBatterymissingsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBatterymissingsymbolic;
