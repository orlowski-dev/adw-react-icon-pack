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
      <path d="m 12.980469 -0.0117188 c -0.039063 0 -0.074219 0.0039063 -0.113281 0.00781255 h -4.867188 v 0.83203125 c -0.050781 0.292969 0.03125 0.59375 0.226562 0.820313 c 0.191407 0.226562 0.476563 0.351562 0.773438 0.347656 h 1.585938 l -2.585938 2.585937 l -2.292969 -2.292969 c -0.25 -0.261718 -0.625 -0.367187 -0.972656 -0.273437 c -0.351563 0.089844 -0.625 0.363281 -0.714844 0.714844 c -0.09375 0.351562 0.011719 0.722656 0.273438 0.972656 l 3 3 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 3.292969 -3.292969 v 1.585938 c -0.003906 0.296875 0.125 0.578125 0.347656 0.769531 c 0.222656 0.195313 0.519532 0.277344 0.808594 0.230469 h 0.84375 v -4.871094 c 0.011719 -0.09375 0.011719 -0.183594 0 -0.277344 v -0.85156225 h -0.855469 c -0.054687 -0.00781255 -0.109375 -0.01171875 -0.164062 -0.00781255 z m 0 0" fill="currentColor"/>
    <path d="m 14.242188 15.710938 c -0.386719 0.386718 -1.003907 0.386718 -1.386719 0 l -1.042969 -1.039063 l -1.039062 -1.039063 c -0.382813 -0.386718 -0.382813 -1.003906 0 -1.386718 l 0.492187 -0.496094 c -2.035156 -1.105469 -4.496094 -1.105469 -6.53125 0 l 0.492187 0.496094 c 0.382813 0.382812 0.382813 1 0 1.386718 l -1.039062 1.039063 l -1.042969 1.039063 c -0.382812 0.386718 -1 0.386718 -1.386719 0 l -1.039062 -1.039063 c -0.957031 -0.957031 -0.957031 -2.511719 0 -3.46875 l 0.347656 -0.347656 c 3.816406 -3.816407 10.050782 -3.816407 13.867188 0 l 0.347656 0.347656 c 0.957031 0.957031 0.957031 2.511719 0 3.46875 z m 0 0" fill="#e01b24"/>
    </svg>
  );
};

const AdwCallmissedsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCallmissedsymbolic;
