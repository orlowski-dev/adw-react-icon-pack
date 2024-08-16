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
      <path d="m 7.5 0 c -0.546875 0 -0.894531 0.09375 -1.507812 0.40625 c -2.03125 1.03125 -4.023438 3.871094 -4.722657 6.71875 c -0.402343 1.644531 -0.351562 3.382812 0.136719 4.804688 c 0.789062 2.304687 2.53125 3.796874 4.800781 4.039062 c 0.675781 0.050781 2.085938 0.039062 2.554688 -0.042969 c 0.910156 -0.152343 1.808593 -0.496093 2.539062 -0.972656 c 0.476563 -0.304687 1.203125 -1.015625 1.515625 -1.476563 c 0.480469 -0.707031 0.84375 -1.582031 1.011719 -2.4375 c 0.234375 -1.179687 0.226563 -2.308593 -0.019531 -3.523437 c -0.605469 -2.972656 -2.671875 -6.023437 -4.804688 -7.113281 c -0.613281 -0.308594 -0.960937 -0.402344 -1.503906 -0.402344 z m -0.203125 1.992188 c 0.035156 0 0.082031 0.007812 0.203125 0.007812 c 0.316406 0 0.113281 -0.058594 0.59375 0.1875 c 1.253906 0.636719 3.273438 3.363281 3.753906 5.730469 c 0.203125 0.980469 0.203125 1.796875 0.019532 2.738281 c -0.925782 2.347656 -1.949219 3.691406 -5.457032 3.320312 c -1.511718 -0.167968 -2.53125 -1 -3.113281 -2.695312 c -0.339844 -0.988281 -0.398437 -2.386719 -0.082031 -3.679688 c 0.558594 -2.292968 2.503906 -4.8125 3.6875 -5.414062 c 0.300781 -0.152344 0.332031 -0.1875 0.394531 -0.191406 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwEggSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwEggSymbolic;
