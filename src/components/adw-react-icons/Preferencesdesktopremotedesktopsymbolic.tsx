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
      <g color="#bebebe" fill="#474747"><path d="M12 1c1.662 0 3 1.338 3 3v6c0 1.662-1.338 3-3 3H4c-1.662 0-3-1.338-3-3V4c0-1.662 1.338-3 3-3zm0 2H4c-.554 0-1 .446-1 1v6c0 .554.446 1 1 1h8c.554 0 1-.446 1-1V4c0-.554-.446-1-1-1zM8 14c-5 0-5 1-5 1 0 1 1 1 1 1h8c1 0 1-1 1-1s0-1-5-1z" style="marker:none" overflow="visible"/><path d="M4.5 5S4 5 4 5.5v4c0 .5.5.5.5.5h4c.5 0 .5-.5.5-.5v-4C9 5 8.563 5 8.5 5zM5 6.998h3v2H5zM10.5 4s-.5 0-.5.5v.984s0 .5.5.5l1 .001s.5 0 .5-.5v-.984s0-.5-.5-.5z" style="marker:none" overflow="visible"/></g>
    </svg>
  );
};

const AdwPreferencesdesktopremotedesktopsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesdesktopremotedesktopsymbolic;
