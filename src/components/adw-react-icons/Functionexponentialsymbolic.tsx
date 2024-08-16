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
      <path d="m 12.738281 0 c -0.085937 0.359375 -0.164062 0.707031 -0.25 1.066406 c -0.851562 0.226563 -1.488281 1.011719 -1.488281 1.933594 c 0 0.511719 0.195312 0.980469 0.515625 1.332031 c -0.371094 0.964844 -0.828125 1.917969 -1.410156 2.804688 c -0.210938 0.316406 -0.4375 0.617187 -0.679688 0.910156 c -0.140625 -0.03125 -0.28125 -0.046875 -0.425781 -0.046875 c -1.097656 0 -2 0.902344 -2 2 c 0 0.082031 0.003906 0.160156 0.015625 0.238281 c -0.789063 0.5 -1.695313 0.917969 -2.75 1.21875 c -0.34375 -0.285156 -0.785156 -0.457031 -1.265625 -0.457031 c -0.714844 0 -1.347656 0.382812 -1.699219 0.953125 c -0.417969 0.03125 -0.847656 0.046875 -1.300781 0.046875 v 2 c 0.429688 0 0.84375 -0.015625 1.246094 -0.042969 c 0.339844 0.621094 1 1.042969 1.753906 1.042969 c 1 0 1.835938 -0.746094 1.980469 -1.707031 c 1.199219 -0.371094 2.261719 -0.871094 3.195312 -1.472657 c 0.25 0.117188 0.53125 0.179688 0.824219 0.179688 c 1.097656 0 2 -0.902344 2 -2 c 0 -0.214844 -0.035156 -0.421875 -0.097656 -0.617188 c 0.316406 -0.371093 0.609375 -0.75 0.871094 -1.144531 c 0.703124 -1.066406 1.234374 -2.183593 1.65625 -3.285156 c 0.894531 -0.199219 1.570312 -1 1.570312 -1.953125 c 0 -0.542969 -0.21875 -1.039062 -0.574219 -1.398438 c 0.132813 -0.566406 0.253907 -1.09375 0.367188 -1.601562 z m 0.261719 2 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m -4 7 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m -6 3 c 0.558594 0 1 0.441406 1 1 s -0.441406 1 -1 1 s -1 -0.441406 -1 -1 s 0.441406 -1 1 -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwFunctionexponentialsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFunctionexponentialsymbolic;
