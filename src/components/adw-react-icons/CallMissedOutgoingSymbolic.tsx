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
      <path d="m 13.980469 3.988281 c -0.039063 0 -0.074219 0.003907 -0.113281 0.007813 h -4.867188 v 0.832031 c -0.105469 0.617187 0.375 1.179687 1 1.167969 h 1.585938 l -4.585938 4.585937 l -4.292969 -4.292969 c -0.941406 -0.980468 -2.394531 0.472657 -1.414062 1.414063 l 5 5 c 0.390625 0.390625 1.023437 0.390625 1.414062 0 l 5.292969 -5.292969 v 1.585938 c -0.007812 0.621094 0.546875 1.097656 1.15625 1 h 0.84375 v -4.871094 c 0.011719 -0.09375 0.011719 -0.183594 0 -0.277344 v -0.851562 h -0.855469 c -0.054687 -0.007813 -0.109375 -0.011719 -0.164062 -0.007813 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCallMissedOutgoingSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCallMissedOutgoingSymbolic;
