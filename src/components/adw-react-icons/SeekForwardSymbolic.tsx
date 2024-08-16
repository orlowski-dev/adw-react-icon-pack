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
      <path d="m 8.980469 4.863281 c 0.199219 0 0.402343 0.054688 0.574219 0.167969 l 3 2 c 0.59375 0.394531 0.59375 1.269531 0 1.664062 l -3 2 c -0.664063 0.441407 -1.554688 -0.035156 -1.554688 -0.832031 v -4 c 0 -0.367187 0.203125 -0.707031 0.527344 -0.878906 c 0.140625 -0.078125 0.296875 -0.117187 0.453125 -0.121094 z m -0.980469 3 c 0 0.316407 -0.148438 0.632813 -0.445312 0.832031 l -3 2 c -0.664063 0.441407 -1.554688 -0.035156 -1.554688 -0.832031 v -4 c 0 -0.367187 0.203125 -0.707031 0.527344 -0.878906 c 0.324218 -0.175781 0.71875 -0.15625 1.027344 0.046875 l 3 2 c 0.296874 0.199219 0.445312 0.515625 0.445312 0.832031 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSeekForwardSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSeekForwardSymbolic;
