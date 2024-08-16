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
      <path d="m 7.664062 0.0078125 c -2.613281 0.1093755 -5.003906 1.4882815 -6.410156 3.6953125 c -1.90625 3 -1.605468 6.898437 0.734375 9.574219 c 2.347657 2.667968 6.175781 3.472656 9.398438 1.96875 c 0.5 -0.234375 0.71875 -0.828125 0.484375 -1.328125 s -0.828125 -0.71875 -1.332032 -0.484375 c -2.414062 1.132812 -5.289062 0.53125 -7.046874 -1.476563 c -1.761719 -2.003906 -1.988282 -4.933593 -0.550782 -7.179687 c 1.429688 -2.253906 4.179688 -3.289063 6.738282 -2.539063 c 2.5625 0.746094 4.324218 3.09375 4.320312 5.761719 v 0.039062 v 0.960938 c 0 0.359375 -0.1875 0.683594 -0.5 0.863281 c -0.308594 0.179688 -0.6875 0.179688 -1 0 c -0.308594 -0.175781 -0.5 -0.507812 -0.5 -0.863281 v -1 c 0 -2.199219 -1.800781 -4 -4 -4 c -2.195312 0 -4 1.800781 -4 4 c 0 2.195312 1.804688 4 4 4 c 1.046875 0 1.992188 -0.417969 2.707031 -1.078125 c 0.222657 0.265625 0.488281 0.496094 0.792969 0.675781 c 0.929688 0.535156 2.074219 0.535156 3 0 c 0.929688 -0.539062 1.5 -1.527344 1.5 -2.597656 v -1 c 0 -3.558594 -2.347656 -6.683594 -5.761719 -7.683594 c -0.835937 -0.2421872 -1.703125 -0.347656 -2.574219 -0.3085935 z m 0.335938 5.9921875 c 1.117188 0 2 0.882812 2 2 c 0 1.113281 -0.882812 2 -2 2 c -1.113281 0 -2 -0.886719 -2 -2 c 0 -1.117188 0.886719 -2 2 -2 z m 0 0" fill="#2e3436"/>
    </svg>
  );
};

const AdwGoapanelsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwGoapanelsymbolic;
