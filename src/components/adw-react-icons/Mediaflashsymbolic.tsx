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
      <path d="m 5 1 c -1.644531 0 -3 1.355469 -3 3 v 8 c 0 1.644531 1.355469 3 3 3 h 7 c 1.644531 0 3 -1.355469 3 -3 v -8 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 l -2 -2 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 2 h 6.585938 l 1.414062 1.414062 v 7.585938 c 0 0.570312 -0.429688 1 -1 1 h -7 c -0.570312 0 -1 -0.429688 -1 -1 v -8 c 0 -0.570312 0.429688 -1 1 -1 z m 0.5 1 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 4 c 0 0.277344 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -3.5 h 1 v 3.5 c 0 0.277344 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 v -3 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 s -0.5 0.222656 -0.5 0.5 v 2.5 h -1 v -3.5 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 h -2 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 3.5 h -1 v -3.5 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMediaflashsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMediaflashsymbolic;
