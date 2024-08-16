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
      <path d="m 2.96875 15.039062 c -1.644531 0 -3 -1.355468 -3 -3 v -7 c 0 -1.644531 1.355469 -3 3 -3 h 10 c 1.644531 0 3 1.355469 3 3 v 7 c 0 1.644532 -1.355469 3 -3 3 z m 0 -2 h 10 c 0.570312 0 1 -0.429687 1 -1 v -7 c 0 -0.570312 -0.429688 -1 -1 -1 h -10 c -0.570312 0 -1 0.429688 -1 1 v 7 c 0 0.570313 0.429688 1 1 1 z m 5 -2.082031 c -0.261719 0 -0.511719 -0.101562 -0.695312 -0.28125 l -3 -2.917969 c -0.1875 -0.183593 -0.296876 -0.433593 -0.300782 -0.570312 l -0.003906 -1.148438 h 8 l -0.003906 1.148438 c -0.003906 0.136719 -0.109375 0.386719 -0.300782 0.570312 l -3 2.917969 c -0.183593 0.179688 -0.433593 0.28125 -0.695312 0.28125 z m 0 0" fill="currentColor" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwBoxDownSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBoxDownSymbolic;
