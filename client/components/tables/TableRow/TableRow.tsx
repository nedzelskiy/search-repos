import * as React from 'react';
import TableCell from '../TableCell/TableCell';
import './styles.scss';

export interface Props extends React.HTMLAttributes<HTMLDivElement> {
  cells: React.ReactNode[];
}

const TableRow: React.FC<Props> = (props: Props): JSX.Element => (
  <div className={`table-row ${props.className}`}>
    {props.cells.map((children, index) => {
      return <TableCell key={index}>{children}</TableCell>;
    })}
  </div>
);

TableRow.defaultProps = {
  className: '',
};

export default TableRow;
