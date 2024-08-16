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
      <path d="m 2 2 c -1.109375 0 -2 0.890625 -2 2 v 2 c 1.105469 0 2 0.894531 2 2 s -0.894531 2 -2 2 v 2 c 0 1.109375 0.890625 2 2 2 h 12 c 1.109375 0 2 -0.890625 2 -2 v -2 c -1.105469 0 -2 -0.894531 -2 -2 s 0.894531 -2 2 -2 v -2 c 0 -1.109375 -0.890625 -2 -2 -2 z m 5.996094 2.105469 l 0.929687 2.894531 l 3.074219 0.007812 l -2.460938 1.777344 l 0.9375 2.925782 l -2.449218 -1.792969 l -2.492188 1.796875 l 0.945313 -2.882813 l -2.480469 -1.8125 l 3.039062 0.007813 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwTicketSpecialSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTicketSpecialSymbolic;
