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
      <path d="m 8 0 c -2.097656 0 -4.109375 0.824219 -5.605469 2.292969 l 2.71875 4.707031 l 3.992188 -6.9140625 c -0.367188 -0.0546875 -0.734375 -0.08203125 -1.105469 -0.0859375 z m 2.136719 0.300781 l -2.714844 4.699219 h 7.988281 c -0.933594 -2.300781 -2.878906 -4.039062 -5.273437 -4.699219 z m -8.4375 2.785157 c -1.097657 1.402343 -1.69531275 3.132812 -1.699219 4.914062 c 0 0.675781 0.0898438 1.347656 0.261719 2 h 5.429687 z m 8.609375 2.914062 l 3.992187 6.914062 c 1.097657 -1.402343 1.695313 -3.132812 1.699219 -4.914062 c 0 -0.675781 -0.089844 -1.347656 -0.261719 -2 z m 0.578125 3 l -3.992188 6.914062 c 0.367188 0.054688 0.734375 0.082032 1.105469 0.085938 c 2.097656 0 4.109375 -0.824219 5.605469 -2.296875 z m -10.296875 2 c 0.933594 2.300781 2.878906 4.039062 5.273437 4.699219 l 2.714844 -4.699219 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwCamerashuttersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwCamerashuttersymbolic;
