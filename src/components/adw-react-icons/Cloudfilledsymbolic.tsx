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
      <path d="m 10 3 c -1.5625 0.003906 -2.980469 0.914062 -3.628906 2.332031 c -0.425782 -0.214843 -0.894532 -0.332031 -1.371094 -0.332031 c -1.65625 0 -3 1.34375 -3 3 c 0 0.347656 0.0625 0.695312 0.183594 1.023438 c -1.25 0.160156 -2.183594 1.21875 -2.183594 2.476562 c 0 1.378906 1.121094 2.5 2.5 2.5 h 10.5 c 1.65625 0 3 -1.34375 3 -3 c 0 -1.332031 -0.882812 -2.503906 -2.160156 -2.875 c 0.105468 -0.367188 0.160156 -0.746094 0.160156 -1.125 c 0 -2.210938 -1.789062 -4 -4 -4 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCloudfilledsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCloudfilledsymbolic;
