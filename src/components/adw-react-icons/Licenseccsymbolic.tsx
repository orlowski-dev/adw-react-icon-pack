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
        <path d="m 8 0 c -4.417969 0 -8 3.582031 -8 8 s 3.582031 8 8 8 s 8 -3.582031 8 -8 s -3.582031 -8 -8 -8 z m 0 2 c 3.3125 0 6 2.6875 6 6 s -2.6875 6 -6 6 s -6 -2.6875 -6 -6 s 2.6875 -6 6 -6 z m 0 0"/>
        <path d="m 5.542969 5.445312 c -0.648438 0 -1.292969 0.25 -1.78125 0.742188 c -0.972657 0.984375 -0.972657 2.589844 0 3.574219 c 0.976562 0.984375 2.582031 0.984375 3.558593 0 c 0.242188 -0.246094 0.238282 -0.640625 -0.003906 -0.882813 c -0.246094 -0.242187 -0.640625 -0.238281 -0.882812 0.007813 c -0.5 0.503906 -1.285156 0.503906 -1.785156 0 c -0.5 -0.507813 -0.5 -1.316407 0 -1.824219 c 0.5 -0.503906 1.285156 -0.503906 1.785156 0 c 0.242187 0.246094 0.636718 0.246094 0.882812 0.003906 c 0.242188 -0.242187 0.246094 -0.636718 0.003906 -0.878906 c -0.488281 -0.492188 -1.132812 -0.742188 -1.777343 -0.742188 z m 0 0"/>
        <path d="m 10.542969 5.445312 c -0.648438 0 -1.292969 0.25 -1.78125 0.742188 c -0.972657 0.984375 -0.972657 2.589844 0 3.574219 c 0.976562 0.984375 2.582031 0.984375 3.558593 0 c 0.242188 -0.246094 0.238282 -0.640625 -0.003906 -0.882813 c -0.246094 -0.242187 -0.640625 -0.238281 -0.882812 0.007813 c -0.5 0.503906 -1.285156 0.503906 -1.785156 0 c -0.5 -0.507813 -0.5 -1.316407 0 -1.824219 c 0.5 -0.503906 1.285156 -0.503906 1.785156 0 c 0.242187 0.246094 0.636718 0.246094 0.882812 0.003906 c 0.242188 -0.242187 0.246094 -0.636718 0.003906 -0.878906 c -0.488281 -0.492188 -1.132812 -0.742188 -1.777343 -0.742188 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwLicenseccsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwLicenseccsymbolic;
