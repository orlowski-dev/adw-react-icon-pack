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
      <path d="m 11.394531 1.964844 c -0.972656 -0.027344 -1.921875 0.324218 -2.636719 0.984375 l -0.757812 0.675781 l -0.753906 -0.675781 c -1 -0.898438 -2.40625 -1.191407 -3.679688 -0.769531 c -1.277344 0.417968 -2.230468 1.488281 -2.5 2.804687 c -0.269531 1.316406 0.183594 2.675781 1.191406 3.566406 l 5.742188 5.117188 l 5.746094 -5.117188 c 1.167968 -1.011719 1.597656 -2.640625 1.078125 -4.097656 s -1.882813 -2.445313 -3.429688 -2.488281 z m -6.511719 1.953125 c 0.292969 0.019531 0.605469 0.140625 1.027344 0.519531 v 0.003906 l 2.089844 1.863282 l 2.097656 -1.871094 l 0.011719 -0.011719 c 0.335937 -0.304687 0.773437 -0.46875 1.230469 -0.457031 c 0.890625 0.023437 1.363281 0.5 1.601562 1.160156 c 0.234375 0.65625 0.167969 1.328125 -0.503906 1.910156 l -0.011719 0.011719 l -4.425781 3.945313 l -4.414062 -3.9375 l -0.003907 -0.003907 c -0.566406 -0.496093 -0.65625 -0.859375 -0.65625 -1.25 c -0.003906 -0.390625 0.175781 -0.855469 0.507813 -1.226562 c 0.328125 -0.367188 0.769531 -0.601563 1.15625 -0.644531 c 0.097656 -0.011719 0.191406 -0.015626 0.292968 -0.011719 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwHeartoutlinethicksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHeartoutlinethicksymbolic;
