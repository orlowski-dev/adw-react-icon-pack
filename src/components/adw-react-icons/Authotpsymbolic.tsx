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
      <path d="m 3 0 c -1.644531 0 -3 1.355469 -3 3 v 2 c 0 1.644531 1.355469 3 3 3 h 8 c 0.027344 0 0.046875 0 0.074219 -0.003906 c 0.210937 0.863281 0.988281 1.5 1.917969 1.503906 v 0.496094 h -0.007813 c -0.003906 0.546875 -0.449219 0.996094 -1 0.992187 l -8.984375 0.011719 c -1.105469 0.003906 -1.996094 0.894531 -1.996094 1.996094 c 0 1.105468 0.890625 2 1.996094 1.996094 h 7 c 2.207031 0 3.988281 -1.785157 3.988281 -3.992188 v -1.765625 c 0.597657 -0.339844 0.996094 -0.984375 0.996094 -1.722656 c 0 -0.773438 -0.441406 -1.441407 -1.085937 -1.769531 c 0.070312 -0.199219 0.101562 -0.425782 0.101562 -0.742188 v -2 c 0 -1.644531 -1.355469 -3 -3 -3 z m 0 2 h 8 c 0.570312 0 1 0.429688 1 1 v 2 c 0 0.570312 -0.429688 1 -1 1 h -8 c -0.570312 0 -1 -0.429688 -1 -1 v -2 c 0 -0.570312 0.429688 -1 1 -1 z m 0.945312 1 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 c 0.554688 0 1 -0.449219 1 -1 s -0.445312 -1 -1 -1 z m 3.003907 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 c 0.554687 0 1 -0.449219 1 -1 s -0.445313 -1 -1 -1 z m 2.96875 0 c -0.550781 0 -1 0.449219 -1 1 s 0.449219 1 1 1 s 1 -0.449219 1 -1 s -0.449219 -1 -1 -1 z m 3.082031 3.53125 c 0.542969 0 0.984375 0.441406 0.984375 0.984375 c 0 0.539063 -0.441406 0.984375 -0.984375 0.984375 s -0.988281 -0.445312 -0.988281 -0.984375 c 0 -0.542969 0.445312 -0.984375 0.988281 -0.984375 z m -0.113281 5.246094 c -0.339844 1.273437 -1.503907 2.210937 -2.886719 2.214844 h -7 c -0.546875 0 -0.996094 -0.445313 -0.996094 -0.992188 c 0 -0.550781 0.449219 -0.996094 0.996094 -0.996094 l 8.980469 -0.011718 c 0.328125 0 0.636719 -0.078126 0.90625 -0.214844 z m 0 0" fill="currentColor"/>
    </svg>
  );
};

const AdwAuthotpsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAuthotpsymbolic;
