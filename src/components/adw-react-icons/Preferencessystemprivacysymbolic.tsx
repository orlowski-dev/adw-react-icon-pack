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
      <path d="m 8 0 c 0.554688 0 1 0.445312 1 1 v 6.5 s 0 0.5 0.5 0.5 s 0.5 -0.5 0.5 -0.5 v -4.5 c 0 -0.554688 0.445312 -1 1 -1 s 1 0.445312 1 1 v 8.5 c 0 0.5 0.5 0.5 0.5 0.5 l 1.792969 -1.707031 c 0.1875 -0.195313 0.445312 -0.300781 0.71875 -0.304688 c 1.082031 0.085938 1.144531 1.269531 0.695312 1.71875 l -3 3 c -0.707031 0.792969 -1.757812 1.289063 -2.707031 1.292969 h -6 c -3 0 -3 -3 -3 -3 v -8 c 0 -0.554688 0.445312 -1 1 -1 s 1 0.445312 1 1 v 3.5 s 0 0.5 0.5 0.5 s 0.5 -0.5 0.5 -0.5 v -6.5 c 0 -0.554688 0.445312 -1 1 -1 s 1 0.445312 1 1 v 5.5 s 0 0.5 0.5 0.5 s 0.5 -0.5 0.5 -0.5 v -6.5 c 0 -0.554688 0.445312 -1 1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwPreferencessystemprivacysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencessystemprivacysymbolic;
