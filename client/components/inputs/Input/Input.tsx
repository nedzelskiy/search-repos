import * as React from 'react';
import './styles.scss';

export interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<Props> = (props: Props): JSX.Element => (
  <input
    {...props}
    className={`input ${props.className || ''}`}
  />
);

export default Input;
