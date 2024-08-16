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
      <path d="m 5.074219 1.9375 c -3.136719 -0.3125 -5.875 3.914062 -2.816407 6.613281 l 5.742188 5.117188 l 5.746094 -5.117188 c 2.585937 -2.238281 1.070312 -6.492187 -2.351563 -6.585937 c -0.972656 -0.027344 -1.921875 0.324218 -2.636719 0.984375 l -0.757812 0.675781 l -0.753906 -0.675781 c -0.703125 -0.628907 -1.449219 -0.941407 -2.171875 -1.011719 z m -0.097657 0.988281 c 0.507813 0.046875 1.039063 0.265625 1.597657 0.769531 h 0.003906 l 1.421875 1.269532 l 1.425781 -1.273438 l 0.007813 -0.007812 c 0.523437 -0.480469 1.21875 -0.738282 1.933594 -0.71875 c 1.300781 0.035156 2.15625 0.816406 2.515624 1.824218 c 0.355469 1.007813 0.191407 2.15625 -0.792968 3.003907 l -0.003906 0.007812 l -5.085938 4.527344 l -5.078125 -4.527344 h -0.003906 c -0.753907 -0.664062 -0.992188 -1.332031 -0.996094 -2 c 0 -0.667969 0.285156 -1.351562 0.761719 -1.890625 c 0.480468 -0.535156 1.128906 -0.898437 1.789062 -0.976562 c 0.167969 -0.015625 0.335938 -0.019532 0.503906 -0.007813 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwHeartoutlinethinsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHeartoutlinethinsymbolic;
