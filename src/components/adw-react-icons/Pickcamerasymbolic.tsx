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
        <path d="m 5 8.03125 h 3 c 1.105469 0 2 0.894531 2 2 v 2 c 0 1.101562 -0.894531 2 -2 2 h -3 c -1.105469 0 -2 -0.898438 -2 -2 v -2 c 0 -1.105469 0.894531 -2 2 -2 z m 0 0" fill-rule="evenodd"/>
        <path d="m 12.546875 9.046875 c -0.273437 -0.097656 -0.589844 -0.039063 -0.796875 0.144531 l -1.539062 1.359375 c -0.28125 0.246094 -0.28125 0.644531 0.003906 0.894531 l 1.539062 1.339844 c 0.207032 0.179688 0.523438 0.234375 0.796875 0.136719 c 0.269531 -0.097656 0.449219 -0.328125 0.449219 -0.585937 v -2.699219 c 0 -0.257813 -0.179688 -0.492188 -0.453125 -0.589844 z m 0 0"/>
        <g fill-rule="evenodd">
            <path d="m 6.996094 0 c -0.554688 0 -1 0.4375 -1 0.984375 v 0.023437 h -0.964844 c -0.558594 0 -1.003906 0.449219 -1.003906 1.003907 v 2.984375 c 0 0.554687 0.449218 1.003906 1.003906 1.003906 h 5.964844 c 0.554687 0 1.003906 -0.449219 1.003906 -1.003906 l -0.003906 -2.984375 c 0 -0.554688 -0.445313 -1.003907 -1.003906 -1.003907 h -0.992188 v -0.023437 c 0.003906 -0.546875 -0.445312 -0.984375 -1 -0.984375 z m 0.957031 1.601562 c 1.039063 0 1.878906 0.839844 1.878906 1.878907 c -0.003906 1.035156 -0.84375 1.871093 -1.878906 1.871093 s -1.871094 -0.839843 -1.875 -1.871093 c 0 -1.039063 0.839844 -1.878907 1.875 -1.878907 z m 0 0" fill-opacity="0.33"/>
            <path d="m 0 8 v 1 h 1 v -1 c 0 -0.550781 0.445312 -1 1 -1 h 1 v -1 h -1 c -1.105469 0 -2 0.894531 -2 2 z m 0 0"/>
            <path d="m 0 14 v -1 h 1 v 1 c 0 0.550781 0.445312 1 1 1 h 1 v 1 h -1 c -1.105469 0 -2 -0.894531 -2 -2 z m 0 0"/>
            <path d="m 16.003906 8 v 1 h -1 v -1 c 0 -0.550781 -0.449218 -1 -1 -1 h -1.003906 v -1 h 1.003906 c 1.101563 0 2 0.894531 2 2 z m 0 0"/>
            <path d="m 16.003906 14 v -1 h -1 v 1 c 0 0.550781 -0.449218 1 -1 1 h -1.003906 v 1 h 1.003906 c 1.101563 0 2 -0.894531 2 -2 z m 0 0"/>
        </g>
    </g>
    </svg>
  );
};

const AdwPickcamerasymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPickcamerasymbolic;
