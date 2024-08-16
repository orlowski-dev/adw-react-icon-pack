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
      <path d="m 9 1.007812 c 0.296875 -0.003906 0.578125 0.125 0.769531 0.351563 l 3.230469 3.640625 h 1 c 1.09375 0 2 0.84375 2 2 v 2 c 0 1.089844 -0.910156 2 -2 2 h -1 l -3.230469 3.640625 c -0.210937 0.253906 -0.492187 0.363281 -0.769531 0.359375 z m -2.957031 2.980469 c 0.199219 0.011719 0.394531 0.074219 0.5625 0.203125 c 0.441406 0.332032 0.53125 0.960938 0.195312 1.402344 c -1.074219 1.425781 -1.074219 3.386719 0 4.8125 c 0.335938 0.441406 0.246094 1.070312 -0.195312 1.402344 c -0.441407 0.332031 -1.066407 0.242187 -1.398438 -0.195313 c -0.804687 -1.070312 -1.207031 -2.339843 -1.207031 -3.613281 s 0.402344 -2.542969 1.207031 -3.613281 c 0.183594 -0.246094 0.464844 -0.382813 0.753907 -0.398438 h 0.085937 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwAudioVolumeLowRtlSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAudioVolumeLowRtlSymbolic;
