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
      <path d="m 8.742188 1 c -2.085938 0 -3.808594 0.753906 -5.214844 2 c -0.691406 0.613281 -0.757813 1.722656 0 2 c -0.351563 0.324219 -0.441406 0.8125 -0.203125 1.292969 l 0.203125 0.296875 c 0.265625 0.273437 0.683594 0.378906 0.683594 0.378906 c -0.347657 0.390625 -0.308594 0.976562 0.097656 1.3125 l 0.164062 0.15625 c 0.40625 0.335938 1.019532 0.296875 1.367188 -0.09375 c 0 0 -0.066406 0.078125 0 0 l -3.484375 3.875 c -1.152344 1.027344 0.769531 2.632812 1.921875 1.40625 l 4.660156 -4.9375 l 0.847656 -0.875 c 1.128906 -1.183594 3.386719 1.542969 1.042969 2.1875 c 0 0 -0.96875 0.070312 -1.988281 0.03125 c -0.804688 -0.03125 -1.425782 2.246094 1.269531 1.96875 c 4.070313 0.054688 4.890625 -4 4.890625 -5.96875 c 0 -4.03125 -3.128906 -5.03125 -6.257812 -5.03125 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSmudgeFingerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSmudgeFingerSymbolic;
