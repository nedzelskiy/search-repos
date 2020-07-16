import * as React from 'react';
import ReactSelect from 'react-select/creatable';
import { ActionMeta } from 'react-select/src/types';
import { Props as ReactSelectProps } from 'react-select/src/Select';

export interface Props extends ReactSelectProps {
  onChange?: onChangeCallback;
}

const Select: React.FC<Props> = (props: Props): JSX.Element => {
  const [options, setOptions] = React.useState(props.options);
  const onChange: onChangeCallback = React.useCallback((valueMeta: OptionType, actionMeta) => {
      if (actionMeta.action === 'create-option') {
        const newValue = valueMeta.label.toLowerCase().replace(/\s+/g, '-');
        const stateOptions = options as OptionType[] ;
        if (!stateOptions.find((vm) => vm.value === newValue)) {
          setOptions([
            ...stateOptions,
            {
              value: newValue,
              label: valueMeta.value,
            }
          ]);
        }
      }
      props.onChange!(valueMeta, actionMeta);
    },
    [props.onChange],
  );

  return (
    <ReactSelect
      {...props}
      options={options}
      isClearable={true}
      className={`select ${props.className}`}
      onChange={onChange}
    />
  );
};

Select.defaultProps = {
  options: [],
  className: '',
  onChange: () => {},
  placeholder: "Select or type your option...",
};

export default Select;

type onChangeCallback =  (valueMeta: OptionType, actionMeta: ActionMeta<OptionType>) => void;

export interface OptionType {
  value: string;
  label: string;
}
