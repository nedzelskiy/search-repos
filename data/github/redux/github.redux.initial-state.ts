export interface State extends SearchResultInfo {
  reposData: RepoData[];
}

export interface SearchResultInfo {
  repositoryCount: number;
  startCursor: string;
  endCursor: string;
  hasNextPage: boolean;
  hasPreviousPage: boolean;
}

export interface RepoData {
  name: string;
  url: string;
  starsCount: number;
  forksCount: number;
}

const initialState: State = {
  reposData: [],
  endCursor: '',
  startCursor: '',
  repositoryCount: 0,
  hasNextPage: false,
  hasPreviousPage: false,
};

export default initialState;
