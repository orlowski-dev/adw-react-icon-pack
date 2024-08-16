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
      <path d="m 5 0 c -1.292969 0 -2.40625 0.839844 -2.824219 2 h -1.175781 v 2 h 1 v 1 h -1 v 2 h 1 v 1 h -1 v 2 h 1 v 1 h -1 v 2 h 1.175781 c 0.417969 1.160156 1.53125 2 2.824219 2 h 7 c 1.644531 0 3 -1.355469 3 -3 v -9 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 7 c 0.570312 0 0.886719 0.441406 1 1 v 9 c 0 0.570312 -0.429688 1 -1 1 h -7 c -0.554688 0 -1 -0.445312 -1 -1 v -9 c 0 -0.554688 0.445312 -1 1 -1 z m 3.527344 2 c -0.082032 0 -0.160156 0.003906 -0.242188 0.011719 c -0.214844 0.015625 -0.429687 0.046875 -0.640625 0.101562 c -1.710937 0.433594 -2.839843 2.082031 -2.617187 3.832031 s 1.722656 3.066407 3.488281 3.0625 c 0.847656 -0.003906 1.640625 -0.277343 1.640625 -0.277343 l -0.3125 -0.949219 s -0.707031 0.226562 -1.332031 0.226562 h -0.003907 c -1.265624 0.003907 -2.328124 -0.929687 -2.488281 -2.1875 c -0.160156 -1.257812 0.640625 -2.425781 1.867188 -2.738281 c 0.617187 -0.15625 1.28125 -0.078125 1.808593 0.164063 c 0.527344 0.242187 0.890626 0.628906 1.003907 1.058594 c 0.125 0.464843 0.085937 0.96875 -0.085938 1.277343 c -0.097656 0.175781 -0.402343 0.351563 -0.613281 0.425781 v -0.5 c 0 -0.824218 -0.675781 -1.5 -1.5 -1.5 s -1.5 0.675782 -1.5 1.5 c 0 0.820313 0.675781 1.5 1.5 1.5 c 0.175781 0 0.34375 -0.039062 0.5 -0.09375 v 0.042969 l 0.449219 0.046875 c 0.941406 0.097656 1.691406 -0.316406 2.039062 -0.933594 c 0.347657 -0.621093 0.355469 -1.359374 0.175781 -2.023437 c -0.207031 -0.785156 -0.816406 -1.371094 -1.554687 -1.707031 c -0.480469 -0.222656 -1.023437 -0.34375 -1.585937 -0.339844 z m -0.027344 3.007812 c 0.28125 0 0.5 0.214844 0.5 0.5 c 0 0.28125 -0.21875 0.5 -0.5 0.5 s -0.5 -0.21875 -0.5 -0.5 c 0 -0.285156 0.21875 -0.5 0.5 -0.5 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwXOfficeAddressBookSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwXOfficeAddressBookSymbolic;
