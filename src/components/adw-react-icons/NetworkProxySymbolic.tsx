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
        <path d="m 3.507812 1.007812 v 2 h 3.5 c 0.566407 0 1 0.4375 1 1 v 2.273438 c -0.300781 0.175781 -0.550781 0.425781 -0.726562 0.726562 h -3.773438 v 2 h 3.773438 c 0.175781 0.304688 0.425781 0.554688 0.726562 0.730469 v 2.269531 c 0 0.566407 -0.433593 1 -1 1 h -3.5 v 2 h 3.5 c 1.644532 0 3 -1.355468 3 -3 v -2.269531 c 0.300782 -0.175781 0.554688 -0.425781 0.730469 -0.730469 h 1.769531 v -2 h -1.769531 c -0.175781 -0.300781 -0.429687 -0.550781 -0.730469 -0.726562 v -2.273438 c 0 -1.644531 -1.355468 -3 -3 -3 z m 0 0"/>
        <path d="m 2.007812 4.007812 c 1.097657 0 2 -0.898437 2 -2 c 0 -1.097656 -0.902343 -1.9999995 -2 -1.9999995 c -1.097656 0 -1.9999995 0.9023435 -1.9999995 1.9999995 c 0 1.101563 0.9023435 2 1.9999995 2 z m 0 -1 c -0.558593 0 -1 -0.441406 -1 -1 c 0 -0.558593 0.441407 -1 1 -1 c 0.558594 0 1 0.441407 1 1 c 0 0.558594 -0.441406 1 -1 1 z m 0 0"/>
        <path d="m 2.007812 10.007812 c 1.097657 0 2 -0.898437 2 -2 c 0 -1.097656 -0.902343 -2 -2 -2 c -1.097656 0 -1.9999995 0.902344 -1.9999995 2 c 0 1.101563 0.9023435 2 1.9999995 2 z m 0 -1 c -0.558593 0 -1 -0.441406 -1 -1 c 0 -0.558593 0.441407 -1 1 -1 c 0.558594 0 1 0.441407 1 1 c 0 0.558594 -0.441406 1 -1 1 z m 0 0"/>
        <path d="m 2.007812 12.007812 c 1.097657 0 2 0.902344 2 2 c 0 1.101563 -0.902343 2 -2 2 c -1.097656 0 -1.9999995 -0.898437 -1.9999995 -2 c 0 -1.097656 0.9023435 -2 1.9999995 -2 z m 0 1 c -0.558593 0 -1 0.441407 -1 1 c 0 0.558594 0.441407 1 1 1 c 0.558594 0 1 -0.441406 1 -1 c 0 -0.558593 -0.441406 -1 -1 -1 z m 0 0"/>
        <path d="m 14.007812 10.007812 c 1.097657 0 2 -0.898437 2 -2 c 0 -1.097656 -0.902343 -2 -2 -2 c -1.097656 0 -2 0.902344 -2 2 c 0 1.101563 0.902344 2 2 2 z m 0 -1 c -0.558593 0 -1 -0.441406 -1 -1 c 0 -0.558593 0.441407 -1 1 -1 c 0.558594 0 1 0.441407 1 1 c 0 0.558594 -0.441406 1 -1 1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwNetworkProxySymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwNetworkProxySymbolic;
