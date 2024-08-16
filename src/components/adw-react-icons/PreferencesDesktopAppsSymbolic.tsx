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
      <path d="M1 0C.446 0 0 .446 0 1v5c0 .554.446 1 1 1h5c.554 0 1-.446 1-1V1c0-.554-.446-1-1-1zm1 3h3v2H2zm7-3c-.554 0-1 .446-1 1v5c0 .554.446 1 1 1h5c.554 0 1-.446 1-1V1c0-.554-.446-1-1-1zm1 3h3v2h-3zM1 8c-.554 0-1 .446-1 1v5c0 .554.446 1 1 1h5c.554 0 1-.446 1-1V9c0-.554-.446-1-1-1zm1 3h3v2H2zm7-3c-.554 0-1 .446-1 1v5c0 .554.446 1 1 1h5c.554 0 1-.446 1-1V9c0-.554-.446-1-1-1zm1 3h3v2h-3z" fill="#2e3436"/>
    </svg>
  );
};

const AdwPreferencesDesktopAppsSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesDesktopAppsSymbolic;
