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
      <path d="m 6.832031 0 c -0.460937 0 -0.832031 0.382812 -0.832031 0.855469 v 4.289062 c 0 0.472657 0.371094 0.855469 0.832031 0.855469 h 8.335938 c 0.460937 0 0.832031 -0.382812 0.832031 -0.855469 v -4.289062 c 0 -0.472657 -0.371094 -0.855469 -0.832031 -0.855469 z m -0.832031 8 l 2 2 l -3 3 l 1 1 l 3 -3 l 2 2 v -5 z m -5.53125 6 c -0.261719 0 -0.46875 0.230469 -0.46875 0.511719 v 0.976562 c 0 0.28125 0.207031 0.511719 0.46875 0.511719 h 3.0625 c 0.261719 0 0.46875 -0.230469 0.46875 -0.511719 v -0.976562 c 0 -0.28125 -0.207031 -0.511719 -0.46875 -0.511719 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwScaleSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwScaleSymbolic;
