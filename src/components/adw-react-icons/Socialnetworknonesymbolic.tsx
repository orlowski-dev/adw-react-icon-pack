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
        <path d="m 6.855469 1 l -1.4375 5.417969 l 7.582031 7.582031 c 0.5 0 0.945312 -0.496094 1.023438 -1.144531 l 0.976562 -6.929688 c 0 -0.460937 -0.492188 -0.925781 -1 -0.925781 h -5 v -3 c 0 -0.570312 -0.496094 -1 -1.019531 -1 z m -5.855469 6 v 9 h 3 v -8.878906 l -0.121094 -0.121094 z m 4 1.121094 v 5.878906 h 5.878906 z m 0 0"/>
        <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwSocialnetworknonesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSocialnetworknonesymbolic;
