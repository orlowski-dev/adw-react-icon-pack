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
      <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 6 c 0 1.644531 1.355469 3 3 3 h 3 c 0.550781 0 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 h -3 c -0.570312 0 -1 -0.429688 -1 -1 v -5.796875 l 4.613281 3.074219 c 0.835938 0.558594 1.9375 0.558594 2.773438 0 l 4.613281 -3.074219 v 2.796875 c 0 0.550781 0.449219 1 1 1 s 1 -0.449219 1 -1 v -3 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0.800781 2 h 8.398438 l -3.921875 2.613281 c -0.171875 0.113281 -0.382813 0.113281 -0.554688 0 z m 0 0" fill="#2e3436"/>
    <path d="m 8.875 8 c -0.492188 0 -0.875 0.382812 -0.875 0.875 v 6.25 c 0 0.492188 0.382812 0.875 0.875 0.875 h 6.25 c 0.492188 0 0.875 -0.382812 0.875 -0.875 v -6.25 c 0 -0.492188 -0.382812 -0.875 -0.875 -0.875 z m 2.125 1 h 2 v 2.5 s 0 0.5 -0.5 0.5 h -1 c -0.5 0 -0.5 -0.5 -0.5 -0.5 z m 0.5 4 h 1 c 0.277344 0 0.5 0.222656 0.5 0.5 v 1 c 0 0.277344 -0.222656 0.5 -0.5 0.5 h -1 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 v -1 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0" class="warning" fill="#ff7800"/>
    </svg>
  );
};

const AdwMailMarkImportantSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMailMarkImportantSymbolic;
