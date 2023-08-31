import React from 'react';
import { useRouter } from 'next/router';
import { cva } from 'class-variance-authority';
import { twMerge } from 'tw-merge';

const buttonVariants = cva('rounded-md py-4 px-8 shadow font-medium', {
  variants: {
    variant: {
      glass: 'bg-glass/30 backdrop-blur-sm hover:bg-glass/60',
      white: 'bg-light',
    },
  },
});

const Button = ({ className, children, variant, path, ...props }) => {
  const { push } = useRouter();

  const handleClick = () => {
    push(`/${path}`);
  };

  return (
    <button
      {...props}
      onClick={handleClick}
      className={twMerge(buttonVariants({ variant, className }))}
    >
      {children}
    </button>
  );
};

export default Button;
