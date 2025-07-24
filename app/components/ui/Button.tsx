import React from "react";
import Link from "next/link";
import {ButtonProps, LinkProps} from '../../types'

type Props = ButtonProps | LinkProps;

export const Button = (props: Props & { className?: string }) => {
  const { className, children, ...rest } = props;

  const baseClasses = `
    relative bg-cyan-400 
    text-black font-bold py-2 px-6
    clip-path-arrow
    cursor-pointer
    hover:bg-red-400
  `;
  const allClasses = `${baseClasses} ${className ?? ""}`;

  if (props.asLink) {
    const { href, ...linkProps } = rest as LinkProps;
    return (
      <Link href={href} {...linkProps} className={allClasses}>
        {children}
      </Link>
    );
  } else {
    return (
      <button type="button" className={allClasses} {...(rest as ButtonProps)}>
        {children}
      </button>
    );
  }
};
