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
      <path d="m 1.964844 0 s -0.96875 1 -0.96875 2 v 12 c 0 1.007812 -1.00000025 2 -1.00000025 2 h 1.00000025 s 0.421875 -0.425781 0.71875 -1 h 1 c -0.296875 0.574219 -0.71875 1 -0.71875 1 h 1 s 1 -1.019531 1 -2 v -2 h 1 v -1 h -1 v -5 h 8 v 1 h 3 v -5 c 0 -1 0.96875 -2 0.96875 -2 h -3 s -0.96875 1 -0.96875 2 v 3 h -8 v -3 c 0 -1 0.96875 -2 0.96875 -2 z m 0.3125 1 h 1 c -0.152344 0.304688 -0.28125 0.652344 -0.28125 1 h -1 c 0 -0.347656 0.128906 -0.695312 0.28125 -1 z m 11 0 h 1 c -0.152344 0.304688 -0.28125 0.652344 -0.28125 1 h -1 c 0 -0.347656 0.128906 -0.695312 0.28125 -1 z m -11.28125 2 h 1 v 1 h -1 z m 11 0 h 1 v 1 h -1 z m -11 2 h 1 v 1 h -1 z m 11 0 h 1 v 1 h -1 z m -11 2 h 1 v 1 h -1 z m 7 1 v 4.28125 c -0.292969 -0.171875 -0.636719 -0.28125 -1 -0.28125 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 c 1.105468 0 2 -0.894531 2 -2 v -5 h 4 v 3.28125 c -0.292969 -0.171875 -0.636719 -0.28125 -1 -0.28125 c -1.105469 0 -2 0.894531 -2 2 s 0.894531 2 2 2 c 1.105468 0 2 -0.894531 2 -2 v -6 z m -7 1 h 1 v 1 h -1 z m 0 2 h 1 v 1 h -1 z m 0 2 h 1 v 1 h -1 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwApplicationsMultimediaSymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwApplicationsMultimediaSymbolic;
