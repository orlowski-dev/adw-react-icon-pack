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
        <path d="m 1 2 v 4 c 0 1.871094 1.269531 3.433594 3 3.875 v 4.125 h -1 s -1 0 -1 1 v 1 h 6 v -1 c 0 -1 -1 -1 -1 -1 h -1 v -4.125 c 1.730469 -0.441406 3 -2.003906 3 -3.875 v -4 z m 0 0"/>
        <path d="m 12 0 v 4.046875 c -1.105469 0.214844 -1.945312 1.160156 -1.996094 2.316406 h -0.003906 v 9.636719 h 6 v -9.636719 h -0.003906 c -0.050782 -1.15625 -0.890625 -2.101562 -1.996094 -2.316406 v -4.046875 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwDrinkssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDrinkssymbolic;
