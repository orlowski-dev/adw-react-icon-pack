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
      <g fill="#474747"><path d="M3.469 0c-.49 0-.796.229-1.032.47C2.202.71 2 1.03 2 1.503V2H0v14h7v-2l-4.95.05L2 4h2V2h3v2h2v1h2V2H9v-.403A1.669 1.669 0 008.594.564 1.528 1.528 0 007.437.03V0H3.47z" style="line-height:normal;-inkscape-font-specification:Sans;text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none" color="#bebebe" font-weight="400" font-family="Sans" overflow="visible"/><path d="M6 10h2c.276-1.103 1.065-3.724 3-4h3v2h2v2h-2v2h2v2h-2v2h-3c-1.935-.276-2.724-2.897-3-4H6z" fill-rule="evenodd"/></g>
    </svg>
  );
};

const AdwGnomepowermanagersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGnomepowermanagersymbolic;
