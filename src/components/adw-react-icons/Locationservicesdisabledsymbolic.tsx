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
      <path d="m 8 0 c -1.894531 0 -3.582031 0.882812 -4.679688 2.257812 l -1.789062 -1.789062 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -3.652344 -3.652344 c 0.449219 -0.546875 0.855469 -1.082031 1.167969 -1.570312 c 0.261719 -0.414063 0.46875 -0.808594 0.585937 -1.171875 l -0.019531 0.003906 c 0.25 -0.664063 0.382813 -1.367187 0.386719 -2.078125 c 0.003906 -3.3125 -2.6875 -6 -6 -6 z m 0 3.695312 c 1.273438 -0.003906 2.308594 1.03125 2.308594 2.304688 c 0 0.878906 -0.492188 1.640625 -1.214844 2.03125 l -3.125 -3.125 c 0.390625 -0.722656 1.152344 -1.210938 2.03125 -1.210938 z m -5.9375 1.429688 c -0.039062 0.289062 -0.0625 0.578125 -0.0625 0.875 c 0.003906 0.710938 0.136719 1.414062 0.386719 2.082031 l -0.015625 -0.007812 c 0.636718 1.988281 3.78125 5.082031 5.628906 6.925781 v 0.003906 v -0.003906 c 0.5625 -0.5625 1.25 -1.253906 1.945312 -1.992188 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwLocationservicesdisabledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLocationservicesdisabledsymbolic;
