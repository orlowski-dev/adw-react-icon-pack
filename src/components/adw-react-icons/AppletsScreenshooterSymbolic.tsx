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
      <g fill="#474747"><path d="M14 0c1.2 0 2 .798 2 2v4h-2V2.25c0-.124-.057-.25-.188-.25H2.188C2.056 2 2 2.126 2 2.25V14c-1.2 0-2-.923-2-2.125V2C0 .798.8 0 2 0z" style="marker:none" color="#bebebe" overflow="visible"/><path d="M7.25 6c-.471 0-.743.542-.75 1v1H4c-.469.065-1 .542-1 1v6c0 .458.527 1 1 1h10c.473 0 1-.542 1-1V9c0-.458-.527-1-1-1h-2.5V7c0-.458-.341-1-.813-1zM9 9a3 3 0 110 6 3 3 0 010-6z" style="marker:none" color="#bebebe" overflow="visible"/><path d="M11 12a2 2 0 01-2 2 2 2 0 01-2-2 2 2 0 012-2 2 2 0 012 2z"/></g>
    </svg>
  );
};

const AdwAppletsScreenshooterSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAppletsScreenshooterSymbolic;
