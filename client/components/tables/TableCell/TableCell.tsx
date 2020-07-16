import * as React from 'react';
import './styles.scss';

interface Props extends React.HTMLAttributes<HTMLDivElement>{}

const TableCell: React.FC<Props> = (props: Props): JSX.Element => (
  <div className="table-cell">{props.children}</div>
);

export default TableCell;
