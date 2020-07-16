import * as React from 'react';
import { useDispatch } from 'react-redux';
import Select, { Props as SelectProps } from '../Select/Select';
import { setLanguageQuery } from '../../../../data/app/redux/app.redux.actioins';

interface Props extends SelectProps {}

const LanguageSelect: React.FC<Props> = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const onChangeHandler = React.useCallback(
    (valueMeta) => {
      dispatch(setLanguageQuery(valueMeta ? `language:${valueMeta.value}` : ''));
    },
    [dispatch]
  );
  return (
    <Select
      {...props}
      onChange={onChangeHandler}
      className="language-select"
      instanceId="language"
      options={[
        { value: 'javascript', label: 'JavaScript' },
        { value: 'typescript', label: 'Typescript' },
      ]}
    />
  );
};

export default LanguageSelect;
