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
        <path d="m 15.988281 3.488281 c 0 -1.921875 -1.574219 -3.4999998 -3.496093 -3.4999998 h -9.003907 c -1.917969 0 -3.4999998 1.5781248 -3.4999998 3.4999998 v 9.003907 c 0 1.917968 1.5820308 3.496093 3.4999998 3.496093 h 9.003907 c 1.921874 0 3.496093 -1.578125 3.496093 -3.496093 z m -2 0 v 9.003907 c 0 0.847656 -0.648437 1.496093 -1.496093 1.496093 h -9.003907 c -0.847656 0 -1.5 -0.648437 -1.5 -1.496093 v -9.003907 c 0 -0.847656 0.652344 -1.5 1.5 -1.5 h 9.003907 c 0.847656 0 1.496093 0.652344 1.496093 1.5 z m 0 0"/>
        <path d="m 12.992188 3.488281 c 0 0.277344 -0.226563 0.5 -0.5 0.5 h -9 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 c 0 -0.277343 0.222656 -0.5 0.5 -0.5 h 9 c 0.273437 0 0.5 0.222657 0.5 0.5 z m 0 0"/>
        <path d="m 12.992188 5.488281 c 0 0.277344 -0.226563 0.5 -0.5 0.5 h -9 c -0.277344 0 -0.5 -0.222656 -0.5 -0.5 c 0 -0.277343 0.222656 -0.5 0.5 -0.5 h 9 c 0.273437 0 0.5 0.222657 0.5 0.5 z m 0 0"/>
        <path d="m 15.003906 9.222656 c 0 -1.242187 -1.015625 -2.261718 -2.261718 -2.261718 h -9.507813 c -1.242187 0 -2.261719 1.019531 -2.261719 2.261718 v 4.023438 c 0 1.242187 1.019532 2.257812 2.261719 2.257812 h 9.507813 c 1.246093 0 2.261718 -1.015625 2.261718 -2.257812 z m -1 0 v 4.023438 c 0 0.707031 -0.554687 1.257812 -1.261718 1.257812 h -9.507813 c -0.707031 0 -1.261719 -0.550781 -1.261719 -1.257812 v -4.023438 c 0 -0.707031 0.554688 -1.261718 1.261719 -1.261718 h 9.507813 c 0.707031 0 1.261718 0.554687 1.261718 1.261718 z m 0 0"/>
        <path d="m 12 10 h 1 v 1 h -1 z m -2 0 h 1 v 1 h -1 z m -2 0 h 1 v 1 h -1 z m -4 0 h 1 v 1 h -1 z m 2 0 h 1 v 1 h -1 z m 0 0" fill-opacity="0.5"/>
        <path d="m 11.042969 10.980469 h 1 v 1 h -1 z m -2 0 h 1 v 1 h -1 z m -2 0 h 1 v 1 h -1 z m -2 0 h 1 v 1 h -1 z m -2 0 h 1 v 1 h -1 z m 0 0" fill-opacity="0.296271"/>
        <path d="m 11 9 h 1 v 1 h -1 z m -2 0 h 1 v 1 h -1 z m -2 0 h 1 v 1 h -1 z m -2 0 h 1 v 1 h -1 z m -2 0 h 1 v 1 h -1 z m 0 0"/>
    </g>
    </svg>
  );
};

const AdwContainersymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwContainersymbolic;
