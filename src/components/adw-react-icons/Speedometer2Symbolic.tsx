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
      <path d="m 8 1.003906 c -1.867188 0 -3.730469 0.660156 -5.226562 1.953125 c -0.144532 0.125 -0.292969 0.25 -0.429688 0.386719 c -3.117188 3.117188 -3.117188 8.195312 0 11.3125 c 0.320312 0.332031 0.824219 0.402344 1.21875 0.171875 c 0.398438 -0.230469 0.589844 -0.703125 0.460938 -1.144531 l 0.796874 -0.792969 l -0.707031 -0.707031 l -0.695312 0.691406 c -0.808594 -0.953125 -1.296875 -2.132812 -1.402344 -3.375 h 0.984375 v -1 h -0.984375 c 0.105469 -1.242188 0.59375 -2.421875 1.402344 -3.375 l 0.695312 0.691406 l 0.707031 -0.707031 l -0.695312 -0.6875 c 0.953125 -0.808594 2.132812 -1.300781 3.375 -1.40625 v 0.984375 h 1 v -0.984375 c 1.242188 0.105469 2.421875 0.59375 3.375 1.402344 l -0.691406 0.691406 l 0.707031 0.707031 l 0.691406 -0.691406 c 0.808594 0.953125 1.296875 2.132812 1.402344 3.375 h -0.984375 v 1 h 0.984375 c -0.09375 1.132812 -0.507813 2.210938 -1.195313 3.117188 c -0.042968 -0.09375 -0.097656 -0.179688 -0.183593 -0.257813 l -2.785157 -2.53125 c 0.117188 -0.261719 0.179688 -0.542969 0.179688 -0.828125 c 0 -1.105469 -0.894531 -2 -2 -2 s -2 0.894531 -2 2 s 0.894531 2 2 2 c 0.246094 0 0.492188 -0.046875 0.722656 -0.136719 l 2.871094 2.609375 c 0.097656 0.089844 0.214844 0.140625 0.34375 0.167969 l 0.042969 0.046875 c -0.125 0.4375 0.0625 0.90625 0.460937 1.136719 c 0.394532 0.226562 0.894532 0.160156 1.214844 -0.167969 c 3.117188 -3.117188 3.117188 -8.195312 0 -11.3125 c -1.5 -1.5 -3.535156 -2.34375 -5.65625 -2.339844 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSpeedometer2Symbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSpeedometer2Symbolic;
