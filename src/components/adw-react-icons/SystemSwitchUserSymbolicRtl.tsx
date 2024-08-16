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
      <path d="m 4 0 c 1.105469 0 2 0.894531 2 2 s -0.894531 2 -2 2 s -2 -0.894531 -2 -2 s 0.894531 -2 2 -2 z m 8 2 c 1.105469 0 2 0.894531 2 2 s -0.894531 2 -2 2 s -2 -0.894531 -2 -2 s 0.894531 -2 2 -2 z m -7 3 c 1.3125 0 2.421875 0.832031 2.832031 2 h -7.660156 c 0.410156 -1.167969 1.515625 -2 2.828125 -2 z m 8 2 c 1.660156 0 3 1.339844 3 3 c 0 0.554688 -0.445312 1 -1 1 h -6 c -0.554688 0 -1 -0.445312 -1 -1 c 0 -1.660156 1.339844 -3 3 -3 z m -9 1 c 0.257812 0 0.511719 0.097656 0.707031 0.292969 l 2 2 c 0.183594 0.1875 0.289063 0.441406 0.289063 0.707031 h 0.003906 v 1 h -2 v 1 c 0.105469 0.800781 0.5 1 1 1 h 4 c 1 0 1 -1 1 -1 c 0 -0.550781 0.449219 -1 1 -1 s 1 0.449219 1 1 c 0 1.332031 -0.8125 2.273438 -1.550781 2.644531 c -0.742188 0.371094 -1.449219 0.355469 -1.449219 0.355469 h -4 s -0.707031 0.015625 -1.445312 -0.355469 c -0.742188 -0.371093 -1.554688 -1.3125 -1.554688 -2.644531 v -1 h -2 v -1 h 0.007812 c -0.003906 -0.265625 0.101563 -0.519531 0.285157 -0.707031 l 2 -2 c 0.195312 -0.195313 0.453125 -0.292969 0.707031 -0.292969 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwSystemSwitchUserSymbolicRtl = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSystemSwitchUserSymbolicRtl;
