import * as React from 'react';
import { useDispatch } from 'react-redux';
import Select, { Props as SelectProps } from '../Select/Select';
import { setSortQuery } from '../../../../data/app/redux/app.redux.actioins';

interface Props extends SelectProps {}

const Sort: React.FC<Props> = (props: Props): JSX.Element => {
  const initialOption = options[0];
  const dispatch = useDispatch();
  const getQuery = React.useCallback((value: string) => {
    return value ? `sort:${value}` : '';
  }, []);
  const onChangeHandler = React.useCallback(
    (valueMeta) => {
      dispatch(setSortQuery(valueMeta ? getQuery(valueMeta.value) : ''));
    },
    [dispatch]
  );
  React.useEffect(() => {
    dispatch(setSortQuery(getQuery(initialOption.value)));
  }, [initialOption.value]);

  return (
    <Select
      {...props}
      onChange={onChangeHandler}
      defaultValue={initialOption}
      className="sort-select"
      instanceId="sort"
      options={options}
    />
  );
};

export default Sort;

const options = [
  { value: 'stars', label: 'Stars' },
  { value: 'forks', label: 'Forks' },
];
