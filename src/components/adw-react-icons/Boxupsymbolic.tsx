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
      <path d="m 3 2 c -1.644531 0 -3 1.355469 -3 3 v 7 c 0 1.644531 1.355469 3 3 3 h 10 c 1.644531 0 3 -1.355469 3 -3 v -7 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 10 c 0.570312 0 1 0.429688 1 1 v 7 c 0 0.570312 -0.429688 1 -1 1 h -10 c -0.570312 0 -1 -0.429688 -1 -1 v -7 c 0 -0.570312 0.429688 -1 1 -1 z m 5 2.082031 c -0.261719 0 -0.511719 0.101563 -0.695312 0.28125 l -3 2.921875 c -0.1875 0.179688 -0.296876 0.429688 -0.300782 0.566406 l -0.003906 1.148438 h 8 l -0.003906 -1.148438 c -0.003906 -0.136718 -0.109375 -0.386718 -0.300782 -0.566406 l -3 -2.921875 c -0.183593 -0.179687 -0.433593 -0.28125 -0.695312 -0.28125 z m 0 0" fill="currentColor" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwBoxupsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBoxupsymbolic;
