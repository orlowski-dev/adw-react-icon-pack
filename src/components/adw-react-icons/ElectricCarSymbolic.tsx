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
      <path d="m 12.484375 1 c -0.230469 0.003906 -0.484375 0.234375 -0.484375 0.5 v 1.5 h -0.972656 v 2 c 0 0.917969 1 1.683594 1.972656 1.917969 v 5.441406 c 0 0.527344 -0.246094 0.621094 -0.492188 0.621094 c -0.25 -0.003907 -0.507812 -0.109375 -0.507812 -0.667969 v -0.496094 c 0 -0.003906 0.003906 -0.007812 0.003906 -0.011718 v -2.613282 c 0 -0.589844 -0.4375 -1.058594 -1 -1.152344 v -0.039062 c 0 -0.082031 -0.011718 -0.164062 -0.03125 -0.242188 l -1 -4 c -0.109375 -0.445312 -0.511718 -0.757812 -0.96875 -0.757812 h -6 c -0.460937 0 -0.863281 0.3125 -0.972656 0.757812 l -1 4 c -0.019531 0.078126 -0.03125 0.160157 -0.027344 0.242188 v 0.039062 c -0.566406 0.09375 -0.99999975 0.5625 -0.99999975 1.15625 v 2.613282 c 0 0.589844 0.43359375 1.058594 0.99999975 1.152344 v 1.539062 c 0 0.277344 0.222656 0.5 0.5 0.5 h 2 c 0.273438 0 0.5 -0.222656 0.5 -0.5 v -1.5 h 4 v 1.5 c 0 0.277344 0.5 0.5 0.5 0.5 h 2 s 0.5 -0.222656 0.5 -0.5 v -1.539062 c 0.035156 -0.007813 0.066406 -0.027344 0.105469 -0.035157 c 0.226563 0.640625 0.800781 1.046875 1.386719 1.054688 c 0.75 0.007812 1.503906 -0.648438 1.503906 -1.621094 v -5.398437 c 0.992188 -0.1875 2 -0.992188 2 -1.960938 v -2 h -1 v -1.5 c 0 -0.28125 -0.277344 -0.503906 -0.515625 -0.5 c -0.230469 0.003906 -0.484375 0.203125 -0.484375 0.5 v 1.5 h -1 v -1.5 c 0 -0.25 -0.277344 -0.503906 -0.515625 -0.5 z m -8.703125 4 h 4.4375 l 0.75 3 h -5.9375 z m -1.25 4.039062 c 0.832031 0 1.5 0.671876 1.5 1.5 c 0 0.828126 -0.667969 1.5 -1.5 1.5 c -0.828125 0 -1.5 -0.671874 -1.5 -1.5 c 0 -0.828124 0.671875 -1.5 1.5 -1.5 z m 7 0 c 0.832031 0 1.5 0.671876 1.5 1.5 c 0 0.828126 -0.667969 1.5 -1.5 1.5 c -0.828125 0 -1.5 -0.671874 -1.5 -1.5 c 0 -0.828124 0.671875 -1.5 1.5 -1.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwElectricCarSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwElectricCarSymbolic;
