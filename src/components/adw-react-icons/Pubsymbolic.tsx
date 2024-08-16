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
        <path d="m 3 3 v 7.519531 c 0 1.375 1.105469 2.480469 2.480469 2.480469 h 4.039062 c 1.207031 0 2.207031 -0.855469 2.429688 -2 h 0.257812 c 1.53125 0 2.792969 -1.261719 2.792969 -2.792969 v -2.414062 c 0 -1.53125 -1.261719 -2.792969 -2.792969 -2.792969 h -5.207031 v 3.5 c 0 0.832031 -0.667969 1.5 -1.5 1.5 s -1.5 -0.667969 -1.5 -1.5 v -3.5 z m 9 2 h 0.207031 c 0.457031 0 0.792969 0.335938 0.792969 0.792969 v 2.414062 c 0 0.457031 -0.335938 0.792969 -0.792969 0.792969 h -0.207031 z m 0 0"/>
        <path d="m 4.296875 0 c -1.109375 0 -2 0.890625 -2 2 h 2.703125 v 4.5 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -4.5 h 6.019531 c -0.34375 -0.597656 -0.980469 -1 -1.722656 -1 c -0.414063 0 -0.800781 0.125 -1.121094 0.339844 c -0.269531 -0.78125 -1.003906 -1.339844 -1.878906 -1.339844 c -0.601563 0 -1.132813 0.269531 -1.5 0.6875 c -0.367187 -0.417969 -0.898437 -0.6875 -1.5 -0.6875 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPubsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPubsymbolic;
