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
      <path d="m 6.5 1 c -0.832031 0 -1.5 0.667969 -1.5 1.5 v 1.5 h -3 c -0.554688 0 -1 0.445312 -1 1 v 3 h 1.5 c 0.832031 0 1.5 0.667969 1.5 1.5 s -0.667969 1.5 -1.5 1.5 h -1.5 v 3 c 0 0.554688 0.445312 1 1 1 h 3 v -1.5 c 0 -0.832031 0.667969 -1.5 1.5 -1.5 s 1.5 0.667969 1.5 1.5 v 1.5 h 3 c 0.554688 0 1 -0.445312 1 -1 v -3 h 1.5 c 0.832031 0 1.5 -0.667969 1.5 -1.5 s -0.667969 -1.5 -1.5 -1.5 h -1.5 v -3 c 0 -0.554688 -0.445312 -1 -1 -1 h -3 v -1.5 c 0 -0.832031 -0.667969 -1.5 -1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwPuzzlepiecesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPuzzlepiecesymbolic;
