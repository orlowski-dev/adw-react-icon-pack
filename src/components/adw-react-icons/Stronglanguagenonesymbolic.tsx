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
        <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
        <path d="m 3 2 v 2 l 3 3 h 1 v 1 l 3 3 h 1 v -2 h -2 v -2 h 2 v -2 h -2 v -3 h -2 v 3 h -2 v -3 z m 9 0 v 9 h 2 v -9 z m -11 3 v 2 h 2 v 2 h -2 v 2 h 2 v 3 h 2 v -3 h 2 v 3 h 2 v -1.878906 l -3.121094 -3.121094 h -0.878906 v -0.878906 l -3.121094 -3.121094 z m 12 7 c -0.523438 0 -1.007812 0.269531 -1.28125 0.71875 l 2.0625 2.0625 c 0.445312 -0.273438 0.71875 -0.757812 0.71875 -1.28125 c 0 -0.828125 -0.671875 -1.5 -1.5 -1.5 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwStronglanguagenonesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStronglanguagenonesymbolic;
