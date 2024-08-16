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
      <path d="M3.187 0C1.982 0 1 1.018 1 2.219V13.78C1 14.982 1.982 16 3.187 16h9.625C14.017 16 15 14.982 15 13.781V2.22C15 1.018 14.017 0 12.812 0zM3 3h10v11H3zm1 1v4h8.031V4zm2.344 1.438a.5.5 0 01.062 0 .5.5 0 01.594.5V6h2v-.063a.5.5 0 111 0V6c0 .545-.455 1-1 1H7c-.546 0-1-.455-1-1v-.063a.5.5 0 01.344-.5zM4.03 9v4h8.031V9zm2.313 1.438a.5.5 0 01.062 0 .5.5 0 01.594.5V11h2v-.063a.5.5 0 111 0V11c0 .545-.455 1-1 1H7c-.546 0-1-.455-1-1v-.063a.5.5 0 01.344-.5z" style="marker:none" color="#000" overflow="visible" fill="#474747" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwSystemfilemanagersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSystemfilemanagersymbolic;
