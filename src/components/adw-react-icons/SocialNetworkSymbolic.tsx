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
        <path d="m 14 5 h -7.53125 l -1.46875 3 v 6 h 8 c 0.5 0 0.945312 -0.496094 1.027344 -1.148438 l 0.972656 -6.925781 c 0 -0.460937 -0.492188 -0.925781 -1 -0.925781 z m 0 0"/>
        <path d="m 4 7 h -3 v 9 h 3 z m 0 0"/>
        <path d="m 9 2 c 0 -0.570312 -0.496094 -1 -1.023438 -1 h -1.121093 l -1.855469 7 h 4 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSocialNetworkSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSocialNetworkSymbolic;
