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
      <path d="m 8 1.992188 c -2.617188 0 -5.238281 0.933593 -7.195312 2.808593 l -0.207032 0.199219 h 3.34375 c 2.480469 -1.292969 5.640625 -1.292969 8.121094 0 h 3.339844 l -0.207032 -0.199219 c -1.957031 -1.875 -4.578124 -2.808593 -7.195312 -2.808593 z m -1.730469 9.007812 c -0.441406 0.765625 -0.339843 1.757812 0.316407 2.414062 c 0.78125 0.78125 2.046874 0.78125 2.828124 0 c 0.65625 -0.65625 0.757813 -1.648437 0.316407 -2.414062 z m 0 0" fill="currentColor" fill-opacity="0.34902"/>
    <path d="m 0 6 h 16 v 4 h -16 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwNetworkwirelesshardwaredisabledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkwirelesshardwaredisabledsymbolic;
