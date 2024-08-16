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
      <path d="m 6.5 0 c -0.265625 0 -0.519531 0.105469 -0.707031 0.292969 l -1.707031 1.707031 h -1.023438 l -1.53125 -1.53125 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 l -0.386719 -0.386719 c 0.527344 -0.539062 0.855469 -1.277343 0.855469 -2.082031 v -7 c 0 -1.644531 -1.355469 -3 -3 -3 h -1.085938 l -1.707031 -1.707031 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0.414062 2 h 2.171876 l 1.707031 1.707031 c 0.1875 0.1875 0.441406 0.292969 0.707031 0.292969 h 1.5 c 0.570312 0 1 0.429688 1 1 v 7 c 0 0.269531 -0.097656 0.503906 -0.257812 0.679688 l -2.4375 -2.4375 c 0.4375 -0.640626 0.695312 -1.414063 0.695312 -2.242188 c 0 -2.199219 -1.800781 -4 -4 -4 c -0.828125 0 -1.601562 0.257812 -2.242188 0.695312 l -0.808593 -0.808593 c 0.09375 -0.046875 0.183593 -0.105469 0.257812 -0.179688 z m -6.492187 1.484375 c -0.265625 0.445313 -0.421875 0.964844 -0.421875 1.515625 v 7 c 0 1.644531 1.355469 3 3 3 h 8.9375 l -2 -2 h -6.9375 c -0.570312 0 -1 -0.429688 -1 -1 v -6.9375 z m 7.578125 2.515625 c 1.117188 0 2 0.882812 2 2 c 0 0.277344 -0.058594 0.539062 -0.15625 0.78125 l -2.625 -2.625 c 0.242188 -0.097656 0.503906 -0.15625 0.78125 -0.15625 z m -3.90625 1.15625 c -0.058594 0.273438 -0.09375 0.554688 -0.09375 0.84375 c 0 2.199219 1.800781 4 4 4 c 0.289062 0 0.570312 -0.035156 0.84375 -0.09375 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCameraDisabledSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraDisabledSymbolic;
