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
      <path d="m 5.175781 0.0117188 c -0.546875 -0.0820313 -1.054687 0.2968752 -1.132812 0.8437502 c -0.082031 0.542969 0.292969 1.050781 0.839843 1.132812 c 4.714844 0.695313 8.417969 4.386719 9.128907 9.101563 c 0.082031 0.546875 0.59375 0.921875 1.140625 0.839844 c 0.542968 -0.085938 0.917968 -0.59375 0.835937 -1.140626 c -0.839843 -5.574218 -5.234375 -9.957031 -10.8125 -10.7773432 z m 0 4.0156252 c -0.546875 -0.078125 -1.054687 0.296875 -1.132812 0.84375 c -0.082031 0.546875 0.292969 1.054687 0.839843 1.136718 c 2.636719 0.386719 4.703126 2.445313 5.101563 5.082032 c 0.082031 0.546875 0.59375 0.921875 1.140625 0.839844 c 0.542969 -0.085938 0.917969 -0.59375 0.835938 -1.140626 c -0.527344 -3.496093 -3.285157 -6.246093 -6.785157 -6.761718 z m 0 0"/>
    <path d="m 4.800781 8 l -1.800781 2 h -0.714844 c -0.664062 0 -1.285156 0.472656 -1.285156 1.296875 v 1.425781 c 0 0.777344 0.527344 1.277344 1.285156 1.277344 h 0.714844 l 1.785156 2 h 1.207032 v -8 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwSpeakerwirelesssymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwSpeakerwirelesssymbolic;
