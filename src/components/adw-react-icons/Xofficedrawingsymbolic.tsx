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
      <path d="m 5 1 c -1.644531 0 -3 1.355469 -3 3 v 9 c 0 1.644531 1.355469 3 3 3 h 6 c 1.644531 0 3 -1.355469 3 -3 v -7.5 c 0 -0.265625 -0.105469 -0.519531 -0.292969 -0.707031 l -3.5 -3.5 c -0.1875 -0.1875 -0.441406 -0.292969 -0.707031 -0.292969 z m 0 2 h 4 v 1.5 c 0 1 0.5 1.5 1.5 1.5 h 1.5 v 4.980469 c -1.023438 -0.085938 -1.480469 -0.445313 -1.921875 -0.847657 c -0.253906 -0.234374 -0.492187 -0.5 -0.8125 -0.726562 c -0.324219 -0.230469 -0.753906 -0.40625 -1.265625 -0.40625 s -0.941406 0.175781 -1.265625 0.40625 c -0.320313 0.226562 -0.558594 0.492188 -0.8125 0.726562 c -0.441406 0.402344 -0.898437 0.761719 -1.921875 0.847657 v -6.980469 c 0 -0.570312 0.429688 -1 1 -1 z m 1.5 2 c -0.824219 0 -1.5 0.675781 -1.5 1.5 s 0.675781 1.5 1.5 1.5 s 1.5 -0.675781 1.5 -1.5 s -0.675781 -1.5 -1.5 -1.5 z m 0 1 c 0.28125 0 0.5 0.21875 0.5 0.5 s -0.21875 0.5 -0.5 0.5 s -0.5 -0.21875 -0.5 -0.5 s 0.21875 -0.5 0.5 -0.5 z m 1.5 4 c 0.308594 0 0.480469 0.074219 0.683594 0.21875 c 0.203125 0.148438 0.425781 0.382812 0.71875 0.648438 c 0.519531 0.480468 1.296875 1.003906 2.597656 1.113281 v 1.019531 c 0 0.570312 -0.429688 1 -1 1 h -6 c -0.570312 0 -1 -0.429688 -1 -1 v -1.019531 c 1.300781 -0.109375 2.078125 -0.632813 2.597656 -1.113281 c 0.292969 -0.265626 0.515625 -0.5 0.71875 -0.648438 c 0.203125 -0.144531 0.375 -0.21875 0.683594 -0.21875 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwXofficedrawingsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwXofficedrawingsymbolic;
