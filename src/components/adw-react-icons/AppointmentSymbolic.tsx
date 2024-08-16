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
      <path d="m 8 5 c -0.550781 0 -1 0.449219 -1 1 v 2 h -1 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 h 2 c 0.550781 0 1 -0.449219 1 -1 v -3 c 0 -0.550781 -0.449219 -1 -1 -1 z m 0 0" fill="currentColor"/>
    <path d="m 8 0.0195312 v 1.9999998 c 2.566406 0 4.839844 1.625 5.664062 4.054688 c 0.828126 2.433593 0.015626 5.109375 -2.023437 6.671875 c -2.035156 1.5625 -4.832031 1.65625 -6.964844 0.230468 c -2.132812 -1.429687 -3.121093 -4.046874 -2.457031 -6.527343 l -1.929688 -0.515625 c -0.882812 3.300781 0.433594 6.804687 3.273438 8.703125 c 2.84375 1.898437 6.585938 1.773437 9.296875 -0.304688 s 3.796875 -5.664062 2.699219 -8.898437 s -4.144532 -5.4140628 -7.558594 -5.4140628 z m 0 0" fill="currentColor"/>
    <path d="m 6.246094 0.214844 l -0.089844 0.015625 l -0.253906 0.066406 l -0.25 0.070313 l -0.246094 0.082031 l -0.246094 0.089843 l -0.242187 0.09375 l -0.234375 0.105469 l -0.234375 0.113281 l -0.230469 0.117188 l -0.109375 0.0625 l 0.976563 1.742188 l 0.078124 -0.042969 l 0.175782 -0.089844 l 0.175781 -0.082031 l 0.175781 -0.078125 l 0.179688 -0.074219 l 0.183594 -0.0625 l 0.1875 -0.0625 l 0.1875 -0.054688 l 0.1875 -0.046874 l 0.058593 -0.011719 z m -3.949219 2.199218 l -0.121094 0.128907 l -0.175781 0.191406 l -0.167969 0.199219 l -0.164062 0.203125 l -0.15625 0.214843 l -0.148438 0.214844 l -0.144531 0.222656 l -0.136719 0.226563 l -0.121093 0.21875 l 1.75 0.96875 l 0.105468 -0.1875 l 0.101563 -0.171875 l 0.105469 -0.167969 l 0.113281 -0.160156 l 0.117187 -0.160156 l 0.125 -0.152344 l 0.125 -0.148437 l 0.132813 -0.148438 l 0.097656 -0.101562 z m 0 0"/>
    </svg>
  );
};

const AdwAppointmentSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAppointmentSymbolic;
