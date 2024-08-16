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
      <path d="m 6.539062 1 l -3.539062 12 h -1 v 1 h 4 v -1 h -0.957031 l 0.894531 -3 h 3.125 l 0.890625 3 h -0.953125 v 1 h 5 v -1 h -0.660156 l -3.839844 -12 z m 0.960938 3.789062 l 1.261719 4.210938 h -2.527344 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwFormatTextRichSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwFormatTextRichSymbolic;
