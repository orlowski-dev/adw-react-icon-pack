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
      <path d="m 6.574219 5 h 5 c 0.246093 0 0.425781 0.265625 0.335937 0.496094 l -1.65625 4.207031 c -0.304687 0.78125 -1.0625 1.296875 -1.898437 1.296875 h -3.921875 c -0.285156 0 -0.488282 -0.300781 -0.386719 -0.566406 l 0.054687 -0.140625 c 0.308594 -0.777344 1.058594 -1.292969 1.898438 -1.292969 h 6 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -6 c -1.660156 0 -3.152344 1.019531 -3.761719 2.566406 l -0.054687 0.140625 c -0.621094 1.589844 0.539062 3.292969 2.25 3.292969 h 3.921875 c 1.660156 0 3.152343 -1.015625 3.761719 -2.5625 l 1.65625 -4.210938 c 0.613281 -1.558593 -0.527344 -3.226562 -2.199219 -3.226562 h -5 c -0.554688 0 -1 0.449219 -1 1 s 0.445312 1 1 1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwTextitalicsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTextitalicsymbolic;
