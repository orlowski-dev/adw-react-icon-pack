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
      <path d="m 4 1.992188 c -0.03125 0 -0.0625 0.003906 -0.089844 0.007812 h -1.910156 c -0.554688 0 -1 0.445312 -1 1 s 0.445312 1 1 1 h 1.769531 l 1.125 6 h -0.359375 c -0.011718 0 -0.023437 0 -0.035156 0 c -0.535156 0 -1.03125 0.285156 -1.300781 0.75 c -0.265625 0.464844 -0.265625 1.035156 0 1.5 c 0.269531 0.464844 0.765625 0.75 1.300781 0.75 h 0.585938 c -0.054688 0.160156 -0.085938 0.328125 -0.085938 0.5 c 0 0.828125 0.671875 1.5 1.5 1.5 s 1.5 -0.671875 1.5 -1.5 c 0 -0.171875 -0.03125 -0.339844 -0.085938 -0.5 h 3.171876 c -0.054688 0.160156 -0.085938 0.328125 -0.085938 0.5 c 0 0.828125 0.671875 1.5 1.5 1.5 s 1.5 -0.671875 1.5 -1.5 c 0 -0.804688 -0.636719 -1.460938 -1.4375 -1.496094 c -0.019531 -0.003906 -0.042969 -0.003906 -0.0625 -0.003906 h -8 c -0.179688 0 -0.34375 -0.09375 -0.433594 -0.25 s -0.089844 -0.34375 0 -0.5 s 0.253906 -0.25 0.433594 -0.25 h 7 c 0.648438 0 1.207031 -0.308594 1.613281 -0.753906 c 0.402344 -0.445313 0.6875 -1.019532 0.917969 -1.648438 c 0.464844 -1.261718 0.710938 -2.777344 0.957031 -4 c 0.03125 -0.144531 -0.007812 -0.296875 -0.101562 -0.414062 c -0.09375 -0.117188 -0.238281 -0.183594 -0.386719 -0.183594 h -9.707031 l -0.300781 -1.59375 c -0.042969 -0.238281 -0.25 -0.414062 -0.492188 -0.414062 z m 0.980469 3.007812 h 1.019531 v 1 h 1 v -1 h 1 v 1 h 1 v -1 h 1 v 1 h 1 v -1 h 1 v 1 h 1 v -1 h 0.867188 c -0.0625 0.328125 -0.132813 0.664062 -0.199219 1 h -0.667969 v 1 h 0.449219 c -0.082031 0.347656 -0.171875 0.683594 -0.273438 1 h -0.175781 v 0.464844 c -0.078125 0.1875 -0.152344 0.375 -0.238281 0.535156 h -0.761719 v 0.871094 c -0.148438 0.082031 -0.308594 0.128906 -0.5 0.128906 h -0.5 v -1 h -1 v 1 h -1 v -1 h -1 v 1 h -1 v -1 h -1 v 1 h -0.085938 l -0.1875 -1 h 0.273438 v -1 h -0.457031 l -0.1875 -1 h 0.644531 v -1 h -0.832031 z m 1.019531 2 v 1 h 1 v -1 z m 1 0 h 1 v -1 h -1 z m 1 0 v 1 h 1 v -1 z m 1 0 h 1 v -1 h -1 z m 1 0 v 1 h 1 v -1 z m 1 0 h 1 v -1 h -1 z m 1 0 v 1 h 1 v -1 z m 0 1 h -1 v 1 h 1 z m -2 0 h -1 v 1 h 1 z m -2 0 h -1 v 1 h 1 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwShoppingcartsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwShoppingcartsymbolic;
