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
      <path d="m 15.464844 0 l -14 1 c -0.277344 0.019531 -0.484375 0.257812 -0.464844 0.535156 s 0.257812 0.484375 0.535156 0.464844 l 0.464844 -0.035156 v 1.035156 h -0.5 c -0.277344 0 -0.5 0.222656 -0.5 0.5 c 0 0.273438 0.222656 0.5 0.5 0.5 h 0.5 v 4 h 1 v -4 h 1 v 4 h 1 v -4 h 1 v 4 h 1 v -4 h 8.5 c 0.277344 0 0.5 -0.226562 0.5 -0.5 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 h -8.5 v -1.394531 l 8.535156 -0.605469 c 0.277344 -0.023438 0.484375 -0.261719 0.464844 -0.539062 c -0.023438 -0.273438 -0.261719 -0.4804692 -0.535156 -0.460938 z m -9.464844 1.679688 v 1.320312 h -1 v -1.25 z m -2 0.144531 v 1.175781 h -1 v -1.105469 z m -4 7.175781 c 0 2.957031 2.816406 4.472656 5.398438 5.5 c -0.253907 0.441406 -0.398438 0.953125 -0.398438 1.5 h 6 c 0 -0.546875 -0.144531 -1.058594 -0.398438 -1.5 c 2.582032 -1.027344 5.398438 -2.542969 5.398438 -5.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNoodlesSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNoodlesSymbolic;
