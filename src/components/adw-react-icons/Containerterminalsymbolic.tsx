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
        <path d="m 15 1 v 1 h -1 v -1 z m 0 1 h 1 v 1 h -1 z m -2 -1 v 1 h -1 v -1 z m -2 0 v 1 h -1 v -1 z m -2 0 v 1 h -1 v -1 z m -2 0 v 1 h -1 v -1 z m -2 0 v 1 h -1 v -1 z m -2 0 v 1 h -1 v -1 z m -2 0 v 1 h -1 v -0.5 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 2 v 1 h -1 v -1 z m 15 1 v 1 h -1 v -1 z m -15 1 v 1 h -1 v -1 z m 15 1 v 1 h -1 v -1 z m -15 1 v 1 h -1 v -1 z m 15 1 v 1 h -1 v -1 z m -15 1 v 1 h -1 v -1 z m 15 1 v 1 h -1 v -1 z m -15 1 v 1 h -1 v -1 z m 15 1 v 1 h -1 v -1 z m -15 1 v 1 h -1 v -1 z m 0 1 h 1 v 1 h -1 z m 15 0 v 0.5 c 0 0.277344 -0.222656 0.5 -0.5 0.5 h -0.5 v -1 z m -2 0 v 1 h -1 v -1 z m -2 0 v 1 h -1 v -1 z m -2 0 v 1 h -1 v -1 z m -2 0 v 1 h -1 v -1 z m -2 0 v 1 h -1 v -1 z m -2 0 v 1 h -1 v -1 z m 0 0"/>
        <path d="m 3 3 c -0.554688 0 -1 0.445312 -1 1 v 8 c 0 0.554688 0.445312 1 1 1 h 10 c 0.554688 0 1 -0.445312 1 -1 v -8 c 0 -0.554688 -0.445312 -1 -1 -1 z m 0 2 h 10 v 7 h -10 z m 0 0"/>
        <path d="m 4.492188 5.992188 c -0.203126 0.003906 -0.386719 0.125 -0.460938 0.316406 c -0.078125 0.1875 -0.03125 0.402344 0.113281 0.546875 l 1.648438 1.644531 l -1.648438 1.644531 c -0.128906 0.128907 -0.179687 0.3125 -0.136719 0.488281 c 0.046876 0.175782 0.183594 0.3125 0.359376 0.359376 c 0.175781 0.042968 0.359374 -0.007813 0.488281 -0.136719 l 2 -2 c 0.191406 -0.195313 0.191406 -0.515625 0 -0.710938 l -2 -2 c -0.097657 -0.09375 -0.226563 -0.152343 -0.363281 -0.152343 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwContainerterminalsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwContainerterminalsymbolic;
