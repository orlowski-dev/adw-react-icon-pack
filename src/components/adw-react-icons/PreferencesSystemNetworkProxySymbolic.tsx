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
      <g fill="#474747"><path d="M4.96 8.635V11H1.367c-.206 0-.368.205-.368.467v1.058c0 .262.162.467.368.467h10.264c.206 0 .368-.205.368-.467v-1.058c0-.262-.162-.467-.368-.467H7.977V8.635z"/><path d="M3.8 0C2.849 0 2 .793 2 1.746v6.613c0 .953.849 1.746 1.868 1.746h5.264c1.02 0 1.868-.793 1.868-1.746V1.746C11 .793 10.151 0 9.132 0zM4 2h5c0 .317 0-.316 0 0v6H4s0 .044 0 0V2c0-.044 0 0 0 0z" style="line-height:normal;-inkscape-font-specification:'Bitstream Vera Sans';text-indent:0;text-align:start;text-decoration-line:none;text-transform:none;marker:none" color="#000" font-weight="400" font-family="Bitstream Vera Sans" overflow="visible"/><path d="M5 2.971h3v1.003H5zm2 2.005h1v1.002H7z" style="marker:none" color="#000" overflow="visible"/><path d="M9.229 3c.07 0 0 .209 0 .476v1.078c0 .267.07.476.16.476h4.451c.09 0 .16-.209.16-.476V3.476c0-.267-.07-.476-.16-.476-.16 0-4.585.063-4.611 0zm-3.256 8.624c.08-.06.253.039.394.223l.573.747c.142.184.191.375.112.435l-3.935 2.954c-.08.059-.253-.039-.395-.224l-.573-.746c-.141-.184-.19-.376-.111-.435 0 0 3.946-2.893 3.935-2.954z"/><path d="M7.027 11.624c-.08-.06-.253.039-.394.223l-.573.747c-.142.184-.191.375-.112.435l3.935 2.954c.08.059.253-.039.395-.224l.573-.746c.141-.184.19-.376.111-.435 0 0-3.946-2.893-3.935-2.954z"/></g>
    </svg>
  );
};

const AdwPreferencesSystemNetworkProxySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesSystemNetworkProxySymbolic;
