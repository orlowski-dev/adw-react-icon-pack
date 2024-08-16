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
      <path d="m 8 2 c -2.761719 0 -5 2.238281 -5 5 c 0.003906 0.589844 0.113281 1.175781 0.320312 1.730469 h -0.011718 c 0.53125 1.652343 3.152344 4.039062 4.691406 5.578125 v -0.003906 c 1.257812 -1.253907 3.230469 -3.074219 4.207031 -4.601563 c 0.21875 -0.34375 0.386719 -0.671875 0.484375 -0.972656 h -0.015625 c 0.210938 -0.554688 0.320313 -1.140625 0.324219 -1.730469 c 0 -2.761719 -2.238281 -5 -5 -5 z m 0 3.078125 c 1.0625 0 1.921875 0.859375 1.921875 1.921875 c -0.007813 0.988281 -0.757813 1.808594 -1.742187 1.902344 l -0.53125 -0.019532 c -0.90625 -0.167968 -1.566407 -0.957031 -1.570313 -1.882812 c 0 -1.0625 0.859375 -1.921875 1.921875 -1.921875 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwMapMarkerSmallSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMapMarkerSmallSymbolic;
