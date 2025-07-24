export type ButtonProps = {
  asLink?: false;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export type LinkProps = {
  asLink: true;
  href: string;
  children: React.ReactNode;
} & React.AnchorHTMLAttributes<HTMLAnchorElement>;
