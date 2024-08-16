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
        <path d="m 7 4 v 3 h -4 s -2 0 -2 2 v 2 l 3.5 1 l 3.5 -1 l 3.5 1 l 3.5 -1 v -2 c 0 -2 -2 -2 -2 -2 h -4 v -3 z m -6 8 v 4 h 14 v -4 l -3.5 1 l -3.5 -1 l -3.5 1 z m 0 0"/>
        <path d="m 8 0.507812 s -1.058594 0.898438 -0.996094 1.496094 c 0.042969 0.464844 0.527344 0.996094 0.996094 0.996094 s 0.953125 -0.53125 0.996094 -0.996094 c 0.0625 -0.597656 -0.996094 -1.496094 -0.996094 -1.496094 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwBirthdaysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBirthdaysymbolic;
