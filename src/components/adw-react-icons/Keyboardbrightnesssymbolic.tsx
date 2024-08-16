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
      <path d="m 8 3 c -0.554688 0 -1 0.445312 -1 1 v 1 c 0 0.554688 0.445312 1 1 1 s 1 -0.445312 1 -1 v -1 c 0 -0.554688 -0.445312 -1 -1 -1 z m -5 2.050781 c -0.238281 0.007813 -0.476562 0.105469 -0.660156 0.292969 c -0.390625 0.390625 -0.390625 1.019531 0 1.414062 l 0.71875 0.71875 c 0.390625 0.390626 1.023437 0.390626 1.414062 0 c 0.390625 -0.394531 0.390625 -1.023437 0 -1.414062 l -0.71875 -0.71875 c -0.207031 -0.210938 -0.484375 -0.308594 -0.753906 -0.292969 z m 9.949219 0 c -0.253907 0 -0.511719 0.097657 -0.707031 0.292969 l -0.71875 0.71875 c -0.390626 0.390625 -0.390626 1.023438 0 1.414062 c 0.390624 0.390626 1.023437 0.390626 1.414062 0 l 0.71875 -0.71875 c 0.390625 -0.390624 0.390625 -1.023437 0 -1.414062 c -0.195312 -0.195312 -0.453125 -0.292969 -0.707031 -0.292969 z m -6.703125 3.949219 c -0.167969 0.007812 -0.324219 0.117188 -0.375 0.261719 l -0.835938 2.21875 c -0.101562 0.230469 0.125 0.527343 0.402344 0.519531 h 2.566406 h 2.570313 c 0.277343 0.007812 0.5 -0.289062 0.402343 -0.519531 l -0.835937 -2.21875 c -0.074219 -0.191407 -0.339844 -0.308594 -0.550781 -0.234375 c -0.210938 0.066406 -0.820313 0.261718 -1.585938 0.261718 s -1.375 -0.195312 -1.585937 -0.261718 c -0.054688 -0.019532 -0.113281 -0.03125 -0.171875 -0.027344 z m -5.246094 1 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 h 0.972656 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 z m 12.984375 0 c -0.554687 0 -1 0.445312 -1 1 s 0.445313 1 1 1 h 1.015625 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwKeyboardbrightnesssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwKeyboardbrightnesssymbolic;
