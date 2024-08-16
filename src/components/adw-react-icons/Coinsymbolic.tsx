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
      <g fill="currentColor">
        <path d="m 8 0 c -4.417969 0 -8 3.582031 -8 8 s 3.582031 8 8 8 s 8 -3.582031 8 -8 s -3.582031 -8 -8 -8 z m 0 2 c 3.3125 0 6 2.6875 6 6 s -2.6875 6 -6 6 s -6 -2.6875 -6 -6 s 2.6875 -6 6 -6 z m 0 0"/>
        <path d="m 7 3 v 0.929688 c -1.464844 0.261718 -2.320312 1.132812 -2.320312 2.433593 c 0 1.1875 0.726562 1.984375 2.042968 2.214844 l 1.777344 0.3125 c 0.804688 0.136719 1.117188 0.355469 1.117188 0.808594 c 0 0.496093 -0.542969 0.785156 -1.453126 0.785156 c -0.933593 0 -1.707031 -0.324219 -2.6875 -1.121094 l -1.109374 1.441407 c 0.742187 0.632812 1.671874 1.066406 2.632812 1.253906 v 0.941406 h 2 v -0.921875 c 1.605469 -0.265625 2.558594 -1.199219 2.558594 -2.574219 c 0 -1.25 -0.820313 -2.042968 -2.378906 -2.296875 l -1.671876 -0.277343 c -0.683593 -0.117188 -0.957031 -0.316407 -0.957031 -0.71875 c 0 -0.4375 0.492188 -0.703126 1.300781 -0.703126 c 0.855469 0 1.628907 0.300782 2.484376 0.957032 l 1.046874 -1.464844 c -0.644531 -0.519531 -1.5 -0.890625 -2.382812 -1.054688 v -0.945312 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCoinsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCoinsymbolic;
