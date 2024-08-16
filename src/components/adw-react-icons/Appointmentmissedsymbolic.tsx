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
      <path d="m 6.5 0 c -3.578125 0 -6.5 2.921875 -6.5 6.5 s 2.921875 6.5 6.5 6.5 c 0.171875 0 0.332031 -0.019531 0.5 -0.03125 v -2.03125 c -0.167969 0.019531 -0.328125 0.0625 -0.5 0.0625 c -2.496094 0 -4.5 -2.003906 -4.5 -4.5 s 2.003906 -4.5 4.5 -4.5 s 4.5 2.003906 4.5 4.5 c 0 0.171875 -0.042969 0.332031 -0.0625 0.5 h 2.03125 c 0.011719 -0.167969 0.03125 -0.328125 0.03125 -0.5 c 0 -3.578125 -2.921875 -6.5 -6.5 -6.5 z m 0 3 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 2.5 h -1.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -3 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 0 0" fill="#2e3436" fill-opacity="0.35"/>
    <path d="m 11.714844 8.011719 c -0.960938 0.066406 -1.863282 0.480469 -2.542969 1.160156 c -1.5625 1.5625 -1.5625 4.09375 0 5.65625 s 4.09375 1.5625 5.65625 0 s 1.5625 -4.09375 0 -5.65625 c -0.820313 -0.820313 -1.957031 -1.246094 -3.113281 -1.160156 z m -1.128906 1.570312 c 0.253906 0 0.511718 0.101563 0.707031 0.296875 l 0.707031 0.707032 l 0.707031 -0.707032 c 0.390625 -0.390625 1.023438 -0.390625 1.414063 0 s 0.390625 1.023438 0 1.414063 l -0.707032 0.707031 l 0.707032 0.707031 c 0.390625 0.390625 0.390625 1.023438 0 1.414063 s -1.023438 0.390625 -1.414063 0 l -0.707031 -0.707032 l -0.707031 0.707032 c -0.390625 0.390625 -1.023438 0.390625 -1.414063 0 s -0.390625 -1.023438 0 -1.414063 l 0.707032 -0.707031 l -0.707032 -0.707031 c -0.390625 -0.390625 -0.390625 -1.023438 0 -1.414063 c 0.195313 -0.195312 0.453125 -0.296875 0.707032 -0.296875 z m 0 0" class="error" fill="#e01b24"/>
    </svg>
  );
};

const AdwAppointmentmissedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAppointmentmissedsymbolic;
