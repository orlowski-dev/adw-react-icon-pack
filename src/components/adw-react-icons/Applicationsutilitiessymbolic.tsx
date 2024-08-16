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
      <path d="m 2.933594 0 c -1.625 0 -2.933594 1.332031 -2.933594 2.988281 v 10.027344 c 0 1.652344 1.308594 2.984375 2.933594 2.984375 h 0.132812 c 1.625 0 2.933594 -1.332031 2.933594 -2.984375 v -10.027344 c 0 -1.65625 -1.308594 -2.988281 -2.933594 -2.988281 z m 2.59375 0 c 0.878906 0.714844 1.46875 1.792969 1.46875 3 v 1 h 2.125 c -0.074219 -1.09375 1.25 -2 2 -2 c 0.679687 0 1 0.011719 1 1 v 1 h 1.21875 c 1.230468 -0.601562 1.78125 -1.96875 1.78125 -2.6875 c 0 -0.734375 -2.386719 -1.3125 -3.6875 -1.3125 z m 1.472656 5 v 4.3125 c 2.765625 2.660156 6.125 2.40625 6.125 2.40625 s 0.351562 -1.519531 -1.90625 -4.03125 l -2.375 -2.6875 h -1.78125 c -0.019531 0.003906 -0.042969 -0.003906 -0.0625 0 z m 2.976562 2.53125 l 1.683594 1.738281 c -1.800781 0.164063 -2.152344 -0.859375 -1.683594 -1.738281 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwApplicationsutilitiessymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwApplicationsutilitiessymbolic;
