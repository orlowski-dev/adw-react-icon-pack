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
        <path d="m 3.03125 1 c -0.851562 0 -1.617188 0.355469 -2.167969 0.925781 l 1.402344 1.398438 c 0.183594 -0.199219 0.453125 -0.324219 0.765625 -0.324219 h 8.9375 c 0.597656 0 1.03125 0.433594 1.03125 1.03125 v 5.96875 h -4.0625 l 1 1 h 3.0625 v 0.96875 c 0 0.597656 -0.433594 1.03125 -1.03125 1.03125 h -0.027344 l 1.570313 1.574219 c 0.890625 -0.53125 1.488281 -1.5 1.488281 -2.605469 v -7.9375 c 0 -1.667969 -1.363281 -3.03125 -3.03125 -3.03125 z m -2.9335938 2.28125 c -0.0625 0.242188 -0.0976562 0.492188 -0.0976562 0.75 v 7.9375 c 0 1.667969 1.363281 3.03125 3.03125 3.03125 h 8.785156 l -2 -2 h -1.816406 v -1.816406 l -1.183594 -1.183594 h -4.816406 v -4.816406 z m 1.9023438 7.71875 h 5 v 2 h -3.96875 c -0.597656 0 -1.03125 -0.433594 -1.03125 -1.03125 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTouchpaddisabledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTouchpaddisabledsymbolic;
