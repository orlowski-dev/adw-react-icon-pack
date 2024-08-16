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
        <path d="m 2 3 v 11 h 11 v -2 h -9 v -9 z m 0 0"/>
        <path d="m 3 -0.0234375 l -3 3.9999995 h 6 z m 0 0"/>
        <path d="m 16 12.976562 l -4 3 v -6 z m 0 0"/>
        <path d="m 14.164062 2.839844 c -0.535156 -0.132813 -1.078124 0.195312 -1.210937 0.730468 c -0.445313 1.800782 -1.589844 3.417969 -2.9375 3.785157 c -0.101563 0.027343 -0.210937 0.023437 -0.464844 -0.097657 c -0.253906 -0.121093 -0.597656 -0.359374 -0.972656 -0.632812 c -0.378906 -0.273438 -0.792969 -0.582031 -1.304687 -0.816406 c -0.507813 -0.230469 -1.183594 -0.375 -1.859376 -0.160156 c -1.292968 0.414062 -1.863281 1.558593 -2.34375 2.5 c -0.480468 0.945312 -0.761718 1.808593 -0.761718 1.808593 c -0.171875 0.527344 0.113281 1.089844 0.636718 1.261719 c 0.527344 0.175781 1.089844 -0.113281 1.261719 -0.636719 c 0 0 0.246094 -0.742187 0.644531 -1.523437 c 0.398438 -0.78125 1.0625 -1.472656 1.171876 -1.507813 c 0.097656 -0.03125 0.183593 -0.03125 0.425781 0.078125 c 0.246093 0.113282 0.582031 0.34375 0.953125 0.613282 c 0.375 0.273437 0.789062 0.582031 1.292968 0.820312 c 0.503907 0.242188 1.164063 0.40625 1.84375 0.222656 c 2.386719 -0.648437 3.792969 -2.960937 4.355469 -5.234375 c 0.132813 -0.535156 -0.191406 -1.078125 -0.730469 -1.210937 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwGraphSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGraphSymbolic;
