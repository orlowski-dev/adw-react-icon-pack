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
        <path d="m 1 0 v 1 h 1 v 1 h -1 v 5 h 1 v 1 h -1 v 1 h 14 v -3 h -1 v -3 h 1 v -3 z m 2 1 h 1 v 1 h -1 z m 2 0 h 1 v 1 h -1 z m 2 0 h 1 v 1 h -1 z m 2 0 h 1 v 1 h -1 z m 2 0 h 1 v 1 h -1 z m 2 0 h 1 v 1 h -1 z m -11 2 h 3 v 3 h -3 z m 4 0 h 3 v 3 h -3 z m 4 0 h 3 v 3 h -3 z m -7 4 h 1 v 1 h -1 z m 2 0 h 1 v 1 h -1 z m 2 0 h 1 v 1 h -1 z m 2 0 h 1 v 1 h -1 z m 2 0 h 1 v 1 h -1 z m 2 0 h 1 v 1 h -1 z m 0 0"/>
        <path d="m 1 11 v 5 h 14 v -5 z m 6 1 h 1 v 1 h 2 v 0.5 h 1 v -1 h 1 v 0.5 h 2.5 v 1 h -1.5 v 1 h -1 v -0.5 h -1 v -0.5 h -1 v 1 h -1 v -1 h -1 v 1.5 h -1 v -0.5 h -1 v -1 h -1 v 1 h -1 v -0.5 h -1 v -0.5 h -1.5 v -1 h 1.5 v -0.5 h 1 v -0.5 h 1 v 1.5 h 1 v -0.5 h 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDetachAudioSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDetachAudioSymbolic;
