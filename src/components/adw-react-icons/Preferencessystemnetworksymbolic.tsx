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
      <g color="#bebebe" font-weight="400" fill="#474747"><path d="M1.75 4C.798 4 0 4.798 0 5.75v4.5C0 11.202.798 12 1.75 12h.125l-.781 1.563L.375 15h9.25l-.719-1.438L8.125 12h.125c.952 0 1.75-.798 1.75-1.75v-4.5C10 4.798 9.202 4 8.25 4zM2 6h6v4H2z" style="line-height:normal;-inkscape-font-specification:Sans;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none" font-family="Sans" overflow="visible"/><path d="M7.75 1C6.798 1 6 1.798 6 2.75V3h8v4h-3v3.25c0 .66-.252 1.27-.656 1.75h5.28l-1.5-3h.126C15.202 9 16 8.202 16 7.25v-4.5C16 1.798 15.202 1 14.25 1z" style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none" font-family="Andale Mono" overflow="visible"/></g>
    </svg>
  );
};

const AdwPreferencessystemnetworksymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencessystemnetworksymbolic;
