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
        <path d="m 11.164062 5.863281 c 0.640626 0.042969 0.933594 0.824219 0.476563 1.277344 l -3.640625 3.640625 c -0.292969 0.292969 -0.769531 0.292969 -1.0625 0 l -2.175781 -2.109375 c -0.707031 -0.707031 0.355469 -1.769531 1.0625 -1.0625 l 1.644531 1.578125 l 3.109375 -3.109375 c 0.15625 -0.152344 0.367187 -0.230469 0.585937 -0.214844 z m 0 0"/>
        <path d="m 7.996094 0 c -4.402344 0 -7.996094 3.59375 -7.996094 8 s 3.59375 8 7.996094 8 c 4.40625 0 7.996094 -3.59375 7.996094 -8 s -3.589844 -8 -7.996094 -8 z m 0 2 c 3.324218 0 5.996094 2.675781 5.996094 6 s -2.671876 6 -5.996094 6 c -3.320313 0 -5.996094 -2.675781 -5.996094 -6 s 2.675781 -6 5.996094 -6 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwCheckRoundOutlineSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCheckRoundOutlineSymbolic;
