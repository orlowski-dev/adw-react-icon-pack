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
      <path d="m 4 0 c -1.644531 0 -3 1.355469 -3 3 v 6 c 0 1.644531 1.355469 3 3 3 h 5 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 5 c 0.570312 0 0.886719 0.441406 1 1 v 5 c 0 0.472656 -0.429688 1 -1 1 h -5 c -0.554688 0 -1 -0.445312 -1 -1 v -5 c 0 -0.554688 0.445312 -1 1 -1 z m 2.503906 1.003906 c -1.375 0 -2.515625 1.128906 -2.5 2.5 l -0.003906 2.496094 h 2.5 c 1.371094 0 2.5 -1.125 2.5 -2.496094 c 0 -1.375 -1.128906 -2.5 -2.5 -2.5 z m 6.496094 1.175782 v 7.820312 c 0 0.472656 -0.429688 1 -1 1 h -8 c 0 1.644531 1.355469 3 3 3 h 5 c 1.644531 0 3 -1.355469 3 -3 v -6 c 0 -1.292969 -0.839844 -2.40625 -2 -2.820312 z m -6.492188 0.320312 c 0.550782 0 1 0.449219 1 1 s -0.449218 1 -1 1 c -0.554687 0 -1 -0.449219 -1 -1 s 0.445313 -1 1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwDriveMultidiskSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDriveMultidiskSymbolic;
