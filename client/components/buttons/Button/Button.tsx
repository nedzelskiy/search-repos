import * as React from 'react';
import './styles.scss';

interface Props {
  children: React.ReactNode;
  className?: string;
  isDisable?: boolean;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <button
      className={`button ${props.isDisable ? 'disabled' : ''} ${props.className}`}
      disabled={props.isDisable}
      onClick={props.isDisable
        ? Button.defaultProps!.onClick
        : props.onClick
      }
    >
      {props.children}
    </button>
  );
};

Button.defaultProps = {
  className: '',
  onClick: () => {},
  isDisable: false,
};

export default Button;
