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
        <path d="m 3.5 0 c -1.921875 0 -3.5 1.578125 -3.5 3.5 v 9 c 0 1.921875 1.578125 3.5 3.5 3.5 h 9 c 1.921875 0 3.5 -1.578125 3.5 -3.5 v -9 c 0 -1.921875 -1.578125 -3.5 -3.5 -3.5 z m 0 2 h 9 c 0.847656 0 1.5 0.652344 1.5 1.5 v 9 c 0 0.847656 -0.652344 1.5 -1.5 1.5 h -9 c -0.847656 0 -1.5 -0.652344 -1.5 -1.5 v -9 c 0 -0.847656 0.652344 -1.5 1.5 -1.5 z m 0 0"/>
        <path d="m 3.5 3 c 0.277344 0 0.5 0.222656 0.5 0.5 v 9 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -9 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 5.5 3 c 0.277344 0 0.5 0.222656 0.5 0.5 v 9 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -9 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 7.5 3 c 0.277344 0 0.5 0.222656 0.5 0.5 v 9 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -9 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 9.5 3 c 0.277344 0 0.5 0.222656 0.5 0.5 v 9 c 0 0.277344 -0.222656 0.5 -0.5 0.5 s -0.5 -0.222656 -0.5 -0.5 v -9 c 0 -0.277344 0.222656 -0.5 0.5 -0.5 z m 0 0"/>
        <path d="m 13.253906 0.984375 c -1.242187 0 -2.261718 1.019531 -2.261718 2.261719 v 9.507812 c 0 1.246094 1.019531 2.261719 2.261718 2.261719 c 1.246094 0 2.261719 -1.015625 2.261719 -2.261719 v -9.507812 c 0 -1.242188 -1.015625 -2.261719 -2.261719 -2.261719 z m 0 1 c 0.707032 0 1.261719 0.554687 1.261719 1.261719 v 9.507812 c 0 0.707032 -0.554687 1.261719 -1.261719 1.261719 c -0.707031 0 -1.261718 -0.554687 -1.261718 -1.261719 v -9.507812 c 0 -0.707032 0.554687 -1.261719 1.261718 -1.261719 z m 0 0"/>
        <path d="m 13.253906 1.484375 c 0.972656 0 1.761719 0.789063 1.761719 1.761719 v 9.507812 c 0 0.972656 -0.789063 1.761719 -1.761719 1.761719 s -1.761718 -0.789063 -1.761718 -1.761719 v -9.507812 c 0 -0.972656 0.789062 -1.761719 1.761718 -1.761719 z m 0 0" fill-opacity="0.239639"/>
    </g>
    </svg>
  );
};

const AdwContainerSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwContainerSymbolic;
