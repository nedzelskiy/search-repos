import * as React from 'react';
import { Debounce } from "react-throttle";
import { useDispatch } from 'react-redux';
import Input, { Props as InputProps } from '../Input/Input';
import { setQuery } from '../../../../data/app/redux/app.redux.actioins';
import './styles.scss';

interface Props extends InputProps {
  initialValue?: string;
}

const QueryInput: React.FC<Props> = (props: Props): JSX.Element => {
  const dispatch = useDispatch();
  const onChangeHandler = React.useCallback(
    (event) => {
      dispatch(setQuery(event.target.value));
    },
    [dispatch]
  );
  React.useEffect(() => {
    dispatch(setQuery(props.initialValue!));
  }, [props.initialValue!]);
  return (
    <Debounce time="200" handler="onChange">
      <Input
        {...props}
        className="query-input"
        defaultValue={props.initialValue!}
        onChange={onChangeHandler}
      />
    </Debounce>
  );
};

QueryInput.defaultProps = {
  initialValue: 'react',
};

export default QueryInput;
