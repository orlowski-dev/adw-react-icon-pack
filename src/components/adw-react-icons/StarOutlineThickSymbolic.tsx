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
      <path d="m 7.976562 0.164062 l -2.457031 4.929688 l -5.4609372 0.839844 l 3.9296872 3.863281 l -0.886719 5.449219 l 4.886719 -2.546875 l 4.910157 2.53125 l -0.332032 -1.96875 l -0.578125 -3.46875 l 3.921875 -3.882813 l -5.449218 -0.816406 z m 0.007813 4.464844 l 1.15625 2.289063 l 2.523437 0.378906 l -1.820312 1.804687 l 0.421875 2.519532 l -2.28125 -1.175782 l -2.265625 1.179688 l 0.414062 -2.53125 l -1.824218 -1.789062 l 2.539062 -0.390626 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwStarOutlineThickSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStarOutlineThickSymbolic;
