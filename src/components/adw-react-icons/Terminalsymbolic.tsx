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
      <g fill="currentColor">
        <path d="m 4.515625 5.898438 c -0.164063 -0.003907 -0.324219 0.0625 -0.441406 0.175781 c -0.230469 0.234375 -0.230469 0.617187 0 0.851562 l 1.578125 1.574219 l -1.578125 1.574219 c -0.230469 0.234375 -0.230469 0.617187 0 0.851562 c 0.234375 0.230469 0.617187 0.230469 0.851562 0 l 2 -2 c 0.230469 -0.234375 0.230469 -0.617187 0 -0.851562 l -2 -2 c -0.109375 -0.105469 -0.257812 -0.167969 -0.410156 -0.175781 z m 3.484375 4.101562 v 1 h 3 v -1 z m 0 0"/>
        <path d="m 3.039062 0 c -1.667968 0 -3.039062 1.371094 -3.039062 3.039062 v 8.921876 c 0 1.667968 1.371094 3.039062 3.039062 3.039062 h 9.921876 c 1.667968 0 3.039062 -1.371094 3.039062 -3.039062 v -8.921876 c 0 -1.667968 -1.371094 -3.039062 -3.039062 -3.039062 z m 0 2 h 9.921876 c 0.59375 0 1.039062 0.445312 1.039062 1.039062 v 8.921876 c 0 0.59375 -0.445312 1.039062 -1.039062 1.039062 h -9.921876 c -0.59375 0 -1.039062 -0.445312 -1.039062 -1.039062 v -8.921876 c 0 -0.59375 0.445312 -1.039062 1.039062 -1.039062 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwTerminalsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwTerminalsymbolic;
