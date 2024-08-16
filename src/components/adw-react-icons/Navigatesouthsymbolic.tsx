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
      <path d="m 8 16 c 1.105469 0 2 -0.894531 2 -2 s -0.894531 -2 -2 -2 s -2 0.894531 -2 2 s 0.894531 2 2 2 z m 0 -5 c 0.410156 0 0.777344 -0.25 0.925781 -0.628906 c 2.027344 -5.0625 3.042969 -9.128906 3.042969 -9.128906 c 0.109375 -0.4375 -0.085938 -0.890626 -0.476562 -1.113282 c -0.390626 -0.2187498 -0.882813 -0.1523435 -1.199219 0.164063 l -2.292969 2.292969 l -2.292969 -2.292969 c -0.316406 -0.3164065 -0.808593 -0.3828128 -1.199219 -0.164063 c -0.390624 0.222656 -0.585937 0.675782 -0.476562 1.113282 c 0 0 1.015625 4.066406 3.042969 9.128906 c 0.148437 0.378906 0.515625 0.628906 0.925781 0.628906 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNavigatesouthsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNavigatesouthsymbolic;
