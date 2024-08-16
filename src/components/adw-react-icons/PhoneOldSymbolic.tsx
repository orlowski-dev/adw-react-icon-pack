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
      <path d="M4.001 0c-1.01.005-1 1-1 1v12l.002.016v.136c0 1.024.857 1.848 1.92 1.848h5.158c1.063 0 1.92-.824 1.92-1.848V5c0-1.023-.937-2-2-2h-5V1s-.009-.994-1-1zm1.754 5H9.25a.75.75 0 01.752.752v1.496A.75.75 0 019.251 8H5.755a.75.75 0 01-.752-.752V5.752A.75.75 0 015.755 5zm-.252 5h1.143a.499.499 0 110 1H5.503a.499.499 0 110-1zm2.857 0h1.143a.499.499 0 110 1H8.36a.499.499 0 110-1zm-2.857 2h1.143a.499.499 0 110 1H5.503a.499.499 0 110-1zm2.857 0h1.143a.499.499 0 110 1H8.36a.499.499 0 110-1z" style="marker:none" color="#000" overflow="visible" fill="#2e3436"/>
    </svg>
  );
};

const AdwPhoneOldSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPhoneOldSymbolic;
