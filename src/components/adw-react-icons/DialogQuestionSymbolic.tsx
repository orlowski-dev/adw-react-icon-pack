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
      <path d="m 8 0.03125 c -0.398438 0 -0.816406 0.160156 -1.125 0.46875 l -6.375 6.375 c -0.621094 0.621094 -0.621094 1.628906 0 2.25 l 6.375 6.375 c 0.621094 0.621094 1.628906 0.621094 2.25 0 l 6.375 -6.375 c 0.621094 -0.621094 0.621094 -1.628906 0 -2.25 l -6.375 -6.375 c -0.308594 -0.308594 -0.726562 -0.46875 -1.125 -0.46875 z m 0.152344 2.976562 c 0.726562 0.035157 1.433594 0.335938 1.96875 0.871094 c 0.855468 0.855469 1.113281 2.152344 0.652344 3.269532 c -0.332032 0.796874 -0.988282 1.390624 -1.773438 1.671874 v 1.179688 h -2 v -2 c 0 -0.550781 0.449219 -1 1 -1 c 0.40625 0 0.769531 -0.242188 0.925781 -0.617188 c 0.152344 -0.375 0.070313 -0.800781 -0.21875 -1.089843 c -0.289062 -0.289063 -0.714843 -0.371094 -1.089843 -0.21875 c -0.375 0.15625 -0.617188 0.519531 -0.617188 0.925781 h -2 c 0 -1.210938 0.734375 -2.308594 1.851562 -2.769531 c 0.417969 -0.175781 0.863282 -0.246094 1.300782 -0.222657 z m -0.152344 7.992188 c 0.550781 0 1 0.449219 1 1 s -0.449219 1 -1 1 s -1 -0.449219 -1 -1 s 0.449219 -1 1 -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwDialogQuestionSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwDialogQuestionSymbolic;
