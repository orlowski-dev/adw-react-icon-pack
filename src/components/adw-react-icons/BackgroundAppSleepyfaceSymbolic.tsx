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
        <path d="m 10.707031 1.152344 c -1.488281 -1.488282 -3.925781 -1.488282 -5.414062 0 l -4.140625 4.140625 c -1.488282 1.488281 -1.488282 3.925781 0 5.414062 l 4.140625 4.140625 c 1.488281 1.488282 3.925781 1.488282 5.414062 0 l 4.140625 -4.140625 c 1.488282 -1.488281 1.488282 -3.925781 0 -5.414062 z m -1.414062 1.414062 l 4.140625 4.140625 c 0.726562 0.730469 0.726562 1.855469 0 2.585938 l -4.140625 4.140625 c -0.730469 0.726562 -1.855469 0.726562 -2.585938 0 l -4.140625 -4.140625 c -0.726562 -0.730469 -0.726562 -1.855469 0 -2.585938 l 4.140625 -4.140625 c 0.730469 -0.726562 1.855469 -0.726562 2.585938 0 z m 0 0"/>
        <g fill-rule="evenodd">
            <path d="m 4.003906 8 c -0.277344 0 -0.5 0.222656 -0.5 0.5 c 0 0.582031 0.382813 1.082031 0.914063 1.328125 c 0.527343 0.242187 1.140625 0.242187 1.667969 0 c 0.527343 -0.246094 0.914062 -0.746094 0.914062 -1.328125 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 s -0.5 0.222656 -0.5 0.5 c 0 0.136719 -0.089844 0.304688 -0.332031 0.417969 c -0.246094 0.113281 -0.585938 0.113281 -0.828125 0 c -0.246094 -0.113281 -0.335938 -0.28125 -0.335938 -0.417969 c 0 -0.277344 -0.226562 -0.5 -0.5 -0.5 z m 0 0"/>
            <path d="m 9.484375 8 c -0.273437 0 -0.5 0.222656 -0.5 0.5 c 0 0.582031 0.386719 1.082031 0.914063 1.328125 c 0.53125 0.242187 1.140624 0.242187 1.671874 0 c 0.527344 -0.246094 0.914063 -0.746094 0.914063 -1.328125 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 s -0.5 0.222656 -0.5 0.5 c 0 0.136719 -0.089844 0.304688 -0.335937 0.417969 c -0.242188 0.113281 -0.582032 0.113281 -0.828126 0 c -0.242187 -0.113281 -0.335937 -0.28125 -0.335937 -0.417969 c 0 -0.277344 -0.222656 -0.5 -0.5 -0.5 z m 0 0"/>
        </g>
    </g>
    </svg>
  );
};

const AdwBackgroundAppSleepyfaceSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwBackgroundAppSleepyfaceSymbolic;
