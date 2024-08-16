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
      <path d="m 7.90625 0.09375 c -0.527344 -0.0273438 -1.039062 0.28125 -1.4375 0.96875 l -6.25 11.59375 c -0.535156 0.964844 0.046875 2.34375 1.09375 2.34375 h 13.15625 c 0.980469 0 1.902344 -1.160156 1.21875 -2.34375 l -6.3125 -11.53125 c -0.398438 -0.644531 -0.941406 -1.003906 -1.46875 -1.03125 z m 1.09375 3.90625 v 5 c 0.007812 0.527344 -0.472656 1 -1 1 s -1.007812 -0.472656 -1 -1 v -5 z m -1 7 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwDialogwarningsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDialogwarningsymbolic;
