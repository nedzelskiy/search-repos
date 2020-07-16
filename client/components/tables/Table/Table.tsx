import * as React from 'react';
import TableRow, { Props as TableRowProps }
  from '../TableRow/TableRow';

export interface Props {
  data: TableRowProps[];
}

const Table: React.FC<Props> = (props: Props): JSX.Element => {
  return (
    <div className="table">
      {props.data.map((tableRowProps, index) => {
        return <TableRow {...tableRowProps} key={index}/>
      })}
    </div>
  );
};

export default Table;
