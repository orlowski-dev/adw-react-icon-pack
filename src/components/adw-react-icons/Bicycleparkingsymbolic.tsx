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
        <path d="m 1 3 c -0.550781 0 -1 0.449219 -1 1 v 11 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -11 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0"/>
        <path d="m 1 4.96875 c -0.53125 0 -0.9609375 0.464844 -0.9609375 1.039062 c 0 0.574219 0.4296875 1.042969 0.9609375 1.042969 h 5.542969 h 0.066406 c 0.734375 -0.054687 1.320313 0.535157 1.398437 1.320313 c -0.027343 0.882812 -0.644531 1.585937 -1.464843 1.585937 h -5.542969 c -0.53125 0 -0.9609375 0.464844 -0.9609375 1.042969 c 0 0.273438 0.1015625 0.539062 0.2812495 0.734375 c 0.179688 0.199219 0.425782 0.308594 0.679688 0.308594 h 5.542969 c 1.875 0 3.417969 -1.671875 3.417969 -3.703125 c 0 -0.023438 0 -0.046875 -0.003907 -0.070313 c -0.121093 -1.9375 -1.6875 -3.425781 -3.476562 -3.296875 l 0.0625 -0.003906 z m 0 0"/>
        <path d="m 7 6 c -2.753906 0 -5 2.246094 -5 5 s 2.246094 5 5 5 s 5 -2.246094 5 -5 s -2.246094 -5 -5 -5 z m 0 1 c 2.214844 0 4 1.785156 4 4 s -1.785156 4 -4 4 s -4 -1.785156 -4 -4 s 1.785156 -4 4 -4 z m 0 0"/>
        <path d="m 10 3.992188 l -0.417969 0.777343 l 5 7.507813 l 0.417969 0.222656 h 1 v -1 h -0.730469 l -4.335937 -6.507812 h 5.066406 v -1 z m 0 0"/>
        <path d="m 7.3125 0.0273438 c -0.996094 0 -1.8125 0.8164062 -1.8125 1.8085942 v 0.03125 c 0.054688 0.949218 0.886719 1.6875 1.839844 1.632812 h 0.660156 v -1 h -0.71875 c -0.40625 0.023438 -0.730469 -0.277344 -0.765625 -0.679688 c 0.011719 -0.441406 0.351563 -0.792968 0.796875 -0.792968 h 2.960938 l -3.738282 9.796875 l 0.933594 0.355469 l 4.257812 -11.1523442 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBicycleparkingsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBicycleparkingsymbolic;
