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
      <g fill="currentColor">
        <path d="m 3.003906 3 v 2 h 10 v -2 z m 0 4 v 2 h 7.976563 v -2 z m 0 4 v 2 h 5.007813 l -0.007813 -2 z m 0 0"/>
        <path d="m 12.003906 7 v 3.269531 c -0.304687 -0.175781 -0.648437 -0.269531 -1 -0.269531 c -1.105468 0 -2 0.894531 -2 2 s 0.894532 2 2 2 c 1.101563 0 2 -0.894531 2 -2 v -3 h 2 v -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPlaylistsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPlaylistsymbolic;
