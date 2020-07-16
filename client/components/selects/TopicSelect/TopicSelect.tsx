import * as React from 'react';
import { useDispatch } from 'react-redux';
import Select, { Props as SelectProps } from '../Select/Select';
import { setTopicQuery } from '../../../../data/app/redux/app.redux.actioins';

interface Props extends SelectProps {}

const TopicSelect: React.FC<Props> = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const onChangeHandler = React.useCallback(
    (valueMeta) => {
      dispatch(setTopicQuery(valueMeta ? `topic:${valueMeta.value}` : ''));
    },
    [dispatch]
  );
  return (
    <Select
      {...props}
      onChange={onChangeHandler}
      className="topic-select"
      instanceId="topic"
      options={[
        { value: 'react', label: 'React' },
      ]}
    />
  );
};

export default TopicSelect;
