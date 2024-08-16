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
      <path d="m 2 0 c -0.550781 0 -1 0.449219 -1 1 v 8 c 0 2.5 1.816406 4.246094 3.445312 5.332031 c 1.628907 1.085938 3.238282 1.617188 3.238282 1.617188 c 0.207031 0.070312 0.425781 0.070312 0.632812 0 c 0 0 1.609375 -0.53125 3.238282 -1.617188 c 1.628906 -1.085937 3.445312 -2.832031 3.445312 -5.332031 v -8 c 0 -0.550781 -0.449219 -1 -1 -1 z m 1 2 h 10 v 7 c 0 1.5 -1.183594 2.753906 -2.554688 3.667969 c -1.214843 0.808593 -2.179687 1.128906 -2.445312 1.226562 c -0.265625 -0.097656 -1.230469 -0.417969 -2.445312 -1.226562 c -1.371094 -0.914063 -2.554688 -2.167969 -2.554688 -3.667969 z m 1 1 v 6 c 0 1 0.867188 2.007812 2.109375 2.835938 c 0.933594 0.621093 1.472656 0.785156 1.890625 0.949218 c 0.417969 -0.164062 0.957031 -0.328125 1.890625 -0.949218 c 1.242187 -0.828126 2.109375 -1.835938 2.109375 -2.835938 v -6 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwSecurityHighSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSecurityHighSymbolic;
