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
      <path d="m 5 1 c -0.554688 0 -1 0.445312 -1 1 v 5 c 0 0.554688 0.445312 1 1 1 h 5 c 0.554688 0 1 -0.445312 1 -1 v -5 c 0 -0.554688 -0.445312 -1 -1 -1 z m -4 0.777344 v 5.445312 h 0.34375 l 2.390625 -2.746094 l -2.371094 -2.699218 z m 11.5 0.714844 c -0.277344 0.003906 -0.496094 0.230468 -0.492188 0.507812 v 4.554688 c 0 0.824218 -0.644531 1.492187 -1.523437 1.492187 h -4.484375 c -0.179688 -0.003906 -0.347656 0.09375 -0.4375 0.246094 c -0.09375 0.15625 -0.09375 0.351562 0 0.507812 c 0.089844 0.152344 0.257812 0.25 0.4375 0.246094 h 4.484375 c 1.402344 0 2.523437 -1.128906 2.523437 -2.492187 v -4.554688 c 0.003907 -0.136719 -0.050781 -0.265625 -0.144531 -0.363281 c -0.097656 -0.09375 -0.226562 -0.148438 -0.363281 -0.144531 z m 1.992188 1.507812 c -0.277344 0.003906 -0.496094 0.230469 -0.492188 0.507812 v 3.507813 c 0 1.765625 -1.503906 3.007813 -3.097656 3.007813 h -3.425782 c -0.179687 -0.003907 -0.347656 0.09375 -0.4375 0.246093 c -0.09375 0.15625 -0.09375 0.351563 0 0.507813 c 0.089844 0.152344 0.257813 0.25 0.4375 0.246094 h 3.425782 c 2.117187 0 4.097656 -1.675782 4.097656 -4.007813 v -3.507813 c 0.003906 -0.136718 -0.050781 -0.265624 -0.144531 -0.363281 c -0.097657 -0.09375 -0.226563 -0.148437 -0.363281 -0.144531 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCameraToggleSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCameraToggleSymbolic;
