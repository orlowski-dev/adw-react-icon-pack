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
      <path d="m 5.5 4 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 8 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -8 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 4 1 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 6 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -6 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m -2 1 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 4 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -4 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 4 0 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 4 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -4 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m -8 1 c -0.277344 0 -0.5 0.222656 -0.5 0.5 v 3 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -3 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m -2.027344 1 c -0.261718 0.011719 -0.472656 0.230469 -0.472656 0.5 v 1 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -1 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 c -0.007812 0 -0.015625 0 -0.023438 0 z m 12 0 c -0.261718 0.011719 -0.472656 0.230469 -0.472656 0.5 v 1 c 0 0.277344 0.222656 0.5 0.5 0.5 s 0.5 -0.222656 0.5 -0.5 v -1 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 c -0.007812 0 -0.015625 0 -0.023438 0 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSoundWaveAltSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSoundWaveAltSymbolic;
