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
      <path d="m 1 3 l -1 3 v 2.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -2 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 h -0.5 l 1 -3 z m 4 0 l -1 3 v 2.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -2 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 h -0.5 l 1 -3 z m 4.5 4 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 2 c 0 0.277344 0.222656 0.5 0.5 0.5 h 0.5 l -1 3 h 2 l 1 -3 v -2.5 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 4 0 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 2 c 0 0.277344 0.222656 0.5 0.5 0.5 h 0.5 l -1 3 h 2 l 1 -3 v -2.5 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwQuotationSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwQuotationSymbolic;
