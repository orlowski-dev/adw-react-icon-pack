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
        <path d="m 6.007812 1 v 2.984375 h -3.0625 c -0.554687 0.003906 -1 0.449219 -1 1 c 0 0.554687 0.445313 1 1 1 h 12.054688 c -1.15625 -2 -5 -4.984375 -8.992188 -4.984375 z m -1.519531 3.5 h 0.011719 c 0.273438 0 0.5 0.222656 0.5 0.5 s -0.226562 0.5 -0.5 0.5 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 c 0 -0.273438 0.214844 -0.492188 0.488281 -0.5 z m 0 0"/>
        <path d="m 1 6.984375 v 1 l 1.5 0.015625 c 0.292969 0 0.488281 0.195312 0.488281 0.5 l 0.011719 2 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -2 c 0 -0.660156 1 -0.660156 1 0 v 3 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -1 c 0 -0.675781 1 -0.671875 1 0 c 0.003906 1.683594 0.015625 3.652344 0.015625 3.941406 c 0 0.273438 0.21875 0.496094 0.492187 0.496094 c 0.269532 0 0.492188 -0.222656 0.492188 -0.496094 c 0 -0.425781 0.019531 -5.089844 0.019531 -5.957031 c 0 -0.246094 0.226563 -0.5 0.5 -0.5 h 0.980469 c 0.257812 0 0.5 0.25 0.5 0.5 v 1 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -1 c 0 -0.265625 0.222656 -0.5 0.5 -0.5 c 0.265625 0 0.5 0.230469 0.5 0.5 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 c 0.015625 -0.261719 0.265625 -0.492187 0.5 -0.5 h 1.5 v -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwViolence2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViolence2Symbolic;
