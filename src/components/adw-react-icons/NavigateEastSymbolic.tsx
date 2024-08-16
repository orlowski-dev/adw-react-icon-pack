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
      <path d="m 16 8 c 0 -1.105469 -0.894531 -2 -2 -2 s -2 0.894531 -2 2 s 0.894531 2 2 2 s 2 -0.894531 2 -2 z m -5 0 c 0 -0.410156 -0.25 -0.777344 -0.628906 -0.925781 c -5.0625 -2.027344 -9.128906 -3.042969 -9.128906 -3.042969 c -0.4375 -0.109375 -0.890626 0.085938 -1.113282 0.476562 c -0.222656 0.390626 -0.1523435 0.882813 0.164063 1.199219 l 2.292969 2.292969 l -2.292969 2.292969 c -0.3164065 0.316406 -0.386719 0.808593 -0.164063 1.199219 c 0.222656 0.390624 0.675782 0.585937 1.113282 0.480468 c 0 0 4.066406 -1.019531 9.128906 -3.042968 c 0.378906 -0.152344 0.628906 -0.519532 0.628906 -0.929688 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwNavigateEastSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNavigateEastSymbolic;
