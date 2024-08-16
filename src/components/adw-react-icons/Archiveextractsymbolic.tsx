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
        <path d="m 4.027344 4.992188 c -1.664063 0 -3.03125 1.371093 -3.027344 3.03125 v 4.964843 c 0 1.660157 1.367188 3.03125 3.027344 3.03125 h 7.945312 c 1.664063 0 3.027344 -1.371093 3.027344 -3.03125 v -4.964843 c 0 -1.660157 -1.367188 -3.03125 -3.027344 -3.03125 z m -0.027344 2.007812 h 8 c 0.554688 0 1 0.445312 1 1 s -0.445312 1 -1 1 h -8 c -0.554688 0 -1 -0.445312 -1 -1 s 0.445312 -1 1 -1 z m -1 2.730469 c 0.292969 0.171875 0.636719 0.269531 1 0.269531 h 8 c 0.367188 0 0.707031 -0.097656 1 -0.269531 v 3.257812 c 0 0.585938 -0.4375 1.03125 -1.027344 1.03125 h -7.945312 c -0.585938 0 -1.027344 -0.445312 -1.027344 -1.03125 z m 0 0"/>
        <path d="m 7 6 h 2 v 6.988281 l -2 -0.988281 z m 0 0"/>
        <path d="m 5.011719 3.984375 l 1.988281 0.015625 v 2 h 2 v -2 l 2.011719 -0.015625 v -1 h -0.003907 c 0 -0.261719 -0.101562 -0.515625 -0.289062 -0.707031 l -2 -2 c -0.390625 -0.386719 -1.023438 -0.386719 -1.414062 0 l -2 2 c -0.183594 0.191406 -0.289063 0.445312 -0.285157 0.707031 h -0.007812 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwArchiveextractsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwArchiveextractsymbolic;
