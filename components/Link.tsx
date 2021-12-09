import NextLink from "next/link";
import { ComponentProps } from "react";

interface Props extends ComponentProps<"a"> {
  href: string;
  children?: React.ReactNode;
};

const Link: React.FC<Props> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;