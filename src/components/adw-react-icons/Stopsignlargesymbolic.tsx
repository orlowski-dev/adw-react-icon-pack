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
      <path d="m 5.644531 1.019531 c -0.347656 0.003907 -0.679687 0.140625 -0.925781 0.386719 l -3.332031 3.332031 c -0.25 0.246094 -0.386719 0.578125 -0.386719 0.929688 v 4.707031 c 0 0.347656 0.136719 0.683594 0.386719 0.929688 l 3.328125 3.332031 c 0.246094 0.246093 0.582031 0.386719 0.929687 0.382812 h 4.710938 c 0.347656 0 0.679687 -0.136719 0.925781 -0.382812 l 3.332031 -3.332031 c 0.25 -0.246094 0.386719 -0.582032 0.386719 -0.929688 v -4.707031 c 0 -0.351563 -0.136719 -0.683594 -0.386719 -0.929688 l -3.328125 -3.332031 c -0.246094 -0.246094 -0.582031 -0.386719 -0.929687 -0.386719 z m -1.644531 5.980469 h 8 v 2 h -8 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwStopsignlargesymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwStopsignlargesymbolic;
