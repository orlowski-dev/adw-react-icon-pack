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
      <path d="m 4 0 c -1.648438 0 -3 1.351562 -3 3 c 0 1.296875 0.839844 2.410156 2 2.824219 v 9.175781 h 2 v -9.175781 c 0.847656 -0.300781 1.523438 -0.976563 1.824219 -1.824219 h 2.175781 c 1.117188 0 2 0.882812 2 2 v 4.175781 c -1.160156 0.414063 -2 1.527344 -2 2.824219 c 0 1.648438 1.351562 3 3 3 s 3 -1.351562 3 -3 c 0 -1.296875 -0.839844 -2.410156 -2 -2.824219 v -4.175781 c 0 -2.199219 -1.800781 -4 -4 -4 h -2.175781 c -0.414063 -1.160156 -1.527344 -2 -2.824219 -2 z m 0 1.5 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m 8 10 c 0.828125 0 1.5 0.671875 1.5 1.5 s -0.671875 1.5 -1.5 1.5 s -1.5 -0.671875 -1.5 -1.5 s 0.671875 -1.5 1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPullrequestmergedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPullrequestmergedsymbolic;
