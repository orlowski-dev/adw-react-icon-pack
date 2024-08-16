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
      <g fill="#474747"><path d="M5.002 10L12 3l2 2-7 7H5z" fill-rule="evenodd"/><path d="M1.094 0C.525 0 0 .503 0 1.063v13.874C0 15.498.525 16 1.094 16h10.812c.558 0 1.074-.485 1.094-1.031V8l-2 2v4H2V2h5l2 2 1.531-1.531L8.344.344A1.12 1.12 0 007.563 0z" style="line-height:normal;-inkscape-font-specification:Sans;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none" color="#000" font-weight="400" font-family="Sans" overflow="visible"/><path d="M14.19 1.011a.513.513 0 00-.364.152l-1.162 1.16 2.004 2.005 1.163-1.162a.514.514 0 000-.728l-1.277-1.275a.514.514 0 00-.364-.152z" style="isolation:auto;mix-blend-mode:normal;marker:none" color="#000" overflow="visible" fill-rule="evenodd"/></g>
    </svg>
  );
};

const AdwTextEditorSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTextEditorSymbolic;
