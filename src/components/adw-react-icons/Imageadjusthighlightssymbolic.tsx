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
      <path d="m 8 0 c -4.410156 0 -8 3.589844 -8 8 s 3.589844 8 8 8 s 8 -3.589844 8 -8 s -3.589844 -8 -8 -8 z m 0 2 c 1.234375 0 2.382812 0.367188 3.332031 1 h -2.832031 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 3.984375 c 0.269531 0.304688 0.511719 0.640625 0.71875 1 h -5.703125 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 6.164062 c 0.109376 0.320312 0.195313 0.65625 0.253907 1 h -7.417969 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 7.5 c 0 0.339844 -0.027344 0.675781 -0.082031 1 h -7.417969 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 7.164062 c -0.125 0.351562 -0.277343 0.683594 -0.460937 1 h -5.703125 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 4.984375 c -0.339844 0.378906 -0.726563 0.71875 -1.152344 1 h -2.832031 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 0.5 c -3.332031 0 -6 -2.667969 -6 -6 s 2.667969 -6 6 -6 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwImageadjusthighlightssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwImageadjusthighlightssymbolic;
