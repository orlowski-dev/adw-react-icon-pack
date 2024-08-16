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
      <path d="m 2 15 c 0 0.550781 0.449219 1 1 1 h 10 c 0.550781 0 1 -0.449219 1 -1 v -4 c 0 -2.042969 -1.945312 -3.964844 -3.945312 -4.015625 l -2.050782 -0.054687 c -0.011718 0 -0.019531 0 -0.027344 0 c -0.640624 0 -1.171874 -0.53125 -1.171874 -1.171876 c 0 -0.644531 0.53125 -1.171874 1.171874 -1.171874 c 0.496094 0 0.921876 0.292968 1.082032 0.746093 c 0.140625 0.402344 0.519531 0.667969 0.941406 0.667969 h 3 c 0.550781 0 1 -0.449219 1 -1 v -4 c 0 -0.550781 -0.449219 -1 -1 -1 h -10 c -0.550781 0 -1 0.449219 -1 1 z m 11 -13 l -1 -1 v 4 l 1 -1 h -3 l 0.941406 0.667969 c -0.453125 -1.28125 -1.625 -2.082031 -2.964844 -2.082031 c -1.757812 0 -3.171874 1.414062 -3.171874 3.171874 c 0 1.753907 1.414062 3.171876 3.171874 3.171876 h -0.027343 l 2.050781 0.054687 c 0.945312 0.023437 2 1.058594 2 2.015625 v 4 l 1 -1 h -10 l 1 1 v -14 l -1 1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwHoteltagoutlinesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHoteltagoutlinesymbolic;
