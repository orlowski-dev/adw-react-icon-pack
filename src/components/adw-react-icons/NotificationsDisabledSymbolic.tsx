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
        <path d="m 8 0 c -0.828125 0 -1.5 0.671875 -1.5 1.5 c 0 0.074219 0.007812 0.148438 0.019531 0.222656 c -1.378906 0.4375 -2.5 1.445313 -3.078125 2.765625 l 1.605469 1.605469 c 0.199219 -1.480469 1.460937 -2.585938 2.953125 -2.59375 c 1.65625 0 3 1.34375 3 3 v 4.5 h -1.046875 l 2 2 h 1.546875 c 0.554688 0 1 -0.445312 1 -1 s -0.445312 -1 -1 -1 h -0.5 v -4.40625 c 0 -0.03125 0 -0.0625 0.003906 -0.09375 c 0 -2.191406 -1.429687 -4.125 -3.519531 -4.777344 c 0.011719 -0.074218 0.015625 -0.148437 0.019531 -0.222656 c 0 -0.828125 -0.671875 -1.5 -1.5 -1.5 z m -4.972656 6.199219 c -0.011719 0.101562 -0.019532 0.199219 -0.027344 0.300781 v 4.5 h -0.5 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 h 7.328125 l -2 -2 h -2.828125 v -2.828125 z m 2.972656 7.800781 c 0 0.714844 0.382812 1.375 1 1.730469 c 0.621094 0.359375 1.382812 0.359375 2 0 c 0.621094 -0.355469 1 -1.015625 1 -1.730469 z m 0 0"/>
        <path d="m 1.53125 0.457031 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNotificationsDisabledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNotificationsDisabledSymbolic;
