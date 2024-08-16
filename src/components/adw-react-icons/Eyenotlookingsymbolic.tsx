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
      <path d="m 13.980469 1.988281 c -0.261719 0.007813 -0.507813 0.117188 -0.6875 0.304688 l -0.984375 0.984375 c -1.285156 -0.828125 -2.78125 -1.273438 -4.308594 -1.277344 c -3.648438 0.003906 -6.832031 2.476562 -7.738281 6.011719 c 0.460937 1.746093 1.496093 3.285156 2.945312 4.371093 l -0.914062 0.910157 c -0.261719 0.25 -0.367188 0.625 -0.273438 0.972656 c 0.089844 0.351563 0.363281 0.625 0.714844 0.714844 c 0.347656 0.09375 0.722656 -0.011719 0.972656 -0.273438 l 11 -11 c 0.296875 -0.289062 0.382813 -0.726562 0.222657 -1.105469 c -0.160157 -0.382812 -0.535157 -0.625 -0.949219 -0.613281 z m -5.980469 2.011719 c 0.960938 0 1.886719 0.347656 2.613281 0.976562 l -1.421875 1.417969 c -0.34375 -0.257812 -0.761718 -0.394531 -1.191406 -0.394531 c -1.105469 0 -2 0.894531 -2 2 c 0 0.429688 0.140625 0.847656 0.394531 1.1875 l -1.417969 1.421875 c -0.628906 -0.726563 -0.972656 -1.652344 -0.976562 -2.609375 c 0 -2.210938 1.789062 -4 4 -4 z m 7.03125 2.207031 l -3.34375 3.34375 c -0.40625 0.960938 -1.171875 1.722657 -2.128906 2.128907 l -2.277344 2.277343 c 0.238281 0.027344 0.476562 0.039063 0.71875 0.042969 c 3.648438 -0.003906 6.832031 -2.476562 7.738281 -6.011719 c -0.164062 -0.617187 -0.402343 -1.214843 -0.707031 -1.78125 z m -7.53125 0.792969 c 0.277344 0 0.5 0.222656 0.5 0.5 s -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 s 0.222656 -0.5 0.5 -0.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwEyenotlookingsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEyenotlookingsymbolic;
