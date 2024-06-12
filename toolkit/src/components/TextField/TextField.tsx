import { type ComponentPropsWithoutRef } from 'react';

import './text-field.scss';

type TextFieldProps = {} & ComponentPropsWithoutRef<'input'>;

const TextField: React.FC<TextFieldProps> = (props) => {
  const { ...inputProps } = props;

  return <input className="text-field" {...inputProps} />;
};

export default TextField;
