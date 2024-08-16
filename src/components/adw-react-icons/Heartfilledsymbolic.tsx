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
      <path d="m 11.394531 1.964844 c -0.972656 -0.027344 -1.921875 0.324218 -2.640625 0.984375 l -0.753906 0.675781 l -0.757812 -0.675781 c -0.996094 -0.898438 -2.402344 -1.191407 -3.675782 -0.769531 c -1.277344 0.417968 -2.230468 1.488281 -2.5 2.804687 c -0.269531 1.316406 0.183594 2.675781 1.1875 3.566406 l 5.746094 5.117188 l 5.742188 -5.117188 c 1.171874 -1.011719 1.601562 -2.640625 1.082031 -4.097656 s -1.882813 -2.445313 -3.429688 -2.488281 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwHeartfilledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHeartfilledsymbolic;
