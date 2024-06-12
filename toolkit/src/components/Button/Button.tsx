import { type ComponentPropsWithoutRef } from 'react';

import './button.scss';

type ButtonProps = {
  children: React.ReactNode;
} & ComponentPropsWithoutRef<'button'>;

const Button: React.FC<ButtonProps> = (props) => {
  const { children, ...buttonProps } = props;

  return (
    <button className="btn" {...buttonProps}>
      {children}
    </button>
  );
};

export default Button;
