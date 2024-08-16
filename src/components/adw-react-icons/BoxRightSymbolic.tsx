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
      <path d="m 15 3 c 0 -1.644531 -1.355469 -3 -3 -3 h -7 c -1.644531 0 -3 1.355469 -3 3 v 10 c 0 1.644531 1.355469 3 3 3 h 7 c 1.644531 0 3 -1.355469 3 -3 z m -2 0 v 10 c 0 0.570312 -0.429688 1 -1 1 h -7 c -0.570312 0 -1 -0.429688 -1 -1 v -10 c 0 -0.570312 0.429688 -1 1 -1 h 7 c 0.570312 0 1 0.429688 1 1 z m -2.082031 5 c 0 -0.261719 -0.101563 -0.511719 -0.28125 -0.695312 l -2.917969 -3 c -0.183594 -0.1875 -0.433594 -0.296876 -0.570312 -0.300782 l -1.148438 -0.003906 v 8 l 1.148438 -0.003906 c 0.136718 -0.003906 0.386718 -0.109375 0.570312 -0.300782 l 2.917969 -3 c 0.179687 -0.183593 0.28125 -0.433593 0.28125 -0.695312 z m 0 0" fill="currentColor" fill-rule="evenodd"/>
    </svg>
  );
};

const AdwBoxRightSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBoxRightSymbolic;
