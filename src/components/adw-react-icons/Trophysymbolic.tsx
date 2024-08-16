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
      <path d="m 1 1 v 6 c 0 1.648438 1.355469 3 3 3 h 0.542969 c 0.535156 0.925781 1.421875 1.601562 2.457031 1.867188 v 1.132812 h -2 c 0 0.5 -0.445312 1 -1 1 v 1 h 8 v -1 c -0.507812 0 -1 -0.421875 -1 -1 h -2 v -1.132812 c 1.035156 -0.269532 1.921875 -0.941407 2.457031 -1.867188 h 0.542969 c 1.644531 0 3 -1.351562 3 -3 v -6 z m 2 2 h 1 v 5 c -0.519531 0 -1 -0.480469 -1 -1 z m 9 0 h 1 v 4 c 0 0.519531 -0.480469 1 -1 1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwTrophysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTrophysymbolic;
