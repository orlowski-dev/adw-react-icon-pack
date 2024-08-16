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
      <path d="M8.017 0a8 8 0 100 16 8 8 0 000-16zm0 2a2 2 0 110 4 2 2 0 010-4zM3.51 6c.016 0 .032 0 .048.002 0 0 3.015.248 4.46.248 1.444 0 4.458-.248 4.458-.248a.5.5 0 01.395.852c-.193.193-.293.182-.426.22a16.18 16.18 0 01-2.428.426c.05 1.877.084 3.307.354 4.2.15.492.297.853.41 1.113.057.13.104.233.143.326.039.092.093.121.093.361a.5.5 0 01-.853.354c-.228-.229-.4-.527-.64-.936a37.549 37.549 0 01-.76-1.371c-.399-.747-.614-1.18-.747-1.443-.132.262-.347.696-.746 1.443-.252.472-.519.962-.76 1.371-.24.409-.412.707-.64.936a.5.5 0 01-.854-.354c0-.24.055-.269.094-.361l.143-.327c.113-.26.26-.62.41-1.113.27-.892.304-2.322.353-4.199-.9-.07-1.517-.235-2.427-.426-.133-.038-.233-.027-.426-.22A.5.5 0 013.51 6z" style="marker:none" overflow="visible" fill="#2e3436"/>
    </svg>
  );
};

const AdwPreferencesdesktopaccessibilitysymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwPreferencesdesktopaccessibilitysymbolic;
