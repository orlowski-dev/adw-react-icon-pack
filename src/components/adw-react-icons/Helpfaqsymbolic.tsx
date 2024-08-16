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
      <path d="M2 5C.892 5 0 5.892 0 7v7c0 1.108.892 2 2 2h9c1.108 0 2-.892 2-2v-3.8L16 7h-3c0-1.108-.892-2-2-2zm4.438 2C7.75 6.926 8.926 7.936 9 9.25c0 1.121-.308 1.544-1.281 2.281a1.68 1.68 0 00-.281.25c-.04.05-.032.033-.032.031.006.423-.39.782-.812.782a.79.79 0 01-.781-.782c0-.401.179-.754.375-1a3.14 3.14 0 01.562-.562 3.85 3.85 0 00.563-.531c.074-.09.097-.24.093-.344v-.031a.785.785 0 00-.843-.75c-.451.025-.813.362-.851.758a.697.697 0 01-.718.648.816.816 0 01-.781-.594 1.725 1.725 0 01.01-.533c.005-.014.006-.03.012-.043.202-1.024 1.09-1.768 2.203-1.83zm.156 6.406a.82.82 0 01.812.813c0 .442-.37.781-.812.781a.768.768 0 01-.781-.781c0-.442.339-.813.78-.813zM2 1C.892 1 0 1.892 0 3v.568A3.918 3.918 0 012 3h9c1.376 0 2.55.763 3.268 1.848L16 3h-3c0-1.108-.892-2-2-2z" fill="#474747"/>
    </svg>
  );
};

const AdwHelpfaqsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwHelpfaqsymbolic;
