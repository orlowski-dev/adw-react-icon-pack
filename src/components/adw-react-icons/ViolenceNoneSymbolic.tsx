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
        <path d="m 14.285156 0.59375 c -0.382812 0.011719 -0.746094 0.171875 -1.015625 0.441406 l -3.535156 3.535156 l 1.414063 1.414063 l 2.535156 -2.535156 c 0.574218 0.273437 1.257812 0.15625 1.707031 -0.292969 c 0.585937 -0.585938 0.585937 -1.535156 0 -2.121094 c -0.292969 -0.292968 -0.691406 -0.453125 -1.105469 -0.441406 z m -5.257812 4.683594 l -2.402344 2.40625 l 3.375 3.378906 c 0.824219 -0.628906 1.679688 -1.367188 2.5625 -2.25 z m -3.464844 3.46875 l -5.019531 5.019531 c 0.558593 0.554687 3.765625 1.097656 8.21875 -1.820313 z m 0 0"/>
        <path d="m 1.53125 0.46875 l -1.0625 1.0625 l 14 14 l 1.0625 -1.0625 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwViolenceNoneSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViolenceNoneSymbolic;
