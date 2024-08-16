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
      <path d="m 8 0 c -1.660156 0 -3 1.339844 -3 3 v 5 c 0 1.660156 1.339844 3 3 3 s 3 -1.339844 3 -3 v -5 c 0 -1.660156 -1.339844 -3 -3 -3 z m -6 6 v 2.011719 c 0 2.964843 2.164062 5.429687 5 5.90625 v 2.082031 h 2 v -2.082031 c 2.835938 -0.476563 5 -2.941407 5 -5.90625 v -2.011719 h -1.5 v 2.011719 c 0 2.5 -1.992188 4.488281 -4.5 4.488281 s -4.5 -1.988281 -4.5 -4.488281 v -2.011719 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwAudioinputmicrophonesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAudioinputmicrophonesymbolic;
