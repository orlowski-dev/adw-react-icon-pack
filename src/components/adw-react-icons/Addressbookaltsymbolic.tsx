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
      <path d="m 4 1 c -2 0 -2 2 -2 2 h 11 v 11 h -11 s 0 2 2 2 h 9 s 0.457031 0.015625 0.945312 -0.230469 c 0.492188 -0.246093 1.054688 -0.9375 1.054688 -1.769531 v -11 c 0 -0.832031 -0.5625 -1.523438 -1.054688 -1.769531 c -0.488281 -0.246094 -0.945312 -0.230469 -0.945312 -0.230469 z m -2.5 3 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 7.023438 0.992188 c -0.078126 0.003906 -0.15625 0.007812 -0.238282 0.011718 c -0.214844 0.015625 -0.429687 0.050782 -0.644531 0.105469 c -1.707031 0.429687 -2.835937 2.078125 -2.613281 3.832031 c 0.222656 1.75 1.722656 3.066406 3.484375 3.058594 c 0.851562 0 1.644531 -0.273438 1.644531 -0.273438 l -0.316406 -0.949218 s -0.703125 0.222656 -1.328125 0.222656 h -0.003907 c -1.265624 0.003906 -2.328124 -0.929688 -2.488281 -2.183594 c -0.160156 -1.257812 0.636719 -2.429687 1.867188 -2.738281 c 0.617187 -0.15625 1.28125 -0.078125 1.808593 0.164063 c 0.527344 0.238281 0.890626 0.628906 1.003907 1.058593 c 0.125 0.460938 0.085937 0.96875 -0.085938 1.273438 c -0.097656 0.175781 -0.402343 0.355469 -0.613281 0.425781 v -0.5 c 0 -0.824219 -0.675781 -1.5 -1.5 -1.5 s -1.5 0.675781 -1.5 1.5 s 0.675781 1.5 1.5 1.5 c 0.175781 0 0.34375 -0.039062 0.5 -0.09375 v 0.042969 l 0.449219 0.050781 c 0.941406 0.09375 1.691406 -0.320312 2.039062 -0.9375 c 0.347657 -0.617188 0.355469 -1.355469 0.175781 -2.019531 c -0.207031 -0.785157 -0.816406 -1.375 -1.554687 -1.710938 c -0.480469 -0.222656 -1.023437 -0.34375 -1.585937 -0.335937 z m -7.023438 1.007812 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 0 2 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 7 0 c 0.28125 0 0.5 0.21875 0.5 0.5 s -0.21875 0.5 -0.5 0.5 s -0.5 -0.21875 -0.5 -0.5 s 0.21875 -0.5 0.5 -0.5 z m -7 2 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 0 2 c -0.277344 0 -0.5 0.222656 -0.5 0.5 s 0.222656 0.5 0.5 0.5 h 2 c 0.277344 0 0.5 -0.222656 0.5 -0.5 s -0.222656 -0.5 -0.5 -0.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwAddressbookaltsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAddressbookaltsymbolic;
