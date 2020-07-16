import * as React from 'react';
import Table from '../Table/Table';
import { useSelector } from 'react-redux'
import { GithubReducerState } from '../../../../data/rootReducer';
import TableRow, { Props as TableRowProps } from '../TableRow/TableRow';
import { RepoData } from '../../../../data/github/redux/github.redux.initial-state';
import './styles.scss';

const ReposTable: React.FC = (): JSX.Element | null => {
  const reposData = useSelector((state: GithubReducerState) => state.githubReducer.reposData);
  const data: TableRowProps[] = reposData.map((repoData: RepoData) => {
    return {
      cells: [
        <a href={repoData.url}>{repoData.name}</a>,
        repoData.starsCount,
        repoData.forksCount,
      ],
    };
  });

  return reposData.length > 0
    ? <div className="repos-table">
        <TableRow
          cells={[
            <span>Repository Name &#127919;</span>,
            <span>Stars &#11088;</span>,
            <span>Forks &#127860;</span>,
          ]}
          className="table-head"
        />
        <Table data={data} />
      </div>
    : null;
};

export default ReposTable;
