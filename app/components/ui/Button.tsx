import React from "react";
import Link from "next/link";

type ButtonProps = {
  asLink?: false;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

type LinkProps = {
  asLink: true;
  href: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;

type Props = ButtonProps | LinkProps;

export const Button = (props: Props) => {
  const baseClasses = `
    relative inline-block bg-cyan-400 
    text-black font-bold py-2 px-6
    clip-path-arrow
    cursor-pointer
  `;

  if (props.asLink) {
    const { href, children, ...linkProps } = props;
    return (
      <Link href={href} {...linkProps} className={baseClasses}>
        {children}
      </Link>
    );
  } else {
    const { children, ...buttonProps } = props;
    return (
      <button type="button" className={baseClasses} {...buttonProps}>
        {children}
      </button>
    );
  }
};
