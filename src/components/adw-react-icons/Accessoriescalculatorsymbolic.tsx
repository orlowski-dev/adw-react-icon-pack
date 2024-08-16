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
      <path d="M2.031 0c-.542 0-1 .329-1 .938v14.124c0 .587.377.938 1 .938h13.031c.52 0 .938-.351.938-.938V.938A.908.908 0 0015.062 0zM3 2.031h11.031V5H3zM3.188 6h1.624A.18.18 0 015 6.188v1.625A.18.18 0 014.812 8H3.188A.179.179 0 013 7.812V6.188a.18.18 0 01.188-.187zm3 0h1.625A.18.18 0 018 6.188v1.625A.18.18 0 017.812 8H6.188A.179.179 0 016 7.812V6.188a.18.18 0 01.188-.187zm3 0h1.624a.18.18 0 01.188.188v1.625a.18.18 0 01-.188.187H9.188A.179.179 0 019 7.812V6.188a.18.18 0 01.188-.187zm3 0h1.624a.18.18 0 01.188.188v1.625a.18.18 0 01-.188.187h-1.624A.179.179 0 0112 7.812V6.188a.18.18 0 01.188-.187zm-9 3h1.624A.18.18 0 015 9.188v1.624a.18.18 0 01-.188.188H3.188A.179.179 0 013 10.812V9.188C3 9.076 3.077 9 3.188 9zm3 0h1.625A.18.18 0 018 9.188v1.624a.18.18 0 01-.188.188H6.188A.179.179 0 016 10.812V9.188C6 9.076 6.077 9 6.188 9zm3 0h1.624a.18.18 0 01.188.188v1.624a.18.18 0 01-.188.188H9.188A.179.179 0 019 10.812V9.188C9 9.076 9.077 9 9.188 9zm3 0h1.624a.18.18 0 01.188.188v1.624a.18.18 0 01-.188.188h-1.624a.179.179 0 01-.188-.188V9.188A.18.18 0 0112.188 9zm-9 3h1.624a.18.18 0 01.188.188v1.624a.18.18 0 01-.188.188H3.188A.179.179 0 013 13.812v-1.624A.18.18 0 013.188 12zm3 0h1.625a.18.18 0 01.187.188v1.624a.18.18 0 01-.188.188H6.188A.179.179 0 016 13.812v-1.624A.18.18 0 016.188 12zm3 0h1.624a.18.18 0 01.188.188v1.624a.18.18 0 01-.188.188H9.188A.179.179 0 019 13.812v-1.624A.18.18 0 019.188 12zm3 0h1.624a.18.18 0 01.188.188v1.624a.18.18 0 01-.188.188h-1.624a.179.179 0 01-.188-.188v-1.624a.18.18 0 01.188-.188z" fill="#474747"/>
    </svg>
  );
};

const AdwAccessoriescalculatorsymbolic = ({ wrapper, wrapperProps, ...props }: Props) => {
  if (!wrapper) {
    return <SvgTemplate {...props} />;
  }

  return createElement(wrapper, wrapperProps, <SvgTemplate {...props} />);
};

export default AdwAccessoriescalculatorsymbolic;
