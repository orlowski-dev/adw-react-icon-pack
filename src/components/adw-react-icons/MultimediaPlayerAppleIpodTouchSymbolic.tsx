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
      <path d="m 5 0 c -1.644531 0 -3 1.355469 -3 3 v 10 c 0 1.644531 1.355469 3 3 3 h 6 c 1.644531 0 3 -1.355469 3 -3 v -10 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 6 c 0.570312 0 1 0.429688 1 1 v 4 c 0 0.554688 -0.445312 1 -1 1 h -6 c -0.554688 0 -1 -0.445312 -1 -1 v -4 c 0 -0.570312 0.429688 -1 1 -1 z m 1.441406 8.003906 c 0.097656 -0.011718 0.195313 0.007813 0.28125 0.046875 l 3 1.5 c 0.367188 0.1875 0.367188 0.710938 0 0.894531 l -3 1.5 c -0.332031 0.167969 -0.722656 -0.074218 -0.722656 -0.445312 v -3 c 0 -0.253906 0.191406 -0.464844 0.441406 -0.496094 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwMultimediaPlayerAppleIpodTouchSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMultimediaPlayerAppleIpodTouchSymbolic;
