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
      <path d="m 4 2 c -1.597656 0 -2.644531 0.664062 -3 2 l -0.738281 8.324219 c -0.261719 1.59375 1.738281 2.175781 2.738281 1.175781 l 2.75 -4.5 h 4.5 l 2.75 4.5 c 1 1 3 0.527344 2.738281 -1.175781 l -0.738281 -8.324219 c -0.214844 -1.203125 -1.402344 -2.03125 -2.972656 -2.027344 z m 0.25 2 h 0.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.75 h 0.75 c 0.136719 0 0.25 0.113281 0.25 0.25 v 0.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -0.75 v 0.75 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -0.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -0.75 h -0.75 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -0.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 h 0.75 v -0.75 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 5.765625 -0.113281 c 0.59375 0 1.078125 0.484375 1.078125 1.082031 s -0.484375 1.082031 -1.078125 1.082031 c -0.597656 0 -1.082031 -0.484375 -1.082031 -1.082031 s 0.484375 -1.082031 1.082031 -1.082031 z m 2.96875 2.019531 c 0.597656 0 1.082031 0.484375 1.082031 1.078125 c 0 0.597656 -0.484375 1.082031 -1.082031 1.082031 c -0.59375 0 -1.078125 -0.484375 -1.078125 -1.082031 c 0 -0.59375 0.484375 -1.078125 1.078125 -1.078125 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwGamepadSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGamepadSymbolic;
