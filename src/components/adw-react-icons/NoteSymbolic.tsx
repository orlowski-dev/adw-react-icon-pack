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
      <path d="m 3.121094 2 c -1.175782 0 -2.121094 0.945312 -2.121094 2.121094 v 6.757812 c 0 1.175782 0.945312 2.121094 2.121094 2.121094 h 5.878906 l 4 3 v -3.011719 c 1.117188 -0.0625 2 -0.976562 2 -2.109375 v -6.757812 c 0 -1.175782 -0.945312 -2.121094 -2.121094 -2.121094 z m -0.121094 3 h 10 v 1 h -10 z m 0 2 h 10 v 1 h -10 z m 0 2 h 10 v 1 h -10 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNoteSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNoteSymbolic;
