import NextLink from 'next/link';

interface PropsInterface {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const Link: React.FC<PropsInterface> = ({ href, children, ...props }) => {
  return (
    <NextLink href={href}>
      <a {...props}>
        {children}
      </a>
    </NextLink>
  );
}

export default Link;