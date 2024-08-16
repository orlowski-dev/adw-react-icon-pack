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
      <g fill="#474747"><path d="M2 5h2.484l2.97-3H8v12h-.475l-3.04-3H2z" style="marker:none" color="#bebebe" overflow="visible"/><path d="M14 8c0-2.166-.739-4.02-2-5h-1v2c.607.789 1 1.76 1 3 0 1.241-.393 2.22-1 3v2h1c1.223-.995 2-2.873 2-5z" style="marker:none" color="#000" overflow="visible"/><path d="M11 8c0-1.257-.312-2.216-1-3H9v6h1c.672-.837 1-1.742 1-3z" style="line-height:normal;-inkscape-font-specification:Sans;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none" color="#000" font-weight="400" font-family="Sans" overflow="visible"/></g>
    </svg>
  );
};

const AdwMultimediaVolumeControlSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwMultimediaVolumeControlSymbolic;
