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
      <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -2.960938 -2.960938 c 1.507813 -1.75 2.421876 -4.027343 2.421876 -6.507812 v -0.5 c 0 -1.378906 -1.117188 -2.5 -2.5 -2.5 h -1.5 c -0.550782 0 -1 0.445312 -1 1 v 3 c 0 0.554688 0.449218 1 1 1 h 0.714843 c -0.261719 0.882812 -0.695312 1.691406 -1.257812 2.386719 z m 1.460938 9.53125 c -0.550782 0 -1 0.445312 -1 1 v 1.5 c 0 1.378906 1.121093 2.5 2.5 2.5 h 0.5 c 1.976562 0 3.820312 -0.582031 5.371093 -1.574219 l -2.183593 -2.1875 c -0.375 0.191407 -0.773438 0.351563 -1.1875 0.472657 v -0.710938 c 0 -0.554688 -0.445313 -1 -1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPhonedisabledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhonedisabledsymbolic;
