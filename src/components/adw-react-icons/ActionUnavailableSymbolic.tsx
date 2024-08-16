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
      <path d="m 8 0 c -4.410156 0 -8 3.589844 -8 8 s 3.589844 8 8 8 s 8 -3.589844 8 -8 s -3.589844 -8 -8 -8 z m 0 2 c 3.332031 0 6 2.667969 6 6 c 0 1.300781 -0.40625 2.503906 -1.105469 3.480469 l -8.378906 -8.375 c 0.980469 -0.699219 2.183594 -1.105469 3.484375 -1.105469 z m -4.894531 2.519531 l 8.378906 8.375 c -0.980469 0.699219 -2.183594 1.105469 -3.484375 1.105469 c -3.332031 0 -6 -2.667969 -6 -6 c 0 -1.300781 0.40625 -2.503906 1.105469 -3.480469 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwActionUnavailableSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwActionUnavailableSymbolic;
