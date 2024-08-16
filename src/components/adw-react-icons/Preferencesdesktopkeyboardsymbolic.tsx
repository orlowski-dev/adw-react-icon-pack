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
      <path d="M1 2c-.554 0-1 .446-1 1v11c0 .554.446 1 1 1h13.006c.554 0 1-.446 1-1V3c0-.554-.446-1-1-1zm1.365 2h1.656v2h-2V4.393c0-.218.154-.393.344-.393zm2.656 0h2v2h-2zm3 0h2v2h-2zm3 0h1.657c.19 0 .343.175.343.393V6h-2zm-8 3h2v2h-2zm3 0h2v2h-2zm3 0h2v2h-2zm-6.656 4h10.313c.19 0 .343.175.343.393v1.214c0 .218-.153.393-.343.393H2.365c-.19 0-.344-.175-.344-.393v-1.214c0-.218.154-.393.344-.393z" style="marker:none" color="#bebebe" overflow="visible" fill="#2e3436"/>
    </svg>
  );
};

const AdwPreferencesdesktopkeyboardsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesdesktopkeyboardsymbolic;
