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
      <path d="m -0.015625 8 c 0 -1.105469 0.894531 -2 2 -2 c 1.101563 0 2 0.894531 2 2 s -0.898437 2 -2 2 c -1.105469 0 -2 -0.894531 -2 -2 z m 5 0 c 0 -0.410156 0.246094 -0.777344 0.628906 -0.925781 c 5.0625 -2.027344 9.128907 -3.042969 9.128907 -3.042969 c 0.433593 -0.109375 0.890624 0.085938 1.109374 0.476562 c 0.222657 0.390626 0.15625 0.882813 -0.160156 1.199219 l -2.292968 2.292969 l 2.292968 2.292969 c 0.316406 0.316406 0.382813 0.808593 0.160156 1.199219 c -0.21875 0.390624 -0.675781 0.585937 -1.109374 0.480468 c 0 0 -4.066407 -1.019531 -9.128907 -3.042968 c -0.382812 -0.152344 -0.628906 -0.519532 -0.628906 -0.929688 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNavigatewestsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNavigatewestsymbolic;
