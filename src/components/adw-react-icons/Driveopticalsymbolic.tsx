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
      <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 6 c 0 1.292969 0.839844 2.40625 2 2.824219 v -0.824219 c 0 -0.101562 0.015625 -0.199219 0.042969 -0.292969 c 0.351562 2.972657 2.890625 5.292969 5.957031 5.292969 s 5.605469 -2.320312 5.957031 -5.292969 c 0.027344 0.09375 0.042969 0.191407 0.042969 0.292969 v 0.824219 c 1.160156 -0.417969 2 -1.53125 2 -2.824219 v -6 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.570312 0 1 0.429688 1 1 v 4 c 0 0.554688 -0.445312 1 -1 1 h -10 c -0.554688 0 -1 -0.445312 -1 -1 v -4 c 0 -0.570312 0.5 -1 1 -1 z m 0.5 4 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 9 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 0 4 h 2.25 c 0 1.242188 1.007812 2.25 2.25 2.25 s 2.25 -1.007812 2.25 -2.25 h 2.25 c 0 2.484375 -2.015625 4.5 -4.5 4.5 s -4.5 -2.015625 -4.5 -4.5 z m 3 0 h 0.75 c 0 0.414062 0.335938 0.75 0.75 0.75 s 0.75 -0.335938 0.75 -0.75 h 0.75 c 0 0.828125 -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwDriveopticalsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDriveopticalsymbolic;
