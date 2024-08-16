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
      <path d="m 3.5 2 c -1.386719 0 -2.5 1.113281 -2.5 2.5 v 5 c 0 1.386719 1.113281 2.519531 2.5 2.5 h 6.375 l 3.125 3 v -3.0625 c 1.140625 -0.230469 2 -1.226562 2 -2.4375 v -5 c 0 -1.386719 -1.113281 -2.5 -2.5 -2.5 z m -0.5 5 h 4 v 1 h -4 z m 5 0 h 5 v 1 h -5 z m -5 2 h 2 v 1 h -2 z m 3 0 h 5 v 1 h -5 z m 6 0 h 1 v 1 h -1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNotesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNotesymbolic;
