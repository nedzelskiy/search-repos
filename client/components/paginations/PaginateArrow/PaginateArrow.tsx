import * as React from 'react';
import './styles.scss';

export enum Direction {
  LEFT = 'left',
  RIGHT = 'right',
}

export interface Props extends React.HTMLAttributes<HTMLSpanElement> {
  direction: Direction;
  isDisable?: boolean
}

const PaginateArrow: React.FC<Props> =
  ({ direction, isDisable,  ...props}: Props): JSX.Element => (
    <span
      {...props}
      className={`paginate-arrow ${direction} ${isDisable ? 'disabled' : ''}`}
      onClick={isDisable
        ? () => {}
        : props.onClick
      }
    >
      {
        direction === Direction.LEFT
          ? <span>&#60;</span>
          : <span>&#62;</span>
      }
    </span>
  );

PaginateArrow.defaultProps = {
  isDisable: false,
};

export default PaginateArrow;
