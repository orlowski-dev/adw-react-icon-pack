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
      <path d="m 13.5 2.007812 s 0.5 0.222657 0.5 0.5 v 0.988282 c 0 0.273437 -0.5 0.5 -0.5 0.5 h -1 s -0.5 -0.226563 -0.5 -0.5 v -0.988282 c 0 -0.277343 0.5 -0.5 0.5 -0.5 z m -4 0 c 0.277344 0 0.5 0.222657 0.5 0.5 v 0.988282 c 0 0.273437 -0.222656 0.5 -0.5 0.5 h -8 c -0.277344 0 -0.5 -0.226563 -0.5 -0.5 v -0.988282 c 0 -0.277343 0.222656 -0.5 0.5 -0.5 z m 4 5 s 0.5 0.222657 0.5 0.5 v 0.988282 c 0 0.273437 -0.5 0.5 -0.5 0.5 h -1 s -0.5 -0.226563 -0.5 -0.5 v -0.988282 c 0 -0.277343 0.5 -0.5 0.5 -0.5 z m -4 0 s 0.5 0.222657 0.5 0.5 v 0.988282 c 0 0.273437 -0.222656 0.5 -0.5 0.5 h -8 c -0.277344 0 -0.5 -0.226563 -0.5 -0.5 v -0.988282 c 0 -0.277343 0.5 -0.5 0.5 -0.5 z m 4 5 c 0.277344 0 0.5 0.222657 0.5 0.5 v 0.988282 c 0 0.273437 -0.5 0.5 -0.5 0.5 h -1 s -0.5 -0.226563 -0.5 -0.5 v -0.988282 c 0 -0.277343 0.222656 -0.5 0.5 -0.5 z m -4 0 c 0.277344 0 0.5 0.222657 0.5 0.5 v 0.988282 c 0 0.273437 -0.222656 0.5 -0.5 0.5 h -8 c -0.277344 0 -0.5 -0.226563 -0.5 -0.5 v -0.988282 c 0 -0.277343 0.222656 -0.5 0.5 -0.5 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwViewListBulletRtlSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwViewListBulletRtlSymbolic;
