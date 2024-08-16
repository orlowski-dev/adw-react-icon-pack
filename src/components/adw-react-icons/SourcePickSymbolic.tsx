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
        <path d="m 11.5 10.933594 c -2.5 0 -2.5 0.5 -2.5 0.5 c 0 0.5 0.5 0.5 0.5 0.5 h 4 c 0.5 0 0.5 -0.5 0.5 -0.5 s 0 -0.5 -2.5 -0.5 z m 0 0"/>
        <path d="m 9.1875 2 c -1.195312 0 -2.1875 0.992188 -2.1875 2.1875 v 3.644531 c 0 1.195313 0.992188 2.191407 2.1875 2.191407 h 4.625 c 1.195312 0 2.1875 -0.996094 2.1875 -2.191407 v -3.644531 c 0 -1.195312 -0.992188 -2.1875 -2.1875 -2.1875 z m 0 2 h 4.625 c 0.121094 0 0.1875 0.066406 0.1875 0.1875 v 3.644531 c 0 0.121094 -0.066406 0.191407 -0.1875 0.191407 h -4.625 c -0.121094 0 -0.1875 -0.070313 -0.1875 -0.191407 v -3.644531 c 0 -0.121094 0.066406 -0.1875 0.1875 -0.1875 z m 0 0"/>
        <path d="m 11.46875 12.96875 l -3 3 h 6 z m 0 0"/>
        <path d="m 1.914062 5 c -0.507812 0 -0.914062 0.40625 -0.914062 0.914062 v 3.171876 c 0 0.507812 0.40625 0.914062 0.914062 0.914062 h 3.171876 c 0.507812 0 0.914062 -0.40625 0.914062 -0.914062 v -3.171876 c 0 -0.507812 -0.40625 -0.914062 -0.914062 -0.914062 z m 0.085938 2 h 3 v 2 h -3 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSourcePickSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSourcePickSymbolic;
