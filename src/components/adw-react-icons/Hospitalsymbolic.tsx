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
      <path d="m 4 0 c -0.554688 0 -1 0.445312 -1 1 v 4 h -1 c -0.554688 0 -1 0.445312 -1 1 v 9 h -1 v 1 h 16 v -1 h -1 v -9 c 0 -0.554688 -0.488281 -1 -1 -1 h -1 v -4 c 0 -0.554688 -0.445312 -1 -1 -1 z m 3 1 h 2 v 2 h 2 v 2 h -2 v 2 h -2 v -2 h -2 v -2 h 2 z m -3.75 8 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 1.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -1.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 4 0 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 1.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -1.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 4 0 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 1.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -1.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m -8 3 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 1.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -1.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 3.75 0 h 2 v 3 h -2 z m 4.25 0 h 1.5 c 0.136719 0 0.25 0.113281 0.25 0.25 v 1.5 c 0 0.136719 -0.113281 0.25 -0.25 0.25 h -1.5 c -0.136719 0 -0.25 -0.113281 -0.25 -0.25 v -1.5 c 0 -0.136719 0.113281 -0.25 0.25 -0.25 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwHospitalsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHospitalsymbolic;
