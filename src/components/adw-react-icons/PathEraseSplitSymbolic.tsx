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
      <g fill="currentColor">
        <path d="m 3.335938 7.15625 c -2.171876 0.582031 -3.589844 2.699219 -3.2968755 4.929688 c 0.2929685 2.234374 2.2109375 3.914062 4.4609375 3.914062 h 6.5 v -2 h -6.5 c -1.261719 0 -2.3125 -0.921875 -2.476562 -2.175781 c -0.167969 -1.25 0.609374 -2.410157 1.832031 -2.738281 z m 0 0"/>
        <path d="m 5 0 v 2 h 6.5 c 1.261719 0 2.3125 0.921875 2.480469 2.171875 c 0.164062 1.253906 -0.613281 2.414063 -1.835938 2.742187 l 0.519531 1.929688 c 2.171876 -0.582031 3.589844 -2.699219 3.296876 -4.933594 c -0.292969 -2.230468 -2.210938 -3.910156 -4.460938 -3.910156 z m 0 0"/>
        <path d="m 5 7 v 2 h 2 v -2 z m 0 0"/>
        <path d="m 9 7 v 2 h 2 v -2 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwPathEraseSplitSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPathEraseSplitSymbolic;
