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
      <path d="m 10 3 c -1.5625 0.003906 -2.980469 0.914062 -3.628906 2.332031 c -0.425782 -0.214843 -0.894532 -0.332031 -1.371094 -0.332031 c -1.65625 0 -3 1.34375 -3 3 c 0 0.347656 0.0625 0.695312 0.183594 1.023438 c -1.25 0.160156 -2.183594 1.21875 -2.183594 2.476562 c 0 1.378906 1.121094 2.5 2.5 2.5 h 10.5 c 1.65625 0 3 -1.34375 3 -3 c 0 -1.332031 -0.882812 -2.503906 -2.160156 -2.875 c 0.105468 -0.367188 0.160156 -0.746094 0.160156 -1.125 c 0 -2.210938 -1.789062 -4 -4 -4 z m 0 2 h 0.003906 c 1.125 0 1.996094 0.871094 1.996094 2 c 0 0.1875 -0.027344 0.375 -0.078125 0.558594 c -0.3125 1.0625 0.296875 2.175781 1.359375 2.484375 c 0.433594 0.125 0.71875 0.503906 0.71875 0.957031 c 0 0.578125 -0.425781 1 -1 1 h -10.5 c -0.300781 0 -0.5 -0.199219 -0.5 -0.5 c 0 -0.265625 0.171875 -0.457031 0.4375 -0.492188 c 1.269531 -0.164062 2.0625 -1.464843 1.625 -2.671874 c -0.042969 -0.105469 -0.0625 -0.222657 -0.0625 -0.335938 v -0.003906 c 0 -0.574219 0.421875 -0.996094 1 -0.996094 c 0.15625 0 0.3125 0.039062 0.453125 0.109375 c 1.011719 0.527344 2.257813 0.09375 2.734375 -0.945313 c 0.328125 -0.710937 1.027344 -1.164062 1.8125 -1.164062 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCloudOutlineThickSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCloudOutlineThickSymbolic;
