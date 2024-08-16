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
      <path d="M3.288 1.969c-.742 0-1.32.577-1.32 1.32v9.423c0 .742.578 1.32 1.32 1.32h9.424c.742 0 1.32-.578 1.32-1.32V3.288c0-.742-.578-1.32-1.32-1.32zM7 4h2v2H7zm0 3h2v5H7z" style="marker:none" color="#bebebe" overflow="visible" fill="#474747"/>
    </svg>
  );
};

const AdwPreferencesSystemDetailsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesSystemDetailsSymbolic;
