export interface State {
  query: string;
  languageQuery: string;
  topicQuery: string;
  sortQuery: string;
  itemsPerPage: number;
  currentPage: number;
  totalQuery: string;
  isProcessing: boolean;
  fetchError: string;
}

const initialState: State = {
  currentPage: 1,
  itemsPerPage: 50,
  query: '',
  languageQuery: '',
  sortQuery: '',
  topicQuery: '',
  totalQuery: '',
  isProcessing: false,
  fetchError: '',
};

export default initialState;
