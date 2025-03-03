import React from 'react';
import NextLink from 'next/link';
import { cn } from '@/lib/utils';

interface LinkProps {
  href: string;
  className?: string;
  variant?: 'default' | 'subtle' | 'accent';
  children: React.ReactNode;
  external?: boolean;
}

export const Link = ({
  href,
  className,
  variant = 'default',
  children,
  external = false,
  ...props
}: LinkProps) => {
  const variants = {
    default: 'text-blue-600 hover:text-blue-700 underline-offset-4 hover:underline',
    subtle: 'text-gray-700 hover:text-gray-900 hover:underline underline-offset-4',
    accent: 'text-blue-700 hover:text-blue-800 font-medium underline-offset-4 hover:underline'
  };

  const linkProps = {
    className: cn(variants[variant], className),
    ...props
  };

  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...linkProps}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink href={href} {...linkProps}>
      {children}
    </NextLink>
  );
}; 