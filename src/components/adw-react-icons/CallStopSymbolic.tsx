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
      <path d="m 14.234375 11.714844 c -0.382813 0.382812 -1 0.382812 -1.386719 0 l -1.039062 -1.039063 l -1.039063 -1.042969 c -0.386719 -0.382812 -0.386719 -1 0 -1.386718 l 0.492188 -0.492188 c -2.035157 -1.109375 -4.5 -1.109375 -6.535157 0 l 0.492188 0.492188 c 0.386719 0.386718 0.386719 1.003906 0 1.386718 l -1.039062 1.042969 l -1.039063 1.039063 c -0.386719 0.382812 -1.003906 0.382812 -1.386719 0 l -1.042968 -1.039063 c -0.957032 -0.957031 -0.957032 -2.511719 0 -3.46875 l 0.347656 -0.347656 c 3.816406 -3.816406 10.054687 -3.816406 13.871094 0 l 0.347656 0.347656 c 0.957031 0.957031 0.957031 2.511719 0 3.46875 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwCallStopSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCallStopSymbolic;
